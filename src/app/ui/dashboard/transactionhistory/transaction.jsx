import React from 'react'
import styles from './transaction.module.css'
import { TempTransctions } from '@/app/lib/data'
const Transaction = () => {
  return (
    <table className='flex flex-col w-11/12 mx-auto h-4/6 mt-8 bg-[#151C2C] border-2 border-[#182237] rounded-md'>
      <thead>
        <tr className='flex bg-[#182237] justify-between h-[3rem] items-center'>
          <td className='ml-5'>Date</td>
          <td>Type</td>
          <td>Category</td>
          <td className='mr-7'>Amount</td>
        </tr>
      </thead>
      <tbody className='overflow-y-scroll p-2'>
        {TempTransctions.map((items, index) => (
          <tr key={index} className='flex justify-between h-[3rem] items-center'>
            <td className='ml-5'>{items.createdAt.split('T')[0]}</td>
            <td>{items.transaction_type}</td>
            <td>{items.transaction_category}</td>
            <td className='mr-7'>{items.transaction_amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Transaction