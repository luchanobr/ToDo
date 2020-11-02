import React from 'react'
import { Link, Box } from '@chakra-ui/core'
import { RiCheckboxMultipleLine } from 'react-icons/ri'

const Brand = () => {
  return (
    <Link
      color="brand.400"
      textDecoration="none"
      p="0.3rem"
      _hover={{
        textDecoration: 'none',
      }}
      _focus={{
        textDecoration: 'none',
        border: ' 1.5px',
        borderColor: 'secondary.400',
        borderStyle: 'solid',
        borderRadius: 'md',
      }}
      href=""
      display="flex"
      alignItems="center"
      letterSpacing="2.5px"
      fontWeight="600"
      fontSize="18px"
    >
      <Box
        as={RiCheckboxMultipleLine}
        size="24px"
        color="brand.400"
        mr="4px"
      ></Box>{' '}
      ToDo
    </Link>
  )
}

export default Brand
