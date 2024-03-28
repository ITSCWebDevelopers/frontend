import {Box, Button, List, TextField, Typography} from '@mui/material';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {styles} from './ReportModule.styles';
import {Defect} from './components/Defect';
export const ReportModule = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  return (
    <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', gap: '10px'}}>
      <Box>
        <Typography variant={'h6'}>Наименование дороги или участка</Typography>
        <Typography variant='body1' sx={styles.borderedText}>
          {params.get('road')}
        </Typography>
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
        <TextField size='small' sx={{width: '100%'}}></TextField>
      </Box>
      <Box>
        <Typography variant={'h6'}>Тип покрытия</Typography>
        <TextField size='small' sx={{width: '100%'}}></TextField>
      </Box>
      <Box>
        <Typography variant='h6'>Список дефектов</Typography>
      </Box>
      <List sx={{width: '100%'}}>
        <Defect />
        <Defect />
        <Defect />
        <Defect />
      </List>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={() => navigate(`/defect/?road=${params.get('road')}`)} variant='outlined'>
          Добавить дефект
        </Button>
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

/**
 * 
 * 

{
  road : hakdh
  length : 8
  coating : ytasyu
  category : ydkjd
  defects : [
    {
      photo
      type
    },
    {
      photo
      type
    },
    {
      photo
      type
    }
  ]

}


 * 
 */
