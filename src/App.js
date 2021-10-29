import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
