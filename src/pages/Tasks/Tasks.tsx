import {TasksModule} from '@/modules/TasksModule';
import {Box} from '@mui/material';
import {styles} from './Tasks.styles';

export const Tasks = () => (
  <Box sx={styles.wrapper}>
    <TasksModule />
  </Box>
);
