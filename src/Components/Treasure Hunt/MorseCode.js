import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function MorseCode() {

  const [value, setValue] = React.useState('');
  const [text, setText] = React.useState('');
  const [key, setKey] = React.useState('');
  const [flag, setFlag] = React.useState(false);


  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div" align='left'>
              Morse Code
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Typography color="text.secondary" variant="body2" align='left' sx={{ my: 3 }}>
          Enter the text in plain text and then press convert
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
            <Box sx={{ mt: 3, ml: 1, mb: 1 }} align='left'>
              <Button variant="contained" onClick={() => encryptText()}>Convert &gt;</Button>
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

    var alphabet = {
      'a': '.- ', 'b': '-... ', 'c': '-.-. ', 'd': '-.. ',
      'e': '. ', 'f': '..-. ', 'g': '--. ', 'h': '.... ',
      'i': '.. ', 'j': '.--- ', 'k': '-.- ', 'l': '.-.. ',
      'm': '-- ', 'n': '-. ', 'o': '--- ', 'p': '.--. ',
      'q': '--.- ', 'r': '.-. ', 's': '... ', 't': '- ',
      'u': '..- ', 'v': '...- ', 'w': '.-- ', 'x': '-..- ',
      'y': '-.-- ', 'z': '--.. ', ' ': ' / ',
      '1': '.---- ', '2': '..--- ', '3': '...-- ', '4': '....- ',
      '5': '..... ', '6': '-.... ', '7': '--... ', '8': '---.. ',
      '9': '----. ', '0': '----- '
    }

    for (var i = 0; i < value.length; i++) {
      output += alphabet[value.charAt(i).toLowerCase()];
    }
    setFlag(true)
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
