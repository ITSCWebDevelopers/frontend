import {Box, IconButton, Tab, Tabs, Typography} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigationBar} from './NavigationBar.hooks';
import {styles} from './NavigationBar.styles';
import {ROUTES} from '@/shared/constants/routes';

export const NavigationBar = () => {
  const {isRoot, name, handleTabsChange, path, handleBack} = useNavigationBar();

  return (
    <Box sx={styles.navigation}>
      {isRoot ? (
        <Tabs sx={styles.tabs} variant='fullWidth' value={path} onChange={handleTabsChange}>
          <Tab label='Актуальные задачи' value={ROUTES.ROOT} />
          <Tab label='Поручения' value={ROUTES.ASSIGNMENT} />
        </Tabs>
      ) : (
        <Box sx={styles.path}>
          <IconButton sx={styles.icon} onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='h4'>{name}</Typography>
        </Box>
      )}
    </Box>
  );
};
