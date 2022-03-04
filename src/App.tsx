import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from './config/reset';
import { theme } from './config/theme';
import Router from './router/router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Open Run</title>
        </Helmet>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
