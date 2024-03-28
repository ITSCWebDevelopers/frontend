import {Box} from '@mui/material';
import {styles} from './Report.styles';
import {ReportModule} from '@/modules/ReportModule';

export const Report = () => (
  <Box sx={styles.wrapper}>
    <ReportModule />
  </Box>
);

/*


POST /check/new/
headers : {
  "Content-Type" : "application/json",
  "Authorization" : "Token " + token_from_login
}
body : JS





*/
