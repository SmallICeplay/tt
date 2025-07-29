import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import topPeople from '../../data/TopPeople'

const TopMembers = () => {
  return (
      <div className='flex-col w-96 border shadow rounded bg-slate-500 pt-3 pb-3 pl-5 pr-5 transform duration-500 hover:-translate-y-2 '>
          <div className='flex justify-between mb-3'>
              <div className="flex items-center gap-2">
                  <AiFillStar className='text-2xl' color='yellow' />
                  <span className='font-semibold text-xl'>Top Members</span>
              </div>
              <a className='flex items-center' href="#">
                  <span className="font-semibold ">More</span>
                  <BiChevronRight className='' />
              </a>
          </div>

          <div className="flex-col justify-center items-center">
              {topPeople?.map(people => {
                  return (
                      <div className="flex mt-4 mb-4" key={people?.id}>
                          <span className="ml-2 mr-5 font-semibold ">{people?.id}</span>
                          <div className="flex items-center w-60 gap-3 mr-2">
                              <img className='rounded-full w-7 h-7'  src={people?.image} alt="peopleImage" />
                              <a href="#" className='hover:text-green-50'>
                                  <span className="font-semibold ">{people?.name}</span>
                              </a>
                          </div>
                          <div className="flex items-center gap-1 ml-2">
                              <span className="text-green-300 font-semibold">$ {people?.amount}</span>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}

export default TopMembers
