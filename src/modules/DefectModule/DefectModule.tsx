import {VIDEO_CONSTRAINTS} from '@/components/Camera/Camera.constants';
import {GetFindAddress} from '@/shared/api/requests/address';
import {useAppDispatch} from '@/shared/hooks/redux';
import {Defect, setDefect} from '@/store/defect/defectSlice';
import {Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import Webcam from 'react-webcam';

export const DefectModule = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [coordinates, setCoordinates] = useState<any>(null);
  const [isCam, setIsCam] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [address, setAddress] = useState('');
  const {register, getValues} = useForm<Defect>();
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
  };

  const onSaveDefect = () => {
    console.log('dispacth');
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
  };

  return (
    <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', gap: '20px'}}>
      {isCam === true && (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' videoConstraints={VIDEO_CONSTRAINTS} />
          <button onClick={capture}>Capture Photo</button>
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
          <Typography align='left'>Координаты не найдены</Typography>
        )}
      </Box>
      <Box>
        <Typography variant='h6'>Адрес</Typography>
        <Typography>{address.length ? address : 'Адрес не найден'}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Выберите тип дефекта</Typography>
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
        <Typography variant='h6'>Введите вид дефекта</Typography>
        <TextField {...register('defectView')} size='small' sx={{width: '100%'}} />
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
            <img style={{display: 'block', width: '100px', height: '100px'}} src={photo} key={index} />
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
          onClick={() => {
            onSaveDefect();
            navigate(-1);
          }}
          variant='contained'
        >
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};
