import { GlobalStyle } from '@styles/global';
import { defaultTheme } from '@styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { RouteConfig } from '@routes/config';
import { DefaultLayout } from './layout';
import { Header } from '@components/Header';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <DefaultLayout>
          <RouteConfig />
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
