import { entryTypes } from "@/app/constants/data";
import { IoMdAddCircleOutline } from "react-icons/io";
const CoreForm = () => {
    return (
        <>
            <div className="form-group">
                <label htmlFor="type">Type</label>

                <select name="type" required className="type-selector h-10">
                    <option value="" disabled>
                        Select a category
                    </option>
                    {entryTypes.map((item) => (
                        <option
                            key={item.value}
                        >
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="amount">Amount (₹ Rupees)</label>
                <input required className="form-control" type="number" id="amount" name="amount" placeholder="20,000" />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input required className="form-control" type="datetime-local" id="date" name="date" />
            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select required
                    id="category"
                    name="category"
                >
                    <option value="" disabled>
                        Select a category
                    </option>
                    <option value="salary">Salary</option>
                    <option value="recreation">Recreation</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="expense">Expenses</option>
                    <option value="rent">Rent</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="comments">Comments</label>

                <textarea
                    id="comments"
                    name="comment"
                    placeholder="Insert a description for the entry"
                />
            </div>
            <button
                type="submit"
                className="submit-button"
            >
                <span>Create</span>
                <IoMdAddCircleOutline />
            </button>
        </>
    )
}

export default CoreForm