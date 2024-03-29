import {Box, Divider} from '@mui/material';
import {AssignmentCard} from '../AssignmentCard/AssignmentCard';
import type {AssignmentListProps} from './AssignmentList.types';
import {styles} from './AssignmentList.style';

export const AssignmentList = ({assignments}: AssignmentListProps) => (
  <Box component='ul'>
    {assignments.map((assignment) => (
      <Box key={assignment.id} component='li'>
        <Divider />
        <Box sx={styles.item}>
          <AssignmentCard {...assignment} />
        </Box>
      </Box>
    ))}
  </Box>
);
