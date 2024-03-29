import {useEffect, useState} from 'react';
import 'regenerator-runtime';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import {useNavigate} from 'react-router-dom';
import type {CreatingFormValidationSchema} from './CreatingForm.constants';
import {creatingFormValidationSchema} from './CreatingForm.constants';
import {getApplicationDamages, getApplications, getContractors, postContractorRepair} from '@/shared/api';
import {ROUTES} from '@/shared/constants/routes';
import {ERRORS} from '@/shared/constants/errors';

export interface SelectValues {
  id: string;
  label: string;
}

export const useCreatingForm = () => {
  const navigate = useNavigate();

  const {
    register,
    getValues,
    setError,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<CreatingFormValidationSchema>({resolver: yupResolver(creatingFormValidationSchema)});

  const {transcript, listening, resetTranscript} = useSpeechRecognition();

  const [applications, setApplications] = useState<ApplicationShortDto[]>([]);
  const [damages, setDamages] = useState<DamageShortDto[]>([]);
  const [contractors, setContractors] = useState<ContractorModel[]>([]);

  const handleChangeApplication = (newValue: string) => {
    setValue('application', newValue);
    setValue('damage', '');
    handleGetDamages();
  };

  const getContractor = () => contractors[Number(getValues('contractor'))];

  const onSubmit = handleSubmit(async (data) => {
    const params: CreateRepairDto = {
      contractor: getContractor().id,
      description: data.description,
      date: data.date,
    };

    try {
      await postContractorRepair(getValues('damage'), {params});
      navigate(ROUTES.ASSIGNMENT);
    } catch (e) {
      setError('root', {message: ERRORS.UNKNOWN});
    }
  });

  const handleToggleListening = () => {
    if (listening) SpeechRecognition.stopListening();
    else {
      resetTranscript();
      SpeechRecognition.startListening();
    }
  };

  const handleChangeDamage = (newValue: string) => {
    setValue('damage', newValue);
    setValue('contractor', '');
    handleGetContractors();
  };

  const handleChangeContractor = (newValue: string) => {
    const contractorIndex = contractors.findIndex((contractor) => contractor.id === newValue);

    setValue('contractor', `${contractorIndex}`);
  };

  const handleGetApplications = async (query?: string) => {
    try {
      const res = await getApplications({config: {params: {road_name: query}}});
      setApplications(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleGetDamages = async (query?: string) => {
    try {
      const res = await getApplicationDamages(getValues('application'), {config: {params: {damage_type: query}}});
      setDamages(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleGetContractors = async (query?: string) => {
    try {
      const res = await getContractors({config: {params: {name: query}}});
      setContractors(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const translateContractors = () =>
    contractors.map((contractor) => ({
      id: contractor.id,
      label: contractor.name,
    }));

  const translateApplications = () =>
    applications.map((application) => ({
      id: application.report_id,
      label: application.road_name,
    }));

  const translateDamages = () =>
    damages.map((damage) => ({
      id: damage.id,
      label: `${damage.damage_type}`,
    }));

  useEffect(() => {
    handleGetApplications();
  }, []);

  useEffect(() => {
    setValue('description', transcript);
  }, [listening]);

  return {
    register,
    errors,
    applications: translateApplications(),
    damages: translateDamages(),
    handleGetApplications,
    handleGetDamages,
    handleChangeApplication,
    handleChangeDamage,
    isApplicationChosen: !!getValues('application'),
    isDamageChosen: !!getValues('damage'),
    isContractorChosen: !!getValues('contractor'),
    contractors: translateContractors(),
    handleGetContractors,
    handleChangeContractor,
    getContractor,
    handleToggleListening,
    listening,
    onSubmit,
  };
};
