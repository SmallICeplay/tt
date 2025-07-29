import React from 'react'
import { Card, Text, Radio, Group } from '@mantine/core';

const DashboardLanguage = () => {
    return (
        <Card className='w-full mb-10 bg-slate-300 shadow transform duration-500 hover:-translate-y-2' shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section component="a" href="#">
                <Text className='ml-5 mt-2 text-xl font-semibold' >
                    Language Setting
                </Text>
                <Text className='ml-5 mt-1 text-sm' >
                    Manage the Languages
                </Text>
            </Card.Section>

            <hr className='mt-3' />

            <div className="flex-wrap sm:flex gap-52">
                <div className='mt-5'>
                    <Radio.Group
                        name="selectLanguage"
                        label="Select Language"
                        withAsterisk
                    >
                        <Group mt="xs">
                            <Radio value="us" checked label="US-English" />
                            <Radio value="uk" label="UK-English" />
                            <Radio value="Spanish" label="Spanish" />
                            <Radio value="Chinese" label="Chinese" />
                        </Group>
                    </Radio.Group>
                </div>
            </div>

            <div className="flex-wrap sm:flex mt-7">
                <button className='px-5 py-2 mr-5 sm:px-10 rounded bg-blue-800 text-white font-semibold hover:bg-blue-500 hover:text-black'>Save</button>
                <button className='px-5 py-2 sm:px-10 rounded bg-red-800 text-white font-semibold hover:bg-red-500 hover:text-black'>Cancel</button>
            </div>
        </Card>
    )
}

export default DashboardLanguage
