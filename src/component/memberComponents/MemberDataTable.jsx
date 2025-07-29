import React, { useState } from 'react'
import { Table, ScrollArea, Box } from '@mantine/core'
import { Pagination } from '@mantine/core';
import people from '../../data/people';

const MemberDataTable = () => {
    const [activePage, setPage] = useState(1) // activePage state for pagination
    const recordsPerPage = 10
    const lastIndex = activePage * recordsPerPage // last index = 1 * 10 = 10
    const firstIndex = lastIndex - recordsPerPage // first index = 10 - 10 = 0

    const records = people.slice(firstIndex, lastIndex)
    const rows = records.map(person => {
        return (
            <tr key={person?.id}>
                <td>{person?.id}</td>
                <td className='flex items-center gap-3'>
                    <img src={person?.image} className='w-10 h-10 rounded-full' alt="person" />
                    <a href="#" className='text-black font-semibold hover:underline'>{person?.name}</a>
                </td>
                <td>
                    {person?.email === null ? 'example@mail.com' : person?.email}
                </td>
                <td>
                    {person?.city === null ? 'middle of nowhere' : person?.city}
                </td>
                <td>
                    {person?.creditcard === null ? '1228-1221-0009-4120' : person?.creditcard}
                </td>
                <td>
                    {"2Tt94120"}
                </td>
                <td>
                    {person?.timestamp.slice(0, 10)}
                </td>
                <td>
                    <button className="px-3 py-1 bg-green-500 hover:bg-green-800 hover:text-white rounded">Active</button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <div className=" mx-auto mt-3">
                <ScrollArea h={700} type="scroll" scrollbarSize={4} >
                    <Box w={1207}>
                        <Table striped highlightOnHover withBorder horizontalSpacing="sm" verticalSpacing="sm" fontSize="sm">
                            <thead className='bg-slate-400 '>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Account No.</th>
                                    <th>Wallet No.</th>
                                    <th>Registration Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </Table>
                    </Box>
                </ScrollArea>
                <div className="mt-2 mb-2">
                    <Pagination
                        value={activePage}
                        onChange={setPage}
                        total={10} />
                </div>
            </div>
        </div>
    )
}

export default MemberDataTable
