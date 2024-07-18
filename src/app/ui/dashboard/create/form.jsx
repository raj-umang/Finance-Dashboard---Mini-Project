
import { addExpense } from '@/app/lib/data';
import './form.css'
import CoreForm from './formsub/coreForm';
const Form = () => {
   
    return (
        <form className="entry-form w-6/12" action={addExpense} >
            <CoreForm/>
        </form>
    )
}

export default Form