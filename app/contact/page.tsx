'use client'; 

import { Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import React from 'react'
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

  return (
    <form 
      className='pt-4 text-red-800 bg-stone-800 mx-2 h-screen space-y-3' 
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/messages', data);
        router.push('/');
      })}>

    <Flex className='mx-auto w-1/2' gap='3'>
      <TextField.Input placeholder='First Name' {...register('first_name')} />
      <TextField.Input placeholder='Last Name' {...register('last_name')} />
      <TextField.Input placeholder='Email' {...register('email')} />
    </Flex>
    <TextArea style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }} placeholder='Write me a message...' {...register('message')} />
    <Button>Send Message</Button>

    </form>
  )
}

export default ContactPage;