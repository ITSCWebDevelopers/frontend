import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Box, Button, Typography} from '@mui/material';
import {useTaskCard} from './TaskCard.hooks';
import {styles} from './TaskCard.styles';
import {Map} from '@/components/Map';

export const TaskCard = ({address, coordinates, defects_count, report_id, road_name}: TaskModel) => {
  const {handleAddressClick, handleApplicationClick, isAddress} = useTaskCard(report_id, road_name);

  return (
    <Box sx={styles.card}>
      <Box sx={styles.main}>
        <Box>
          <Typography fontWeight={700} color='primary.main'>
            {road_name}
          </Typography>
          {defects_count && <Typography color='primary.main'>Количество дефектов: {defects_count}</Typography>}
        </Box>
        <Box>
          <Typography fontWeight={700} color='primary.main'>
            Статус
          </Typography>
          <Typography color='success.main'>{report_id ? 'Повторный выезд' : 'Первый выезд'}</Typography>
        </Box>
      </Box>

      <Box sx={styles.panel}>
        <Button variant='contained' onClick={handleApplicationClick}>
          Отчёт
        </Button>
        <Button
          variant='outlined'
          onClick={handleAddressClick}
          endIcon={<ArrowDownwardIcon sx={{transform: isAddress ? 'rotate(180deg)' : ''}} />}
        >
          Адрес
        </Button>
      </Box>
      {isAddress && (
        <Box sx={styles.address}>
          <Typography>{`${address}, (${coordinates.lat}, ${coordinates.lng})`}</Typography>
          <Map center={coordinates} size={{width: '100%', height: '200px'}} zoom={10} />
        </Box>
      )}
    </Box>
  );
};
