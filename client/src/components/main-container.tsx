import React from 'react'
import { Flex } from '@chakra-ui/core'

const TasksContext = React.createContext([] as any[])

const MainContainer = () => {
  return (
    <Flex as="main" justifyContent="center" bg="gray.100" pt="1rem">
      <TasksContext.Provider value={[1, 2]}></TasksContext.Provider>
    </Flex>
  )
}

export default MainContainer
