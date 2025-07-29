import React from 'react'
import { AiFillMessage, AiFillStar } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import bitcoinPhoto from '/coin.jpg'

const CryptoCommunityArticle = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <div className='flex-col border shadow rounded bg-slate-500 pt-3 pb-3 pl-6 pr-6'>
            <div className='flex justify-between mb-3'>
                <div className="flex items-center gap-2">
                    <AiFillStar className='text-2xl' color='yellow' />
                    <span className='font-semibold text-xl'>Top Community Article</span>
                </div>
                <a className='flex items-center' href="#">
                    <span className="font-semibold ">More</span>
                    <BiChevronRight className='' />
                </a>
            </div>

            <div className="flex gap-3">
                <img className='rounded mt-3 mb-10' width={100} src={bitcoinPhoto} alt="icon" />
                <div className=" mt-2 mb-5">
                    <a href="#">
                        <h1 className='font-bold text-lg hover:underline'>Bitcoin Mining</h1>
                        <p className="break-words text-sm font-semibold ">
                            Bitcoin is a protocol which implements a public, permanent, and decentralized ledger.
                        </p>
                    </a>
                    
                    <div className="flex items-center gap-3 mt-2">
                        <span className=" font-semibold">{`${months[new Date().getMonth()]} ${new Date().getDate()} .`}</span>
                        <div className="flex items-center gap-2 hover:cursor-pointer">
                            <AiFillMessage className='text-blue-100' />
                            <span className=" font-semibold">508 .</span>
                        </div>
                        <div className="flex items-center gap-2 hover:cursor-pointer">
                            <BsFillSuitHeartFill className='text-red-800' />
                            <span className="font-semibold">290</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoCommunityArticle
