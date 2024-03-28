import {Box} from '@mui/material';
import {TaskCard} from '../TaskCard/TaskCard';
import type {TasksListProps} from './TasksList.types';

export const TasksList = ({tasks}: TasksListProps) => (
  <Box component='ul'>
    {tasks.map((task) => (
      <Box component='li' key={task.id}>
        <TaskCard {...task} />
      </Box>
    ))}
  </Box>
);
