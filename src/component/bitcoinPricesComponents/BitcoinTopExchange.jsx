import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { FaCoins } from 'react-icons/fa'
import { MdOutlineVerified } from 'react-icons/md'
import exchanges from '../../data/TopBitcoinExchanges'

const BitcoinTopExchange = () => {
    return (
        <div className='flex-col border shadow rounded bg-slate-500 pt-3 pb-3 pl-6 pr-6 transform duration-500 hover:-translate-y-2'>
            <div className='flex justify-between mb-3'>
                <div className="flex items-center gap-2">
                    <FaCoins className='text-2xl ' color='#faf202' />
                    <span className='font-semibold text-xl'>Top Bitcoin Exchanges</span>
                </div>
                <a className='flex items-center' href="#">
                    <span className="font-semibold ">More</span>
                    <BiChevronRight className='' />
                </a>
            </div>

            <div className="flex-col justify-center items-center">
                {exchanges?.map(exchange => {
                    return (
                        <div className="flex mt-4 mb-4" key={exchange?.market_cap_rank}>
                            <div className="flex items-center w-64">
                                <img className='rounded-full mr-3 hover:cursor-pointer' width={20} src={exchange?.image} alt="trendingIcon" />
                                <span className="font-semibold hover:cursor-pointer hover:text-green-50">{exchange?.name}</span>
                                <MdOutlineVerified className='ml-1 mr-1 text-green-300 hover:cursor-pointer' />
                                <span className="text-xs font-semibold hover:cursor-pointer">{exchange?.symbol}</span>
                            </div>
                            <div className="ml-5">
                                <button className="px-2 py-1 bg-slate-300 rounded hover:bg-orange-400 hover:text-white text-sm font-semibold">follow</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BitcoinTopExchange
