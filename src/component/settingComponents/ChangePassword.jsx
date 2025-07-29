import React from 'react'
import { Input, Card, Text, PasswordInput } from '@mantine/core';

const ChangePassword = () => {
  return (
    <Card className='w-full mb-10 bg-slate-300 shadow transform duration-500 hover:-translate-y-2' shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="#">
        <Text className='ml-5 mt-2 text-xl font-semibold' >
          Change Password
        </Text>
        <Text className='ml-5 mt-1 text-sm' >
          Manage Your Password
        </Text>
      </Card.Section>

      <hr className='mt-3' />

      <div className="flex-wrap sm:flex gap-14 sm:gap-5">
        <div className='mt-7 w-72'>
          <label className=''>Email</label>
          <Input placeholder='Your Email' />
        </div>

        <div className='mt-7 w-72'>
          <label className=''>Old Password</label>
          <PasswordInput
            placeholder='Old Password'
          />
        </div>

        <div className="mt-7 w-72">
          <label className=''>New Password</label>
          <PasswordInput
            placeholder='New Password'
          />
        </div>

        <div className="mt-7 w-72">
          <label className=''>Confirm Password</label>
          <PasswordInput
            placeholder='Confirm Password'
          />
        </div>
      </div>

      <div className="flex-wrap sm:flex mt-7">
        <button className='px-5 py-2 mr-5 sm:px-10 rounded bg-blue-800 text-white font-semibold hover:bg-blue-500 hover:text-black'>Save</button>
        <button className='px-5 py-2 sm:px-10 rounded bg-red-800 text-white font-semibold hover:bg-red-500 hover:text-black'>Cancel</button>
      </div>
    </Card>
  )
}

export default ChangePassword
