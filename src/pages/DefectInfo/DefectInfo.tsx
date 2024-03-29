import {DefectInfoModule} from '@/modules/DefectInfoModule/DefectInfoModule';
import {Box} from '@mui/material';
import {styles} from './DefectInfo.styles';
export const DefectInfo = () => {
  return (
    <Box sx={styles.wrapper}>
      <DefectInfoModule />
    </Box>
  );
};
