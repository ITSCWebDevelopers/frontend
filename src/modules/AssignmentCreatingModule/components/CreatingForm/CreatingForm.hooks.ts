import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import type {CreatingFormValidationSchema} from './CreatingForm.constants';
import {creatingFormValidationSchema} from './CreatingForm.constants';
import {getApplicationDamages, getApplications} from '@/shared/api';

export interface SelectValues {
  id: string;
  label: string;
}

export const useCreatingForm = () => {
  const {
    register,
    getValues,
    setValue,
    formState: {errors},
  } = useForm<CreatingFormValidationSchema>({resolver: yupResolver(creatingFormValidationSchema)});

  const [applications, setApplications] = useState<SelectValues[]>([]);
  const [damages, setDamages] = useState<SelectValues[]>([]);

  const handleChangeApplication = (newValue: string) => setValue('application', newValue);

  const handleChangeDamage = (newValue: string) => setValue('damage', newValue);

  const handleGetApplications = async () => {
    try {
      const res = await getApplications();
      console.log();
      setApplications(
        res.data.map((application) => ({
          id: application.id,
          label: `${application.road_name}`,
        })),
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleGetDamages = async () => {
    try {
      const res = await getApplicationDamages(getValues('application'));
      setDamages(
        res.data.map((application) => ({
          id: application.id,
          label: `${application.damage_type}, ${application.address}`,
        })),
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleGetApplications();
  }, []);

  useEffect(() => {
    if (getValues('application')) handleGetDamages();
    else setDamages([]);
  }, [applications, getValues('application')]);

  return {
    register,
    errors,
    applications,
    damages,
    handleGetApplications,
    handleGetDamages,
    handleChangeApplication,
    handleChangeDamage,
    isAddressChosen: !!getValues('application'),
  };
};
