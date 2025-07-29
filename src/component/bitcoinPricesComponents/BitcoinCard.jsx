import React from 'react'
import bitcoin from '../../data/OnlyBitcoinPrice'
import { CiStar } from 'react-icons/ci'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { BiSolidUpArrow } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
import { CgFileDocument } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'

const BitcoinCard = () => {

    // Format the price to USD using the locale, style, and currency.
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    return (
        <div className='flex-col w-96 border shadow rounded bg-slate-500 pt-3 pb-3 pl-5 pr-5 transform duration-500 hover:-translate-y-2'>
            <div className='flex justify-between mb-3'>
                <div className="flex items-center gap-2">
                    <img src="https://s3.coinmarketcap.com/static-gravity/image/6fbea0356edd48a4a68a4b877195443c.png" width={35} alt="trending" />
                    <span className='font-semibold text-2xl hover:cursor-pointer'>Bitcoin</span>
                    <div className="ml-2">
                        <span className="font-semibold text-xs text-slate-950 px-1 bg-slate-100 rounded">BTC</span>
                    </div>
                </div>
                <a className='flex items-center gap-3' href="#">
                    <div className="bg-slate-100 px-2 py-1 rounded hover:bg-orange-400">
                        <CiStar className='text-lg hover:text-slate-100' />
                    </div>
                    <div className="bg-slate-100 px-2 py-1 rounded hover:bg-orange-400">
                        <AiOutlineShareAlt className='hover:text-slate-100' />
                    </div>

                </a>
            </div>

            <div className="flex-col justify-center items-center">
                {bitcoin.map((coin, index) => {
                    return (
                        <div className="" key={index}>
                            <div className="flex items-baseline gap-4 mt-4 mb-4">
                                <span className="ml-2 mr-5 font-semibold text-4xl">{USDollar.format(coin?.current_price)}</span>
                                <div className="flex items-center gap-2">
                                    <BiSolidUpArrow className='text-green-300 text-xl' />
                                    <span className="text-green-300 text-xl font-semibold">{`${coin.onehour}% (1d)`}</span>
                                </div>
                            </div>

                            <div className="flex items-baseline gap-3 ml-3 mb-4 mt-7">
                                <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded transform duration-500 hover:-translate-y-1">
                                    <BsGlobe />
                                    <a href="https://bitcoin.org/en/" className="font-semibold" target='_blank'>website</a>
                                </div>

                                <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded transform duration-500 hover:-translate-y-2">
                                    <CgFileDocument />
                                    <a href="https://bitcoin.org/bitcoin.pdf" className="font-semibold" target='_blank'>whitepaper</a>
                                </div>

                                <div className="flex items-center gap-2 bg-slate-100 px-2 py-1 rounded transform duration-500 hover:-translate-y-2">
                                    <BsGithub />
                                    <a href="https://github.com/bitcoin/bitcoin" className="font-semibold" target='_blank'>Github</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BitcoinCard
