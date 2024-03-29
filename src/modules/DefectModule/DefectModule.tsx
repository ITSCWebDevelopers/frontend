import {useEffect, useRef, useState} from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import type Webcam from 'react-webcam';
import {CameraModal} from './CameraModal';
import {setDefect} from '@/store/defect/defectSlice';
import type {Defect} from '@/store/defect/defectSlice';
import {useAppDispatch} from '@/shared/hooks/redux';
import {GetFindAddress} from '@/shared/api/requests/address';

export const DefectModule = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [coordinates, setCoordinates] = useState<any>(null);
  const [isCam, setIsCam] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [address, setAddress] = useState('');
  const {register, getValues} = useForm<Defect>({defaultValues: {defectView: ''}});
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
        <Typography variant='h2' align='left'>
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
        <Typography variant='h2'>Адрес</Typography>
        <Typography>{address.length ? address : 'Поиск адреса'}</Typography>
      </Box>
      <Box>
        <Typography variant='h2'>Выберите тип дефекта</Typography>
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
        <Typography variant='h2'>Введите вид дефекта</Typography>
        <FormControl sx={{m: 1, width: '100%'}}>
          <Select size='small' {...register('defectView')}>
            <MenuItem value={''}>Не выбрано</MenuItem>
            <MenuItem value={'10'}>Ten</MenuItem>
            <MenuItem value={'20'}>Twenty</MenuItem>
            <MenuItem value={'30'}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography variant='h2'>Введите площадь</Typography>
        <TextField {...register('square')} size='small' type='number' sx={{width: '20%', marginRight: '10px'}} />
        <Typography display={'inline'}>кв.м.</Typography>
      </Box>

      <Box>
        <Typography variant='h2'>Загрузите фотографии</Typography>
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
