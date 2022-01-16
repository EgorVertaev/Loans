import "./Loans.css"
import Loan from "./Loan/Loan"
import { useState } from "react"
const { loans } = require('./../api/current-loans.json')

function Loans() {
    const [loansData, setLoansData] = useState(loans)

    const totalAmount = loansData.reduce((total, loan) => {
        let avalibleNum = Number(loan.available.replace(',',''))
        return total + avalibleNum;
    }, 0)
    
    return (
        <div className="loans">
            <h1 className="loans__title">Current Loans</h1>
            {loansData.map((loan) => <Loan data={loan} id={loan.id}/>)}
            <p>Total amount avalible for investments: {totalAmount}</p>
        </div>
    )
}

export default Loans