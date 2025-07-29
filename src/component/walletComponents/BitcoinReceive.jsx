import React from 'react'
import { BsArrowDownLeft } from 'react-icons/bs'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import photo from '../../data/BitcoinReceive'

const BitcoinReceive = () => {

    // Array Destructuring
    const [qrCode] = photo

    return (
        <div className='flex-col w-96 border shadow rounded bg-slate-500 pt-3 pb-3 pl-5 pr-5 transform duration-500 hover:-translate-y-2'>
            <div className='flex justify-between mb-4'>
                <div className="flex items-center gap-2">
                    <div className="bg-orange-500 p-1 rounded-full">
                        <BsArrowDownLeft className='text-2xl font-semibold' color='white' />
                    </div>
                    <span className='font-semibold text-2xl'>Receive</span>
                </div>
            </div>

            <div className="mb-5">
                <div className="">
                    <span className="font-semibold mr-5">Your Address : </span>
                    <span className="font-semibold text-green-200">1CVmtcWSifU1gBa7anHADtt</span>
                </div>
            </div>

            <div className="flex items-center gap-5 mb-4">
                <img src={qrCode.image} width={80} alt="qr-code" />
                <div className="">
                    <div className="mb-2">
                        <span className="font-semibold text-slate-50">Scan QR code to get BTC address</span>
                    </div>
                    <div className="">
                        <a href='#' className="font-semibold underline">How QR works?</a>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <BsCreditCard2FrontFill className='text-3xl'/>
                <div className="flex items-center gap-5">
                    <span className="text-slate-50">Apply for Bitcoin Debit Card</span>
                    <a href='#' className="font-semibold underline">Request</a>
                </div>
            </div>
        </div>
    )
}

export default BitcoinReceive
