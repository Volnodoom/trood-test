import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from 'utils/const';
import { globalTheme } from 'utils/global-theme';
import Table from '../table/table';
import * as S from './app-style'

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <S.GlobalStyle />
      <Routes>
        <Route path={AppRoutes.Main} element={<S.AppContainer><Table /></S.AppContainer>} />
        <Route path={AppRoutes.Project()} element={<S.AppContainer><p>empty page</p></S.AppContainer>} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
