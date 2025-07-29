import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { Box, ScrollArea } from '@mantine/core'
import { AiFillStar } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { FaCoins } from 'react-icons/fa'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    // Legend
)

export const options = {
    responsive: true,
    plugins: {
        // legend: {
        //     position: 'top',
        // },
        title: {
            display: true,
            text: 'Monthly Transactions',
        }
    }
}

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Bitcoin',
            data: labels.map(() => faker.datatype.number(({ min: 1000, max: 10000 }))),
            borderColor: 'rgba(227, 197, 27)',
            backgroundColor: 'rgba(227, 197, 27, 0.5)',
        },
        {
            label: 'Ethereum',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
            borderColor: 'rgb(27, 124, 227)',
            backgroundColor: 'rgba(27, 124, 227, 0.5)',
        },
        {
            label: 'Tether',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
            borderColor: 'rgb(66, 168, 151)',
            backgroundColor: 'rgba(66, 168, 151, 0.5)',
        },
    ]
}


const MemberLineChart = () => {
  return (
      <div className='flex-col w-96 border shadow rounded bg-slate-500 pt-3 pb-3 pl-5 pr-5 transform duration-500 hover:-translate-y-2 '>
          <div className='flex justify-between mb-3'>
              <div className="flex items-center gap-2">
                  <FaCoins className='text-2xl' color='yellow' />
                  <span className='font-semibold text-xl'>Transactions</span>
              </div>
              <a className='flex items-center' href="#">
                  <span className="font-semibold ">More</span>
                  <BiChevronRight className='' />
              </a>
          </div>

          <div className="flex-col justify-center items-center">
              <Line className="w-[520px] bg-white p-1 rounded" options={options} data={data} />
          </div>
      </div>
  )
}

export default MemberLineChart
