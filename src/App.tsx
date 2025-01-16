import { ThemeProvider } from '@mui/material';
import './App.css'
import { Theme } from './utils/theme';
import { Router } from './routes';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App;
