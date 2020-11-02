import React from 'react'
import Brand from './brand'
import { Stack } from '@chakra-ui/core'

const Header = () => {
  return (
    <Stack as="header" align="center" bg="white" p="0.7rem">
      <Brand />
    </Stack>
  )
}

export default Header
