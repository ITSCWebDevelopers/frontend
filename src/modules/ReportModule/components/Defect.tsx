import {Box, ListItem, ListItemText} from '@mui/material';

type DefectProps = {
  type: 'loaded' | 'approved';
};

export const Defect = ({type}: DefectProps) => {
  return (
    <ListItem>
      <Box sx={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        <ListItemText>Дефект {'\u003E'} </ListItemText>
        <ListItemText sx={{textAlign: 'end', color: 'green'}}>
          {type === 'loaded' ? 'Данные загружены' : 'Принято'}
        </ListItemText>
      </Box>
    </ListItem>
  );
};
