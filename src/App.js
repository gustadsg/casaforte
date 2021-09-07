import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./components/UI/variables";
import { GlobalStyle } from "./globalStyle";
import { Navbar, PageWrapper } from "./components";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <PageWrapper>
          <Routes />
        </PageWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
