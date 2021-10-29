import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CesarCipher() {

  const [value, setValue] = React.useState('');
  const [text, setText] = React.useState('');
  const [flag, setFlag] = React.useState(false);


  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div" align='left'>
              Cesar Cipher
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Typography color="text.secondary" variant="body2" align='left' sx={{ my: 3 }}>
          Enter the text in plain text and press encrypt
        </Typography>
      </Box>

      <Box sx={{ m: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs align='left'>
            <TextField
              id="outlined-multiline-static"
              label="Input"
              multiline
              minRows={4}
              defaultValue="Enter Plain text here"
              value={value}
              onChange={handleValueChange}
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
              minRows={4}
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
    setFlag(true)

    var output = ''
    setText(output)

    var j = 1;
    // Go through each character
    for (var i = 0; i < value.length; i++) {
      // Get the character we'll be appending
      var c = value[i];

      // If it's not a letter...
      if (!c.match(/[a-z]/i)) {
        j = 1;
        output += c;
        continue;
      }
      // Get its code
      var code = value.charCodeAt(i);

      if ((j % 2) == 1) {

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          for (var k = 0; k < j; k++) {
            code += 1;
            if (code > 90) {
              code = 65;
            }
          }
        }

        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          for (var k = 0; k < j; k++) {
            code += 1;
            if (code > 122) {
              code = 97;
            }
          }
        }

      } else {
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          for (var k = 0; k < j; k++) {
            code -= 1;
            if (code < 65) {
              code = 90;
            }
          }
        }

        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          for (var k = 0; k < j; k++) {
            code -= 1;
            if (code < 97) {
              code = 122;
            }
          }
        }
      }
      c = String.fromCharCode(code)
      output += c
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
