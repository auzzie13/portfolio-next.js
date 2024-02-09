'use client'; 

import { Button, Text, Callout, Flex, TextArea, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createMessageSchema } from '../validationSchemas';
import { z } from 'zod';

type MessageForm = z.infer<typeof createMessageSchema>;

const ContactPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<MessageForm>({
    resolver: zodResolver(createMessageSchema)
  });
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
      {errors.first_name &&  <Text color="red" as='p'>{errors.first_name.message}</Text>}
      <TextField.Input placeholder='Last Name' {...register('last_name')} />
      {errors.last_name &&  <Text color="red" as='p'>{errors.last_name.message}</Text>}
      <TextField.Input placeholder='Email' {...register('email')} />
      {errors.email &&  <Text color='red' as='p'>{errors.email.message}</Text>}
    </Flex>
    <TextArea style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }} placeholder='Write me a message...' {...register('message')} />
    {errors.message &&  <Text color='red' as='p'>{errors.message.message}</Text>}
    <Button>Send Message</Button>

    </form>
    </div>
  )
}

export default ContactPage;