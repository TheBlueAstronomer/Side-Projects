import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Binary() {

    const [value, setValue] = React.useState('');
    const [text, setText] = React.useState('');


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
                            Binary
                        </Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Typography color="text.secondary" variant="body2" align='left' sx={{ my: 3 }}>
                    Enter the number in plain text and press convert
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
                            defaultValue="Enter decimal numbers here"
                            value={value}
                            onChange={handleValueChange}
                        />
                    </Grid>

                    <Grid item xs align='left'>
                        <Box sx={{ mt: 3, ml: 1, mb: 1 }} align='left'>
                            <Button variant="contained" onClick={() => encryptText()}>Convert</Button>
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
                            defaultValue="Converted number"
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

        // Go through each character
        for (var i = 0; i < value.length; i++) {
            // Get the character we'll be appending
            var c = value[i];
            output += dec2bin(c) + ' '
        }
        setText(output)

    }

    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
      }

      function copyTextToClipboard(text) {
    
        navigator.clipboard.writeText(text).then(function() {
          console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
        });
      }
}
