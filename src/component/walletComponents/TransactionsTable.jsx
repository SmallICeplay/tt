import { Table, ScrollArea, Box } from '@mantine/core'
import { Pagination } from '@mantine/core';
import transactions from '../../data/WalletTransactions';
import { useState } from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

const TransactionsTable = () => {

    // Format the price to USD using the locale, style, and currency.
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    // Format the price to MMK using the locale, style and currency
    let MMKyat = new Intl.NumberFormat('my-MM', {
        style: 'currency',
        currency: 'MMK',
    })

    const [activePage, setPage] = useState(1) // activePage state for pagination
    const recordsPerPage = 10
    const lastIndex = activePage * recordsPerPage // last index = 1 * 10 = 10
    const firstIndex = lastIndex - recordsPerPage // first index = 10 - 10 = 0

    const records = transactions.slice(firstIndex, lastIndex)
    const rows = records?.map(transaction => {
        return (
            <tr key={transaction?.id}>
                <td><span className="font-semibold">{transaction?.id}</span></td>
                <td className='flex items-center gap-3'>
                    <img src={transaction?.image} className='w-10 h-10 rounded-full' alt="accountImage" />
                    <a href="#" className='text-black font-semibold hover:underline'>{transaction?.accountName}</a>
                </td>

                <td><span className="font-semibold">{transaction?.date}</span> </td>
                <td><span className="font-semibold">{transaction?.time}</span></td>
                <td>
                    <span className="font-semibold">
                        {transaction?.type.includes("Sent") ? 
                            <div className="flex gap-2 items-center">
                                <div className="px-1 py-1 bg-red-500 text-white rounded-full">
                                    <BsArrowUp />
                                </div>
                                <span className="font-semibold">Sent</span>
                            </div> 
                            : 
                            <div className="flex gap-2 items-center">
                                <div className="px-1 py-1 bg-green-500 text-white rounded-full">
                                    <BsArrowDown />
                                </div>
                                <span className="font-semibold">Received</span>
                            </div> }
                    </span>
                </td>
                <td>
                    <span className="font-semibold hover:underline hover:cursor-pointer">
                        {transaction?.transactionId}
                    </span> 
                </td>
                <td>
                    <span className="font-semibold ml-2">
                        {USDollar.format(transaction?.amount)}
                    </span>
                </td>
                <td>
                    <span className="font-semibold ml-2">
                        {transaction?.btc} BTC
                    </span>
                </td>
                <td>
                    <span className="bg-green-500 px-2 py-1 rounded hover:cursor-pointer hover:bg-green-300">
                        {transaction?.status}
                    </span>
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
                            <thead className='bg-slate-400'>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Type</th>
                                    <th>Transaction ID</th>
                                    <th>Amount</th>
                                    <th>Bitcoin</th>
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
                        total={3} />
                </div>
            </div>
        </div>
    )
}

export default TransactionsTable
