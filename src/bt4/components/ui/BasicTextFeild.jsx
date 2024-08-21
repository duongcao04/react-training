import { Box, TextField } from '@mui/material';
import React from 'react';

function BasicTextFeild({
  label = '',
  name = '',
  placeholder = '',
  type = 'text',
  value,
  onChange,
  required = false,
  error,
  helperText
}) {
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { width: '380px' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        label={label}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required={required ?? null}
        error={error}
        helperText={helperText}
      />
    </Box>
  );
}

export default BasicTextFeild;
