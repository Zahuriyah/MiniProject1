import { 
    Box, 
    Flex, 
    VStack, 
    Text,
    Image,
    GridItem,
    Button,
    ButtonGroup
} from '@chakra-ui/react';
import { BiBookmark, BiLike } from 'react-icons/bi';
import { MdReadMore } from 'react-icons/md';

const ItemList1 = ({ item }) => {
    return (
        <Box key={item.id}>
            <GridItem colSpan={1}>
                <Flex sx={{
                    border: '1px solid lightGrey',
                    borderRadius: '6px',
                    padding: '20px',
                    boxShadow: '1px 1px   grey',
                    minHeight: '200px',
                    maxHeight: '370px'
                }}>
                    <VStack sx={{
                        alignItems: 'left'
                    }}>
                        <Box>
                            <Image sx={{
                                height: '180px',
                                width: '250px',
                                marginBottom: '7px'
                            }}
                            objectFit="cover" 
                            src={item.images} />
                        </Box>

                        <Box sx={{
                            minHeight: '80px',
                            minWidth: '100%'
                        }}>
                            <Text sx={{
                            fontWeight: "Bold",
                            fontSize: "15px"
                            }}>
                                {item.desc}
                            </Text>
                        </Box>

                        <Box>
                            <ButtonGroup spacing='0'>
                                <Button variant='ghost' colorScheme='blue'>
                                    <BiLike fontSize={'20'} />  
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    <BiBookmark fontSize={'18'} />
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Read More <MdReadMore fontSize={'20'} />
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </VStack>
                </Flex>
            </GridItem>
        </Box>
    )
}

export default ItemList1;


