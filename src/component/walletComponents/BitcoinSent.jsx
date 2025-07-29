import React, { useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form'

const BitcoinSent = () => {

    const form = useForm({
        initialValues: {
            address: '',
            usd: 1,
            btc: 0.000033,
        },
    })

    return (
        <div className='flex-col w-96 border shadow rounded bg-slate-500 pt-3 pb-3 pl-5 pr-5 transform duration-500 hover:-translate-y-2'>
            <div className='flex justify-between mb-3'>
                <div className="flex items-center gap-2">
                    <div className="bg-orange-500 p-1 rounded-full">
                        <BsArrowUpRight className='text-2xl' color='white' />
                    </div>
                    <span className='font-semibold text-2xl'>Send</span>
                </div>
            </div>

            <Box maw={300} mx="auto">
                <form onSubmit={form.onSubmit((values) => values.btc = values.usd * values.btc)}>
                    <TextInput
                        withAsterisk
                        label="Bitcoin Public Address"
                        placeholder="public address"
                        {...form.getInputProps('address')}
                    />

                    <div className="flex gap-3">
                        <TextInput
                            withAsterisk
                            label="USD"
                            placeholder="USD"
                            {...form.getInputProps('usd')}
                        />

                        <TextInput
                            label="BTC"
                            placeholder="BTC"
                            readOnly
                            {...form.getInputProps('btc')}
                        />
                    </div>
                   

                    <Group position="right" mt="md">
                        <Button type="submit" className='bg-blue-800'>Send</Button>
                    </Group>
                </form>
            </Box>
        </div>
    )
}

export default BitcoinSent
