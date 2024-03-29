import {Box, Button, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {AssignmentList} from './components/AssignmentList/AssignmentList';
import {useAssignmentModule} from './AssignmentModule.hooks';
import {styles} from './AssignmentModule.styles';
import {ROUTES} from '@/shared/constants/routes';

export const AssignmentModule = () => {
  const {assignments, error} = useAssignmentModule();

  return (
    <Box sx={styles.wrapper}>
      <Button component={Link} to={ROUTES.CREATING_ASSIGNMENT} sx={styles.addButton} variant='contained'>
        Создать новое поручение
      </Button>
      {error ? (
        <Typography>{error}</Typography>
      ) : (
        <Box>
          <Typography sx={styles.title} variant='h2'>
            Отправленное
          </Typography>
          <AssignmentList assignments={assignments} />
        </Box>
      )}
    </Box>
  );
};
