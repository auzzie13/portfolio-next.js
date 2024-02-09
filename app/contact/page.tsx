'use client'; 

import { Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import React from 'react'

const ContactPage = () => {
  return (
    <div className='pt-4 text-red-800 bg-stone-800 mx-2 h-screen space-y-3'>

    <Flex className='mx-auto w-1/2' gap='3'>
      <TextField.Input placeholder='First Name' />
      <TextField.Input placeholder='Last Name' />
      <TextField.Input placeholder='Email' />
    </Flex>
    <TextArea style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }} placeholder='Write me a message...' />
    <Button>Send Message</Button>

    </div>
  )
}

export default ContactPage;