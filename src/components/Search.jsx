import { Container, createTheme, TextField, Typography,ThemeProvider } from '@mui/material'
import React from 'react'

export default function Search() {
  const dark = createTheme({
    palette:{
      primary:{
        main:"#fff"
      }
    },
    type:"dark"
  })

  return (
    <ThemeProvider theme={dark}>
      <Container>
        <Typography variant="h4"  style={{width:"100%", }}>
          Crypto prices list by market cap
        </Typography>
        <TextField variant="outlined" style={{width:"100%",margin:"2rem 0",}} label="Search any crypto currency..."/>
      </Container>
    </ThemeProvider>
  )
}
