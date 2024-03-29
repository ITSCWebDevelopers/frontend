import {useEffect, useState} from 'react';
import {Box, Button, List, TextField, Typography} from '@mui/material';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {Defect} from './components/Defect';
import {useAppSelector} from '@/shared/hooks/redux';
import {getReports} from '@/shared/api/requests/reports';
export const ReportModule = () => {
  const defects = useAppSelector((state) => state.defect);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [reportData, setReportData] = useState<any>(null);

  useEffect(() => {
    const fetchReport = async () => {
      const response = await getReports();
      console.log(response.data);
      setReportData(response.data);
    };

    if (params.get('reportId') !== 'undefined') {
      fetchReport();
    }
  }, [params.get('reportId')]);

  return (
    <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', gap: '10px'}}>
      <Box>
        <Typography variant='body1'>Протяжённость</Typography>
        <Box sx={{display: 'flex', gap: '10px'}}>
          <TextField sx={{width: '10ch'}} size={'small'} type='number'>
            3
          </TextField>
          <Typography sx={{width: 'fit-content'}}>км</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant='body1'>Категория дороги</Typography>
        <TextField size='small' sx={{width: '100%'}}></TextField>
      </Box>
      <Box>
        <Typography variant='body1'>Тип покрытия</Typography>
        <TextField size='small' sx={{width: '100%'}}></TextField>
      </Box>
      <Box>
        <Typography variant='body1'>Список дефектов</Typography>
      </Box>
      <List sx={{width: '100%'}}>{!!defects.length && defects.map((_, index) => <Defect key={index} />)}</List>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={() => navigate(`/defect?roadName=${params.get('roadName')}`)} variant='outlined'>
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
