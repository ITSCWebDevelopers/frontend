import {Box} from '@mui/material';
import {styles} from './Tasks.styles';
import {TasksModule} from '@/modules/TasksModule';

export const Tasks = () => (
  <Box sx={styles.wrapper}>
    <TasksModule />
  </Box>
);
