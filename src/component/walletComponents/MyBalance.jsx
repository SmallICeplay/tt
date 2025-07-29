import React from 'react'
import bitcoin from '../../data/OnlyBitcoinPrice'
import { SiHyperledger } from 'react-icons/si'

const MyBalance = () => {
    // Format the price to USD using the locale, style, and currency.
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    // Array Destructuring
    let [coin] = bitcoin

    return (
        <div className='flex-col w-96 border shadow rounded bg-slate-500 pt-3 pb-3 pl-5 pr-5 transform duration-500 hover:-translate-y-2'>
            <div className='flex justify-between mb-5'>
                <div className="flex items-center gap-2">
                    <div className="bg-orange-500 p-1 rounded-full">
                        <SiHyperledger className='text-2xl' color='cyan' />
                    </div>
                    <span className='font-semibold text-2xl'>My Balance</span>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex-col justify-center items-center">
                    <div className="">
                        <div className="font-semibold text-xl mb-3">Total Amount</div>
                        <div className="text-green-200 font-semibold text-3xl mb-3">{USDollar.format(15000)}</div>
                        <div className="flex items-center gap-3">
                            <img src="https://s3.coinmarketcap.com/static-gravity/image/6fbea0356edd48a4a68a4b877195443c.png" width={30} alt="trending" />
                            <div className="flex items-baseline">
                                <span className="text-2xl font-semibold">0.50</span>
                                <span className="ml-2 font-semibold text-xs bg-slate-200 px-1 py-0 rounded">{coin.symbol.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-col justify-center items-center">
                    <div className="">
                        <div className="font-semibold text-xl mb-3">Total Sent</div>
                        <div className="text-green-200 font-semibold text-3xl mb-3">{USDollar.format(5370)}</div>
                        <div className="flex items-center gap-3 mb-5"> 
                            <img src="https://s3.coinmarketcap.com/static-gravity/image/6fbea0356edd48a4a68a4b877195443c.png" width={30} alt="trending" />
                            <div className="flex items-baseline">
                                <span className="text-2xl font-semibold">0.18</span>
                                <span className="ml-2 font-semibold text-xs bg-slate-200 px-1 py-0 rounded">{coin.symbol.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MyBalance
