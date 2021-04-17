import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box>
          <Text mr="4" textAlign="right">Elvis Amancio</Text>
          <Text color="gray.300" fontSize="small">
            elvis@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Elvis Amancio" src="https://github.com/elvisea.png" />
    </Flex>
  )
}
