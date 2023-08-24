import React, { useState } from 'react'
import './Chat.css'
import { Input, IconButton, Badge, Container, Button } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import ChatMessage from './ChatMessage'


function Chat() {
    const [value, setValue] = useState('')
    const [chat, setChat] = useState([])

    const handleChange = (event) => setValue(event.target.value)
    const handleEnter = (event) => {
        

        if((event.key === "Enter" || event.target.id === 'enterButton') && value != '') {   
            setChat([...chat, value])
        }
        
    }
    
    return (
      <>
      <div className='chatContent'>
      <IconButton
        colorScheme='teal'
        size='lg'
        icon={<InfoIcon />}
      />
      
        <Container maxW='100%' maxH='300px' className='chatBox'>            
                {/* <ChatMessage  /> */}
            {chat.map(function(message, i){
                return <ChatMessage message={message} i={i} />
            })}
        </Container>
        
        <div className='inputContent'>
            <Input className='input' placeholder='Chat' onKeyDown={handleEnter} onChange={handleChange} />
            <Button id='enterButton' colorScheme='teal' onClick={handleEnter}>Enter</Button>
        </div>
        
      </div>
        
      </>
    )
}

export default Chat