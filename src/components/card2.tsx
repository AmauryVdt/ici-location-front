'use client'
import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

export const Card2 = () => {
  return (
    <Center >
      <Box p='3' maxW="320px">
        <LinkBox as='article'>
          <LinkOverlay href='/propertie/1' />
          <Image borderRadius="md" alt='' src="https://bit.ly/2k1H1t6" />
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="pink">Plus</Badge>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="pink.800"
            >
              Verified &bull; Cape Town
            </Text>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            Modern, Chic Penthouse with Mountain, City & Sea Views
          </Text>
          <Text mt={2}>$119/night</Text>
          <Flex mt={2} align="center">
            <Box as={MdStar} color="orange.400" />
            <Text ml={1} fontSize="sm">
              <b>4.84</b> (190)
            </Text>
          </Flex>
        </LinkBox>
      </Box>
    </Center>
  );
}