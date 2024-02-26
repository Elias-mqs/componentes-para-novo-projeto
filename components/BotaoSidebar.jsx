import styles from "../styles/BotaoSidebar.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function BotaoSidebar() {
    return (
        <div>
            <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='teal' variant='solid'>
                    Button
                </Button>
                <Button colorScheme='teal' variant='outline'>
                    Button
                </Button>
                <Button colorScheme='teal' variant='ghost'>
                    Button
                </Button>
                <Button colorScheme='teal' variant='link'>
                    Button
                </Button>
            </Stack>
        </div>
    )
}