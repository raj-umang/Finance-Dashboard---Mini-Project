"use client"
import { useState } from "react";
import { entryTypes } from "@/app/constants/data";
import { IoMdAddCircleOutline } from "react-icons/io";
const Form = () => {
    const [entryType, setEntryType] = useState();
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()
    const [category, setCategory] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <form>
            <div>
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

            <div>
                <label htmlFor="amount">Amount (₹ Rupees)</label>
                <input type="number" id="amount" name="amount" placeholder="20,000" value={amount} onChange={e => setAmount(parseFloat(e.target.value))} />
            </div>

            <div>
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
            </div>

            <div>
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