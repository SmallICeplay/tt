import React from 'react'
import { Checkbox, Card, Text } from '@mantine/core';

const NotiComponent = () => {
    return (
        <Card className='w-full mb-10 bg-slate-300 shadow transform duration-500 hover:-translate-y-2' shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section component="a" href="#">
                <Text className='ml-5 mt-2 text-xl font-semibold' >
                    Notification Setting
                </Text>
                <Text className='ml-5 mt-1 text-sm' >
                    Manage the Notifications
                </Text>
            </Card.Section>

            <hr className='mt-3' />

            <div className="flex-wrap sm:flex gap-52">
                <div className='mt-7'>
                    <h1 className="font-semibold mb-3">Notification</h1>
                    <Checkbox className='mb-3' defaultChecked label='Email' />
                    <Checkbox className='mb-3' defaultChecked label='Push Notifications' />
                    <Checkbox className='mb-3' label='Text Messages' />
                    <Checkbox className='mb-3' label='Phone Calls' />
                </div>

                <div className='mt-7'>
                    <h1 className="font-semibold mb-3">Email</h1>
                    <Checkbox className='mb-3' label='NewsLetters' />
                    <Checkbox className='mb-3' label='Daily Prices Update' />
                    <Checkbox className='mb-3' label='Weekly Prices and Predictions' />
                    <Checkbox className='mb-3' label='Community Articles' />
                </div>
            </div>

            <div className="flex-wrap sm:flex mt-7">
                <button className='px-5 py-2 mr-5 sm:px-10 rounded bg-blue-800 text-white font-semibold hover:bg-blue-500 hover:text-black'>Save</button>
                <button className='px-5 py-2 sm:px-10 rounded bg-red-800 text-white font-semibold hover:bg-red-500 hover:text-black'>Cancel</button>
            </div>
        </Card>
    )
}

export default NotiComponent
