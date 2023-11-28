import { Box, Button, Flex, Text, Divider, IconButton } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const SearchBar = () => {
    return (
        <Flex bg="white" h="40px" align="center" ring-1  borderRadius="full" boxShadow="0 0 0 1px rgba(0, 0, 0, 0.1)" overflow="hidden">
            <Box textAlign="center" p={4}>
                <Text>N'importe où</Text>
            </Box>

            <Divider h="30px" color='lightgray' orientation="vertical" />

            <Box textAlign="center" p={4}>
                <Text>Le type</Text>
            </Box>

            <Divider h="30px" color='lightgray' orientation="vertical" />

            <Box textAlign="center" p={4}>
                <Text>Quel budget</Text>
            </Box>

            <IconButton
                aria-label='Search'
                icon={<Search2Icon />}
                isRound={true}
                size='md'
                colorScheme='black' />
        </Flex>
    );
};

export default SearchBar;