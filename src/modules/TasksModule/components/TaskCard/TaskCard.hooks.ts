import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '@/shared/constants/routes';

export const useTaskCard = (id?: string) => {
  const [isAddress, setIsAddress] = useState(false);
  const navigate = useNavigate();

  const handleAddressClick = () => {
    setIsAddress((prev) => !prev);
  };

  const handleApplicationClick = () => {
    navigate(ROUTES.REPORT(id));
  };

  return {isAddress, handleAddressClick, handleApplicationClick};
};
