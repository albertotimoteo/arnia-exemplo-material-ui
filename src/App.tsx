import { Button, CircularProgress, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { StyledButton } from "./styles"
import { useState } from "react"
import { theme } from "./assets/styles/theme"
import ComponentTeste from "./ComponentTeste"

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <>
        <Button onClick={() => setIsLoading(!isLoading)}>Teste</Button>
        <StyledButton disabled={isLoading}>
          {isLoading ? <CircularProgress /> : "Teste 2"}
        </StyledButton>
        <Typography variant="h1">Título</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          aliquid dolore sequi porro debitis enim natus dolores a nobis aut.
        </Typography>
        <ComponentTeste />
      </>
    </ThemeProvider>
  )
}

export default App
