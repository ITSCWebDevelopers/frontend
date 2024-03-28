import {Box, Typography} from '@mui/material';
import {styles} from './Tasks.styles';
import {TasksModule} from '@/modules/TasksModule';

export const Tasks = () => (
  <Box sx={styles.wrapper}>
    <Typography variant='h3'>Задачи</Typography>
    <TasksModule />
  </Box>
);
