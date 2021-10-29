import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function FormFields() {

    const [value, setValue] = React.useState('');
    const [text, setText] = React.useState('');
    const [flag, setFlag] = React.useState(false);

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    return (
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          minRows={4}
          defaultValue="Enter Plain text here"
          value={value}
          onChange={handleChange}
        />

      <Button onClick = {()=>encryptText(value)}  variant="contained">Encrypt</Button>

      {flag && <Typography variant="h4" gutterBottom component="div">
        {text}
      </Typography>}
    </Box>
    )

    function encryptText() {
        setFlag(true)
        setText(value + "__abcd")
    }
}
