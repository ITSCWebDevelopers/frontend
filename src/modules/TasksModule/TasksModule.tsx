import {Typography} from '@mui/material';
import {useTasksModule} from './TasksModule.hooks';
import {TasksList} from './components/TasksList/TasksList';

export const TasksModule = () => {
  const {error, tasks} = useTasksModule();

  if (error) return <Typography>{error}</Typography>;

  return <TasksList tasks={tasks} />;
};
