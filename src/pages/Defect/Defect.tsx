import {DefectModule} from '@/modules/DefectModule/DefectModule';
import {Box} from '@mui/material';
import {styles} from './Defect.styles';
export const Defect = () => {
  return (
    <Box sx={styles.wrapper}>
      <DefectModule />
    </Box>
  );
};
