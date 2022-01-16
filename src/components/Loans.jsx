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

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function LoanAvailable(id, amount) {
        const loanIndex = loansData.findIndex(loan => loan.id === id)
        const loan = {...loansData[loanIndex]}
        const newLoansData = [...loansData]
        const loanAvailable = Number(loan.available.replace(',', ''))
        loan.available = numberWithCommas(loanAvailable - amount)
        newLoansData.splice(loanIndex, 1, loan)
        setLoansData(newLoansData)
      }
    
    return (
        <div className="loans">
            <h1 className="loans__title">Current Loans</h1>
            {loansData.map((loan) => <Loan data={loan} id={loan.id} LoanAvailable={LoanAvailable} />)}
            <p>Total amount avalible for investments: {totalAmount}</p>
        </div>
    )
}

export default Loans