import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function BookCipher() {

  const [value, setValue] = React.useState('');
  const [text, setText] = React.useState('');
  const [keyInput, setKeyInput] = React.useState('');


  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyInputChange = (event) => {
    console.log(keyInput);
    setKeyInput(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div" align='left'>
              Book Cipher
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Typography color="text.secondary" variant="body2" align='left' sx={{ my: 3 }}>
          Enter the text in plain text and then enter the key and press encrypt
        </Typography>
      </Box>

      <Box sx={{ m: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs align='left'>
            <TextField
              id="outlined-multiline-static"
              label="Input"
              multiline
              minRows={2}
              defaultValue="Enter Plain text here"
              value={value}
              onChange={handleValueChange}
            />
          </Grid>
          <Grid item xs align='left'>
          <TextField
              id="outlined-multiline-static"
              label="Key"
              multiline
              minRows={2}
              value={keyInput}
              onChange={(event)=>{setKeyInput(event.target.value)}}
            />
          </Grid>

          <Grid item xs align='left'>
            <Box sx={{ mt: 3, ml: 1, mb: 1 }} align='left'>
              <Button variant="contained" onClick={() => encryptText()}>Encrypt &gt;</Button>
            </Box>
          </Grid>

          <Grid item xs align='left'>
            <TextField
              id="outlined-read-only-input"
              label="Output"
              InputProps={{
                readOnly: true,
              }}
              multiline
              minRows={2}
              defaultValue="Encrypted text"
              value={text}
              onChange={handleTextChange}
            />
          </Grid>

          <Grid item xs align='left'>
            <Box sx={{ mt: 3, ml: 1, mb: 1 }} align='left'>
              <Button variant="contained" startIcon={<ContentCopyIcon />} onClick={() => copyTextToClipboard(text)}>Copy</Button>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Box>
  )

  function encryptText() {
    var output = ''
    setText(output)

    var j = 0;

    for (var i = 0; i < value.length; i++) {

      if (j >= keyInput.length)
      {
        j = 0;
      }
      // Get the character we'll be appending
      var c = value[i];
      console.log('the character is ' + c)

      // If it's not a letter...
      if (!c.match(/[a-z]/i)) {
        j = 1;
        output += c;
        continue;
      }
      // Get its code
      var code = value.charCodeAt(i);
      console.log('the character code is ' + code)
      var keyCode = keyInput.charCodeAt(j);
      console.log('the key position is ' + (keyCode - 97))

      c = String.fromCharCode(((code - 97 + (keyCode - 97)) % 26) + 97);
      console.log('the new character is ' + c)
      output += c;
      j++
    }
    setText(output)
  }

  function copyTextToClipboard(text) {
    
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
}
