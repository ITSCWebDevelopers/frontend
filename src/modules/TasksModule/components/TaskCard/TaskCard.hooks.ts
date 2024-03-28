import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '@/shared/constants/routes';

export const useTaskCard = (id?: string, road_name?: string) => {
  const [isAddress, setIsAddress] = useState(false);
  const navigate = useNavigate();

  const handleAddressClick = () => {
    setIsAddress((prev) => !prev);
  };

  const handleApplicationClick = () => {
    navigate(ROUTES.REPORT(id, road_name));
  };

  return {isAddress, handleAddressClick, handleApplicationClick};
};
