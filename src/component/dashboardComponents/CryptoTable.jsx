import React, { useState } from 'react'
import { Table, ScrollArea, Box } from '@mantine/core'
import { useGetCoinsMarketQuery } from '../../redux/api/cryptoApi'
import { Pagination } from '@mantine/core';
import coinMarkets from '../../data/CoinMarkets'

const CryptoTable = () => {
    //const { data } = useGetCoinsMarketQuery()
    //console.log(data)

    const [activePage, setPage] = useState(1) // activePage state for pagination
    const recordsPerPage = 10
    const lastIndex = activePage * recordsPerPage // last index = 1 * 10 = 10
    const firstIndex = lastIndex - recordsPerPage // first index = 10 - 10 = 0

    const records = coinMarkets.slice(firstIndex, lastIndex)
    const rows = records.map(coin => {
        return (
            <tr key={coin.id}>
                <td>{coin.market_cap_rank}</td>
                <td className='flex gap-3'>
                    <img src={coin.image} width={25} alt="coin" />
                    <a href="#" className='text-black font-semibold hover:underline'>{coin.name}</a>
                </td>

                <td><span className="font-semibold">$</span> {coin.current_price}</td>
                <td><span className="font-semibold">$</span> {coin.market_cap}</td>
                <td><span className="font-semibold">$</span> {coin.total_volume}</td>
                <td>
                    {coin.circulating_supply}
                    <span className="font-semibold ml-2">
                        {coin.symbol.toUpperCase()}
                    </span>
                </td>
                <td>
                    {coin.max_supply}
                    <span className="font-semibold ml-2">
                        {coin.max_supply === null ? '' : coin.symbol.toUpperCase()}
                    </span>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <div className=" mx-auto mt-7">
                <ScrollArea h={550} type="scroll" scrollbarSize={4} >
                    <Box w={1220}>
                        <Table striped highlightOnHover withBorder horizontalSpacing="sm" verticalSpacing="sm" fontSize="sm">
                            <thead className='bg-slate-400'>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Market Capital</th>
                                    <th>Volume(24h)</th>
                                    <th>Circulating Supply</th>
                                    <th>Total Supply</th>
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

export default CryptoTable


