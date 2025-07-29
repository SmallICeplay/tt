import React from 'react'
import { Input, Card, Text, PasswordInput } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

const SuspendMember = () => {
  return (
    <Card className='w-full mb-10 bg-slate-300 shadow transform duration-500 hover:-translate-y-2' shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="#">
        <Text className='ml-5 mt-2 text-xl font-semibold' >
          Suspend Member
        </Text>
        <Text className='ml-5 mt-1 text-sm' >
          Manage Your Member
        </Text>
      </Card.Section>

      <hr className='mt-3' />

      <div className="flex-wrap sm:flex gap-14 sm:gap-5">

        <div className='mt-7 w-72'>
          <label className=''>Member Name</label>
          <Input placeholder='Member Name' />
        </div>

        <div className='mt-7 w-72'>
          <label className=''>Member Email</label>
          <Input placeholder='Member Email' />
        </div>

        <div className="mt-7 w-72">
          <label className=''>Start Date of Suspend</label>
          <div className="bg-slate-50 px-3 py-2 rounded">
            <DateTimePicker
              dropdownType="modal"
              placeholder="Pick date and time"
              maw={400}
              mx="auto"
              variant=''
            />
          </div>
        </div>

        <div className="mt-7 w-72">
          <label className=''>End Date of Suspend</label>
          <div className="bg-slate-50 px-3 py-2 rounded">
            <DateTimePicker
              dropdownType="modal"
              placeholder="Pick date and time"
              maw={400}
              mx="auto"
              variant=''
            />
          </div>
        </div>

        <div className='mt-7 w-72'>
          <label className=''>Admin Email</label>
          <Input placeholder='Admin Email' />
        </div>

        <div className='mt-7 w-72'>
          <label className=''>Admin Password</label>
          <PasswordInput
            placeholder='Admin Password'
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

export default SuspendMember
