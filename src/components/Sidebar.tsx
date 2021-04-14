import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react/'
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiGitMergeFill, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">GERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontSize="md">Dashboard</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontSize="md">Usuarios</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">AUTOMAÇÃO</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontSize="md">Formulários</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontSize="md">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>

    
  )
}
