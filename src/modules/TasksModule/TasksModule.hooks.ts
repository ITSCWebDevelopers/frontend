import {useEffect, useState} from 'react';
import {AxiosError} from 'axios';
import {getTasks} from '@/shared/api';

export const useTasksModule = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [error, setError] = useState('');

  const getUserTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(`Произошла ошибка, ${e.message}`);
      }
    }
  };

  useEffect(() => {
    getUserTasks();
  }, []);

  return {tasks, error};
};
