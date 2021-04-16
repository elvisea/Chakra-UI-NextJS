import { Icon, Link, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

export default function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontSize="md">{children}</Text>
    </Link>
  )
}
