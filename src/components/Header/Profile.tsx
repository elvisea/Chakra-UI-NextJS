import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import React from 'react'

interface ProfileProps {
  showProfileData: boolean
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Elvis Amancio</Text>
          <Text color="gray.300" fontSize="small">
            elvis@gmail.com
        </Text>
        </Box>
      )}

      <Avatar size="md" name="Elvis Amancio" src="https://github.com/elvisea.png" />
    </Flex>
  )
}
