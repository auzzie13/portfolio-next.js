import React from 'react'

const ContactPage = () => {
  return (
    <div className='text-red-800 bg-stone-800 mx-2 h-screen'>
    <form className='flex flex-col w-4/5 m-auto pt-16'>
      <div className='mx-auto'>
      <label>First Name</label>
      <input className='bg-gray-200/60 rounded mx-2' type="text" name="first-name" />
      <label>Last Name</label>
      <input className='bg-gray-200/60 rounded mx-2' type="text" name="last-name" />
      </div>
      <label>E-mail</label>
      <input className='bg-gray-200/60 rounded' type="email" name="email" />
      <label>Message</label>
      <textarea className='bg-gray-200/60 rounded' name='message' />
    </form>
    </div>
  )
}

export default ContactPage;