import {getReport} from '@/shared/api/requests/reports';
import {useAppSelector} from '@/shared/hooks/redux';
import {Box, Button, List, TextField, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {Defect} from './components/Defect';
export const ReportModule = () => {
  const defects = useAppSelector((state) => state.defect);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [reportData, setReportData] = useState<ReportModel | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await getReport(params.get('reportId'));
        console.log(response);
        setReportData(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    if (params.get('reportId') !== 'null') {
      fetchReport();
    }
  }, [params.get('reportId')]);

  const onCreateReport = () => {
    console.log('Создал отчет');
    console.log(defects);
    window.location.href = '/';
  };

  return (
    <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', gap: '10px'}}>
      <Box>
        <Typography variant='body1'>Протяжённость</Typography>
        <Box sx={{display: 'flex', gap: '10px'}}>
          <TextField
            sx={{width: '10ch'}}
            size={'small'}
            type='number'
            disabled={!!reportData}
            value={reportData?.road_length}
          />
          <Typography sx={{width: 'fit-content'}}>км</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant='body1'>Категория дороги</Typography>
        <TextField size='small' sx={{width: '100%'}} disabled={!!reportData} value={reportData?.road_type}></TextField>
      </Box>
      <Box>
        <Typography variant='body1'>Тип покрытия</Typography>
        <TextField
          size='small'
          sx={{width: '100%'}}
          disabled={!!reportData}
          value={reportData?.road_coating}
        ></TextField>
      </Box>
      <Box>
        <Typography variant='body1'>Список дефектов</Typography>
      </Box>
      <List sx={{width: '100%'}}>
        {!!reportData?.damages &&
          reportData?.damages.map((damage) => (
            <Defect id={damage.id} reportId={reportData.id} type='approved' key={damage.id} />
          ))}
        {!!defects.length && defects.map((_, index) => <Defect type='loaded' key={index} />)}
      </List>
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
        <Button disabled={!!reportData} variant='contained' onClick={onCreateReport}>
          {reportData ? 'Отчет отправлен' : 'Отправить отчет'}
        </Button>
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
