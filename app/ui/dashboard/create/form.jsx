"use client"
import { useState } from "react";
import { entryTypes } from "@/app/constants/data";
import { IoMdAddCircleOutline } from "react-icons/io";
import Spinner from "@/components/shared/Spinner";
import './form.css'
const Form = () => {
    const [entryType, setEntryType] = useState();
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()
    const [category, setCategory] = useState();
    const [comments, setComments] = useState()

    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <form className="entry-form" >
            <div className="form-group">
                <label htmlFor="type">Type</label>

                <div id="type" className="type-selector">
                    {entryTypes.map((item) => (
                        <button
                            key={item.value}
                            className={entryType === item.value ? "active" : ""}
                            style={{
                                backgroundColor:
                                    entryType === item.value ? item.color : "transparent",
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                setEntryType(item.value);
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="amount">Amount (₹ Rupees)</label>
                <input className="form-control" type="number" id="amount" name="amount" placeholder="20,000" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input className="form-control" type="datetime-local" id="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" disabled>
                        Select a category
                    </option>
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
                    placeholder="Insert a description for the entry"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className={`submit-button ${isDisabled && "opacity-60"}`}
                disabled={isDisabled && isLoading}
            >
                <span>Create</span>
                {isLoading ? <Spinner /> : <IoMdAddCircleOutline />}
            </button>
        </form>
    )
}

export default Form