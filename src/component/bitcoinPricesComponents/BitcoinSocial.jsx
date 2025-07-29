import React from 'react'
import { AiFillMessage, AiFillStar } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { MdOutlineVerified } from 'react-icons/md'

const BitcoinSocial = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <div className='flex-col w-96 border shadow rounded bg-slate-500 pt-3 pb-3 pl-6 pr-6 transform duration-500 hover:-translate-y-2'>
            <div className="">
                <div className="flex items-start">
                    <img className='mr-3' src="https://s3.coinmarketcap.com/static-gravity/image/6fbea0356edd48a4a68a4b877195443c.png" width={35} alt="icon" />
                    <div className="flex items-center">
                        <span className="font-semibold text-2xl hover:cursor-pointer ">Bitcoin</span>
                        <div className="flex items-center">
                            <MdOutlineVerified className='ml-1 mr-1 mt-1 hover:cursor-pointer text-green-300' />
                            <span className="text-xs mt-1 font-semibold hover:cursor-pointer ">@bitcoin</span>
                        </div>
                        <div className="ml-20">
                            <a href="#" className="bg-slate-100 px-2 py-1 rounded hover:bg-orange-400 hover:text-white">Follow</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-12 mb-3">
                <p className="font-semibold text-sm">269.5k followers</p>
            </div>

            <div className="ml-12 mt-2 mb-5">
                <p className="break-words font-semibold text-sm text-slate-950">
                    Bitcoin is a digital currency that can be traded for goods or services with vendors that accept Bitcoin as payment.
                </p>
                <div className="flex items-center gap-3 mt-2">
                    <span className=" font-semibold">{`${months[new Date().getMonth()]} ${new Date().getDate()} .`}</span>
                    <div className="flex items-center gap-2 hover:cursor-pointer">
                        <AiFillMessage className='text-blue-100' />
                        <span className=" font-semibold">500 .</span>
                    </div>
                    <div className="flex items-center gap-2 hover:cursor-pointer">
                        <BsFillSuitHeartFill className='text-red-800' />
                        <span className=" font-semibold">9.9k</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BitcoinSocial
