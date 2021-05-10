import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./components/UI/variables";
import { GlobalStyle } from "./globalStyle";
import { PageWrapper } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageWrapper>
        <Routes />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
