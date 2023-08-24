import React from 'react'
import './ChatMessage.css'
import { Badge } from '@chakra-ui/react'


function ChatMessage({message, i}) {

  
    if (i % 2 == 0) {
        return (
            <Badge className='leftMessage' colorScheme='purple'>{message}</Badge>
        )
    }
    if (i % 2 == 1) {
        return (
            <Badge className='rightMessage' colorScheme='teal'>{message}</Badge>
    
        )
    }
    
}

export default ChatMessage