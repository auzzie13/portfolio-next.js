'use client'; 

import { Button, Callout, Flex, TextArea, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

interface MessageForm {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const router = useRouter();
  const {register, handleSubmit} = useForm<MessageForm>();
  const [error, setError] = useState('');

  return (
    <div className='pt-4  bg-stone-800 mx-2 h-screen'>
      {error && <Callout.Root color='red'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form 
      className='pt-4 space-y-3' 
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/messages', data);
          router.push('/');          
        } catch (error) {
          setError('An unexpected error occurred.')
        }
      })}>

    <Flex className='mx-auto w-1/2' gap='3'>
      <TextField.Input placeholder='First Name' {...register('first_name')} />
      <TextField.Input placeholder='Last Name' {...register('last_name')} />
      <TextField.Input placeholder='Email' {...register('email')} />
    </Flex>
    <TextArea style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }} placeholder='Write me a message...' {...register('message')} />
    <Button>Send Message</Button>

    </form>
    </div>
  )
}

export default ContactPage;