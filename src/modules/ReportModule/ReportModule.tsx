import {Box, Button, List, TextField, Typography} from '@mui/material';
import {styles} from './ReportModule.styles';
import {Defect} from './components/Defect';
export const ReportModule = () => {
  return (
    <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', gap: '10px'}}>
      <Box>
        <Typography variant={'h6'}>Наименование дороги или участка</Typography>
        <Typography sx={styles.borderedText}>М5 «Урал» Москва - Рязань - Пенза - Самара - Уфа - Челябинск</Typography>
      </Box>

      <Box>
        <Typography variant='h6'>Протяжённость</Typography>
        <Box sx={{display: 'flex', gap: '10px'}}>
          <TextField sx={{width: '10ch'}} size={'small'} type='number'>
            3
          </TextField>
          <Typography sx={{width: 'fit-content'}}>км</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant={'h6'}>Категория дороги</Typography>
        <Typography sx={styles.borderedText}>Поперечная трещина</Typography>
      </Box>
      <Box>
        <Typography variant={'h6'}>Тип покрытия</Typography>
        <Typography sx={styles.borderedText}>Грунтовое покрытие</Typography>
      </Box>
      <Box>
        <Typography>Список дефектов</Typography>
      </Box>
      <List sx={{width: '100%', bgcolor: 'background.paper'}}>
        <Defect />
        <Defect />
        <Defect />
        <Defect />
      </List>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button variant='outlined'>Добавить дефект</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginBlockStart: 'auto',
          marginBlockEnd: '20px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button variant='contained'>Отправить отчет</Button>
      </Box>
    </Box>
  );
};
