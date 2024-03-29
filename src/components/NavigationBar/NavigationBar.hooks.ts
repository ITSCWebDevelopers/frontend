import {useEffect, useState} from 'react';
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import {ROUTES} from '@/shared/constants/routes';

export const useNavigationBar = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isRoot, setIsRoot] = useState(false);
  const [name, setName] = useState('');

  const handleTabsChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (location.pathname === ROUTES.ROOT || location.pathname === ROUTES.ASSIGNMENT) setIsRoot(true);
    else setIsRoot(false);
  }, [location.pathname]);

  useEffect(() => {
    switch (location.pathname) {
      case '/report':
        setName(params.get('roadName') || 'Заявление');
        break;
      case '/defect':
        setName(params.get('defectName') || 'Дефект');
        break;
      case ROUTES.CREATING_ASSIGNMENT:
        setName('Создание поручения');
        break;
      default:
        setName('Назад');
    }
  }, [isRoot]);

  return {isRoot, name, handleTabsChange, path: location.pathname, handleBack};
};
