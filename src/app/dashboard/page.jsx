import React from 'react'
import card from '../ui/dashboard/card/card'
import styles from "../ui/dashboard/dashboard.module.css"
import rightbar from '../ui/dashboard/rightbar/rightbar'
import Transaction from '../ui/dashboard/transaction/transaction'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Chart from '../ui/dashboard/chart/chart'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.main}>
    <div className={styles.cards}>
      <card/>
      <card/>
      <card/>
      </div>
      <Transaction/>
      <Chart/>
    </div>
    <div className={styles.side}>
      <Rightbar/>
    </div>
    </div>
  )
}

export default Dashboard;