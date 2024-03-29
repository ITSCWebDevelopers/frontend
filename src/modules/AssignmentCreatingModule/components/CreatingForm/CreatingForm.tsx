import {Autocomplete, Box, Button, IconButton, TextField, Typography} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import {useCreatingForm} from './CreatingForm.hooks';
import {styles} from './CreatingForm.styles';

export const CreatingForm = () => {
  const {
    applications,
    damages,
    errors,
    register,
    handleGetApplications,
    handleGetDamages,
    handleChangeApplication,
    handleChangeDamage,
    isApplicationChosen,
    isDamageChosen,
    contractors,
    isContractorChosen,
    handleGetContractors,
    getContractor,
    handleChangeContractor,
    handleToggleListening,
    listening,
    onSubmit,
  } = useCreatingForm();

  return (
    <Box sx={styles.form} component='form' onSubmit={onSubmit}>
      <Autocomplete
        disablePortal
        id='application'
        options={applications}
        onChange={(_, value) => handleChangeApplication(value!.id)}
        onInputChange={(_, value) => handleGetApplications(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            error={!!errors.application}
            helperText={errors.application?.message}
            label='Выберите дорогу или участок'
          />
        )}
      />

      {isApplicationChosen && (
        <Autocomplete
          disablePortal
          id='damage'
          options={damages}
          onChange={(_, value) => handleChangeDamage(value!.id)}
          onInputChange={(_, value) => handleGetDamages(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!errors.damage}
              helperText={errors.damage?.message}
              label='Выберите дефект'
            />
          )}
        />
      )}

      {isDamageChosen && (
        <Autocomplete
          disablePortal
          id='contractor'
          options={contractors}
          onChange={(_, value) => handleChangeContractor(value!.id)}
          onInputChange={(_, value) => handleGetContractors(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!errors.contractor}
              helperText={errors.contractor?.message}
              label='Подрядчик'
            />
          )}
        />
      )}

      {isContractorChosen && (
        <>
          <Box component='label' sx={styles.labelBox}>
            <Typography>Email подрядчика</Typography>
            <Typography>{getContractor()?.email}</Typography>
          </Box>

          <Box component='label' sx={styles.labelBox} htmlFor='date'>
            <Typography>Устранить до</Typography>
            <TextField
              id='date'
              error={!!errors.date}
              helperText={errors.date?.message}
              inputProps={{...register('date')}}
              type='date'
            />
          </Box>
          <Box component='label' sx={styles.labelBox} htmlFor='description'>
            <Typography>Текст поручения</Typography>
            <Box sx={styles.description}>
              <TextField
                helperText={errors.description?.message}
                error={!!errors.description}
                fullWidth
                id='description'
                multiline
                inputProps={{...register('description')}}
              />
              <IconButton onClick={handleToggleListening}>
                <MicIcon sx={{color: listening ? 'blue' : 'unset'}} />
              </IconButton>
            </Box>
          </Box>
        </>
      )}
      <Button size='large' variant='contained' type='submit'>
        Отправить
      </Button>
    </Box>
  );
};
