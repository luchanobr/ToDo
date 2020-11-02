import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './theme'
import Header from './components/header'
import MainContainer from './components/main-container'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
      <MainContainer />
    </ThemeProvider>
  )
}

export default App
