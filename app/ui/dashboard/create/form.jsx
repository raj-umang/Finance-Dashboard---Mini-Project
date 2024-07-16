
import './form.css'
import { addExpense } from "@/app/lib/formAction";
import CoreForm from './formsub/coreForm';
const Form = () => {
   
    return (
        <form className="entry-form w-7/12" action={addExpense} >
            <CoreForm/>
        </form>
    )
}

export default Form