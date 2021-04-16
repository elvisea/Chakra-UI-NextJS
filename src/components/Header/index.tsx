import React from 'react'
import { Flex, useBreakpointValue } from '@chakra-ui/react'
import Profile from './Profile'
import Notifications from './Notifications'
import SearchBox from './SearchBox'
import Logo from './Logo'

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      <Logo />
      
      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" marginLeft="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  )
}
