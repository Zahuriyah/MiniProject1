import { 
    Box, 
    Grid,
    Text,
    border,
} from '@chakra-ui/react';

import ItemList1 from './ItemList1';
import jsonSection1 from '../../json/section1.json'

const GroupList1 = () => {
    const ArtikelList1 = jsonSection1.section1;
    return (
        <Box sx={{
            mt: "50px",
            mb: "50px",
            width: '100%',
            padding: '20px',
            height: '80vh',
            border: "3px solid orange"
        }}>

            <Box display="flex" justifyContent="center">
                <Text sx={{
                    fontSize: "20px",
                    pb: "10px",
                    fontWeight: "Bold",
                }}
                >ARTIKEL KESEHATAN ANABULS</Text>
            </Box>
            
            <Grid
                templateRows="repeat(5, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                height="200px"
            >
                { ArtikelList1.length > 0  ? 
                    ArtikelList1.map((item) => { 
                        return (
                        <ItemList1 item={item} />
                        )
                    })
                 : <></>
                }
            </Grid>
        </Box>
    )
}

export default GroupList1;