import {Autocomplete, Box, TextField} from '@mui/material';
import {useCreatingForm} from './CreatingForm.hooks';

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
    isAddressChosen,
  } = useCreatingForm();

  return (
    <Box component='form'>
      <Autocomplete
        disablePortal
        id='application'
        options={applications}
        onChange={(_, value) => handleChangeApplication(value!.id)}
        onInputChange={handleGetApplications}
        sx={{width: 300}}
        renderInput={(params) => <TextField {...params} label='Заявка' />}
      />

      {isAddressChosen && (
        <Autocomplete
          disablePortal
          id='damage'
          options={damages}
          onChange={(_, value) => handleChangeDamage(value!.id)}
          onInputChange={handleGetDamages}
          sx={{width: 300}}
          renderInput={(params) => <TextField {...params} label='Дефект' />}
        />
      )}
    </Box>
  );
};
