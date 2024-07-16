"use client"
import { useState } from "react";
import { entryTypes } from "@/app/constants/data";
import { IoMdAddCircleOutline } from "react-icons/io";
import Spinner from "@/components/shared/Spinner";
const CoreForm = () => {
    const [entryType, setEntryType] = useState();
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()
    const [category, setCategory] = useState();
    const [comments, setComments] = useState()

    return (
        <>
            <div className="form-group">
                <label htmlFor="type">Type</label>

                <select name="type" className="type-selector h-10">
                    {entryTypes.map((item) => (
                        <option
                            value={item.label}
                            key={item.value}
                            onClick={(e) => {
                                e.preventDefault();
                                setEntryType(item.value);
                            }}
                        >
                            {item.label}
                        </option>
                    ))}
                </select>
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
                    name="category"
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
                    name="comment"
                    placeholder="Insert a description for the entry"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
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