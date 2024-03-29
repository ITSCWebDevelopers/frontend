import {Box, Typography} from '@mui/material';
import {styles} from './Assignment.styles';

export const AssignmentCard = ({contractor_name, defect_type, road_name, deadline}: RepairShortDto) => (
  <Box sx={styles.card}>
    <Box sx={styles.description}>
      <Typography>{road_name}</Typography>
      <Typography>{defect_type}</Typography>
      <Typography>{contractor_name}</Typography>
    </Box>
    {deadline && (
      <Box sx={styles.deadline}>
        <Typography>Устранить до</Typography>
        <Typography>{deadline}</Typography>
      </Box>
    )}
  </Box>
);
