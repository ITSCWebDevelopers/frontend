import {Box, Button, Typography} from '@mui/material';

const defectInfo = {
  date: '29.03.2024',
  coords: {
    latitude: 52.1232,
    longtitude: 45.1202,
  },
  address:
    'Вожовский переулок, Кромы, Стрелецкое сельское поселение, Кромской район, Орловская область, Центральный федеральный округ, 303210, Россия',
  defectCategory: 'Дефекты/барьеры',
  defectType: 'Поперечная трещина',
  square: 32,
  photos: ['/', '/'],
};

export const DefectInfoModule = () => {
  return (
    <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', gap: '20px'}}>
      <Box>
        <Typography variant='h6'>Дата фиксирования дефекта</Typography>
        <Typography>{defectInfo.date}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Координаты</Typography>
        <Typography>
          {defectInfo.coords.latitude}-{defectInfo.coords.longtitude}
        </Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Адрес</Typography>
        <Typography>{defectInfo.address}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Тип дефекта</Typography>
        <Typography>{defectInfo.defectCategory}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Вид дефекта</Typography>
        <Typography>{defectInfo.defectType}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Объём</Typography>
        <Typography>{defectInfo.square} кв.м.</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Фотографии дефекта</Typography>
        {defectInfo.photos.map((p) => (
          <img width={'80px'} height={'80px'} style={{borderRadius: '20%', marginRight: '10px'}} src={p} />
        ))}
      </Box>
      <Box>
        <Typography variant='h6'>Подрядчик</Typography>
        <Typography>ООО «СПЕЦТРАНС»</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>Устранить до</Typography>
        <Typography>17.09.2024</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Button variant='contained'>Исправлено</Button>
        <Button variant='contained'>Не исправлено</Button>
      </Box>
    </Box>
  );
};
