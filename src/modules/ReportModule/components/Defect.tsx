import {Box, ListItem, ListItemText} from '@mui/material';

export const Defect = () => {
  return (
    <ListItem>
      <Box sx={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        <ListItemText>Дефект {'\u003E'} </ListItemText>
        <ListItemText sx={{textAlign: 'end', color: 'red'}}>Данные не загружены</ListItemText>
      </Box>
    </ListItem>
  );
};