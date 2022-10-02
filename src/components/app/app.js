import { ThemeProvider } from 'styled-components';
import { globalTheme } from 'utils/global-theme';
import Table from '../table/table';
import * as S from './app-style'

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <S.GlobalStyle />
      <S.AppContainer>
        <Table />
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
