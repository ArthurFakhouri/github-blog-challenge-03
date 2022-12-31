import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GithubInfoContextProvider } from "./contexts/GithubInfoContext"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GithubInfoContextProvider>
          <Router />
        </GithubInfoContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
