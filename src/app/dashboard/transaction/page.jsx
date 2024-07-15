import { fetchTransactions } from '@/app/lib/data'
import React from 'react'

const AddTransactionPage = () => {
  const transaction = fetchTransactions();
  return (
    <div>AddTransaction</div>
  )
}

export default AddTransactionPage