import {useEffect, useState} from 'react';
import {AxiosError} from 'axios';
import {getRepairs} from '@/shared/api';

export const useAssignmentModule = () => {
  const [assignments, setAssignments] = useState<RepairShortDto[]>([]);
  const [error, setError] = useState('');

  const getUserTasks = async () => {
    try {
      const res = await getRepairs();
      setAssignments(res.data);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(`Произошла ошибка, ${e.message}`);
      }
    }
  };

  useEffect(() => {
    getUserTasks();
  }, []);

  return {assignments, error};
};
