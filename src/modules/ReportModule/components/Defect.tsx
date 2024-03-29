import {Box, ListItem, ListItemText} from '@mui/material';
import {useNavigate} from 'react-router-dom';

type DefectProps = {
  type: 'loaded' | 'approved';
  id?: number;
  reportId?: number;
};

export const Defect = ({type, id, reportId}: DefectProps) => {
  const nav = useNavigate();
  const onGoDefectInfo = () => {
    if (type !== 'approved') return;
    nav(`/defectInfo?reportId=${reportId}&id=${id}`);
  };

  return (
    <ListItem>
      <Box sx={{display: 'flex', width: '100%', flexDirection: 'row'}} onClick={onGoDefectInfo}>
        <ListItemText>Дефект {id} </ListItemText>
        <ListItemText sx={{textAlign: 'end', color: 'green'}}>
          {type === 'loaded' ? 'Данные загружены' : 'Принято'}
        </ListItemText>
      </Box>
    </ListItem>
  );
};
