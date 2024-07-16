import React from 'react'
import { HistoryTransactions } from '@/app/lib/data'
const Transaction = () => {
  return (
    <table className='flex flex-col w-11/12 mx-auto h-4/6 mt-8 bg-[#151C2C] border-2 border-[#182237] rounded-md'>
      <thead className='flex'>
        <tr className='basis-full items-center flex bg-[#182237] h-[3rem]' >
          <th className='basis-1/5'>Date</th>
          <th className='basis-1/5'>Type</th>
          <th className='basis-1/5'>Category</th>
          <th className='basis-2/5'>Comment</th>
          <th className='basis-1/5'>Amount</th>
        </tr>
      </thead>
      <tbody className='flex flex-col w-full overflow-y-auto mt-4'>
        {HistoryTransactions.map((items, index) => (
          <tr key={index} className='flex w-full h-[3rem] items-center'>
            <td className='basis-1/5 text-center'>{items.createdAt.split('T')[0]}</td>
            <td className='basis-1/5 text-center'>{items.transaction_type}</td>
            <td className='basis-1/5 text-center'>{items.transaction_category}</td>
            <td className='basis-2/5 text-center'>{items.transaction_comments}</td>
            <td className='basis-1/5 text-center'>{items.transaction_amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Transaction