import { Container, Flex, FlexProps } from '@chakra-ui/react'
import { Placeholder } from './placeholder'

export const Header = (props: FlexProps) => {
  return (
     <Flex     align="center"
     pos="relative"
     justify="center"
     boxsize="full"
     w="100%"
     bg="blackalpha.700"
     position="static" {...props}>
    <Placeholder minH="lg" bg="blue">
        Main
    </Placeholder>
    </Flex>
  )
}