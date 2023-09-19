import { useTheme } from "@mui/material/styles"

const ComponentTeste = () => {
  const theme = useTheme()

  return (
    <>
      <p>{theme.palette.primary.main}</p>
    </>
  )
}

export default ComponentTeste
