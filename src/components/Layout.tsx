import { ReactNode } from "react";
import {Flex, Alert, AlertIcon} from '@chakra-ui/react';


type Props = {
    children?: ReactNode;
}


export default function Layout({children}: Props){
    return (
        <>      
        {!window.hasOwnProperty("ethereum") ? <Alert status="error"><AlertIcon /> You need to install metamask in order to use this app!</Alert> : null}  
        <Flex flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        bg="gray.800">
            {children}
        </Flex>
        </>
    )
}