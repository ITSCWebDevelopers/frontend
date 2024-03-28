import {ReportModule} from '@/modules/ReportModule';
import {Box} from '@mui/material';
import {styles} from './Report.styles';

export const Report = () => {
  return (
    <Box sx={styles.wrapper}>
      <ReportModule />
    </Box>
  );
};
