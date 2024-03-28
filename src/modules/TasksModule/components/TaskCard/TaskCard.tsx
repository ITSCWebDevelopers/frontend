import {Box, Button, Typography} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useTaskCard} from './TaskCard.hooks';
import {styles} from './TaskCard.styles';
import {Map} from '@/components/Map';

export const TaskCard = ({address, coordinates, defectsCount, id, idApplication, roadName}: TaskModel) => {
  const {handleAddressClick, handleApplicationClick, isAddress} = useTaskCard(id);

  return (
    <Box sx={styles.card}>
      <Box sx={styles.main}>
        <Box>
          <Typography color='blue'>{roadName}</Typography>
          {defectsCount && <Typography>Количество дефектов: {defectsCount}</Typography>}
        </Box>
        <Box>
          <Typography>Статус</Typography>
          <Typography>{idApplication ? 'Повторный выезд' : 'Первый выезд'}</Typography>
        </Box>
      </Box>

      <Box sx={styles.panel}>
        <Button variant='contained' onClick={handleApplicationClick}>
          Отчёт
        </Button>
        <Button
          variant='outlined'
          onClick={handleAddressClick}
          endIcon={<ArrowDownwardIcon sx={{transform: isAddress ? '' : 'rotate(180deg)'}} />}
        >
          Адрес
        </Button>
      </Box>
      {isAddress && (
        <Box sx={styles.address}>
          <Typography>{`${address}, (${coordinates.lat}, ${coordinates.lng})`}</Typography>
          <Map center={coordinates} size={{width: '100%', height: '200px'}} zoom={5} />
        </Box>
      )}
    </Box>
  );
};
