import {Box, Button, Typography} from '@mui/material';
import {useTaskCard} from './TaskCard.hooks';

export const TaskCard = ({address, coordinates, defectsCount, id, idApplication, roadName}: TaskModel) => {
  const {handleAddressClick, handleApplicationClick, isAddress} = useTaskCard(id);

  return (
    <Box>
      <Box>
        <Box>
          <Typography>{roadName}</Typography>
          {defectsCount && <Typography>Количество дефектов: {defectsCount}</Typography>}
        </Box>
        <Box>
          <Typography>Статус</Typography>
          <Typography>{idApplication ? 'Повторный выезд' : 'Первый выезд'}</Typography>
        </Box>
      </Box>

      <Box>
        <Button variant='contained' onClick={handleApplicationClick}>
          Отчёт
        </Button>
        <Button variant='outlined' onClick={handleAddressClick}>
          Адрес
        </Button>
        {isAddress && <Typography>{`${address}, (${coordinates.lat}, ${coordinates.lng})`}</Typography>}
      </Box>
    </Box>
  );
};
