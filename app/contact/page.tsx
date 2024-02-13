'use client'; 

import { Button, Text, Callout, Flex, TextArea, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createMessageSchema } from '../validationSchemas';
import { z } from 'zod';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';
import SideBar from "../components/SideBar";

const styles =
  "fixed right-0 top-4 h-full flex flex-col pr-8 gap-10 justify-center";

type MessageForm = z.infer<typeof createMessageSchema>;

const ContactPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<MessageForm>({
    resolver: zodResolver(createMessageSchema)
  });
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post('/api/messages', data);
      router.push('/');          
    } catch (error) {
      setSubmitting(false);
      setError('An unexpected error occurred.')
    }
  })

  return (
    <div className='pt-4  bg-stone-800 mx-2 h-screen'>
      {error && <Callout.Root color='red'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form 
      className='pt-4 space-y-3' 
      onSubmit={onSubmit}>

    <Flex className='mx-auto w-1/2' gap='3'>
      <TextField.Input placeholder='First Name' {...register('first_name')} />
      <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
      <TextField.Input placeholder='Last Name' {...register('last_name')} />
      <ErrorMessage>{errors.last_name?.message}</ErrorMessage>
      <TextField.Input placeholder='Email' {...register('email')} />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
    </Flex>
    <TextArea style={{ width: '50%', marginRight: 'auto', marginLeft: 'auto' }} placeholder='Write me a message...' {...register('message')} />
    <ErrorMessage>{errors.message?.message}</ErrorMessage>
    <Button disabled={isSubmitting}>Send Message {isSubmitting && <Spinner />}</Button>

    </form>
    <SideBar styles={styles} />
    </div>
  )
}

export default ContactPage;