import { ExpenseInvestmentSavings } from '@/app/lib/data'

const Test = () => {
    async function getData(){
      const items = await ExpenseInvestmentSavings();
      console.log(items)
    }
    getData();
  return (
    <div>
    </div>
  )
}

export default Test