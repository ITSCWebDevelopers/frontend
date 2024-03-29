import {getDefectInfo} from '@/shared/api/requests/checks/damage';
import {Box, Button, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

export const DefectInfoModule = () => {
  const [params] = useSearchParams();
  const [defectInfo, setDefectInfo] = useState<DefectInfoModel | null>(null);

  useEffect(() => {
    if (!params) return;
    console.log(params.get('reportId'));
    console.log(params.get('id'));
    const fetchInfo = async () => {
      const response = await getDefectInfo(params.get('reportId')!, params.get('id')!);
      console.log(response.data);
      setDefectInfo(response.data);
    };
    fetchInfo();
  }, [params]);

  if (!defectInfo) {
    return <></>;
  }

  return (
    <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', gap: '20px'}}>
      <Box>
        <Typography variant='h6'>Координаты</Typography>
        <Typography>
          {defectInfo.location.lat} - {defectInfo.location.lng}
        </Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Адрес</Typography>
        <Typography>{defectInfo.location.address}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Тип дефекта</Typography>
        <Typography>{defectInfo.category}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Вид дефекта</Typography>
        <Typography>{defectInfo.type}</Typography>
      </Box>
      {defectInfo.size && (
        <Box>
          <Typography variant='h6'>Площадь</Typography>
          <Typography>{defectInfo.size}</Typography>
        </Box>
      )}
      <Box>
        <Typography variant='h6'>Фотографии дефекта</Typography>
        {defectInfo.damaged_photos.map((d) => (
          <img
            style={{display: 'block', objectFit: 'fill', width: '90px', height: '90px', borderRadius: '15%'}}
            src={'https://itscweb.pythonanywhere.com' + d.image}
            key={d.image}
          />
        ))}
      </Box>

      <Box>
        <Typography variant='h6'>Подрядчик</Typography>
        <Typography>Не выбран</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Устранить до</Typography>
        <Typography>Не выбрано</Typography>
      </Box>
      <Box sx={{display: 'flex', marginBlockStart: 'auto', marginBlockEnd: '20px', justifyContent: 'space-evenly'}}>
        <Button variant='contained'>Исправлено</Button>
        <Button variant='contained'>Не исправлено</Button>
      </Box>
    </Box>
  );
};
