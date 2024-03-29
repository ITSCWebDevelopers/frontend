import {GetFindAddress} from '@/shared/api/requests/address';
import {useAppDispatch} from '@/shared/hooks/redux';
import {Defect, setDefect} from '@/store/defect/defectSlice';
import {Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import Webcam from 'react-webcam';
import {CameraModal} from './CameraModal';

export const DefectModule = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [coordinates, setCoordinates] = useState<any>(null);
  const [isCam, setIsCam] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [address, setAddress] = useState('');
  const {register, getValues, watch} = useForm<Defect>();
  const webcamRef = useRef<Webcam>(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({latitude: position.coords.latitude, longitude: position.coords.longitude});
        },
        () => {},
      );
    }
  }, []);

  useEffect(() => {
    if (!coordinates) return;
    const fetchAddress = async () => {
      const response = await GetFindAddress({
        config: {
          params: {
            format: 'json',
            lat: coordinates.latitude,
            lon: coordinates.longitude,
            zoom: 18,
          },
        },
      });
      setAddress(response.data.display_name);
    };
    fetchAddress();
  }, [coordinates]);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) return;
    setPhotos((prev) => [...prev, imageSrc]);
    setIsCam(false);
  };

  const onSaveDefect = () => {
    dispatch(
      setDefect({
        address: address,
        coords: coordinates,
        defectType: getValues('defectType'),
        defectView: getValues('defectView'),
        photos: photos,
        square: getValues('square'),
      }),
    );
    navigate(-1);
  };

  return (
    <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', gap: '20px'}}>
      {isCam === true && (
        <div>
          <CameraModal webcamRef={webcamRef} capture={capture} open={isCam} onClose={() => setIsCam(false)} />
        </div>
      )}
      <Box>
        <Typography variant='h6' align='left'>
          Координаты
        </Typography>
        {coordinates ? (
          <Typography align='left'>
            {coordinates.latitude} - {coordinates.longitude}
          </Typography>
        ) : (
          <Typography align='left'>Поиск координат</Typography>
        )}
      </Box>
      <Box>
        <Typography variant='h6'>Адрес</Typography>
        <Typography>{address.length ? address : 'Поиск адреса'}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Выберите категорию</Typography>
        <RadioGroup
          sx={{display: 'flex', flexDirection: 'row'}}
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel {...register('defectType')} value='female' control={<Radio />} label='Знаки' />
          <FormControlLabel {...register('defectType')} value='male' control={<Radio />} label='Дефекты/Барьеры' />
        </RadioGroup>
      </Box>
      <Box>
        <Typography variant='h6'>Введите тип дефекта</Typography>
        <TextField size='small' fullWidth {...register('defectView')} />
      </Box>

      <Box>
        <Typography variant='h6'>Введите площадь</Typography>
        <TextField {...register('square')} size='small' type='number' sx={{width: '20%', marginRight: '10px'}} />
        <Typography display={'inline'}>кв.м.</Typography>
      </Box>

      <Box>
        <Typography variant='h6'>Загрузите фотографии</Typography>
        <Button variant='outlined' onClick={() => setIsCam(!isCam)}>
          Камера
        </Button>
      </Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
        {photos?.map((photo, index) => (
          <Box>
            <img
              style={{display: 'block', width: '100px', height: '100px', borderRadius: '15%'}}
              src={photo}
              key={index}
            />
            <Button
              onClick={() => {
                setPhotos((prev) => prev.filter((_, photoIndex) => photoIndex !== index));
              }}
              size='small'
              color='error'
            >
              Удалить
            </Button>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginBlockStart: 'auto',
          marginBlockEnd: '20px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          disabled={!(photos.length && watch('square') && watch('defectView'))}
          onClick={() => {
            onSaveDefect();
          }}
          variant='contained'
        >
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};
