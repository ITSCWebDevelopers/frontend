import {Box, Divider} from '@mui/material';
import {TaskCard} from '../TaskCard/TaskCard';
import type {TasksListProps} from './TasksList.types';
import {styles} from './TasksList.styles';

export const TasksList = ({tasks}: TasksListProps) => (
  <Box sx={styles.list} component='ul'>
    {tasks.map((task) => (
      <Box sx={styles.item} component='li' key={task.id}>
        <Divider />
        <TaskCard {...task} />
      </Box>
    ))}
  </Box>
);
