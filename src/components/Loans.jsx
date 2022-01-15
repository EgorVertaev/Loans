import "./Loans.css"
import Loan from "./Loan/Loan"

function Loans() {

    return (
        <div className="loans">
            <h1 className="loans__title">Current Loans</h1>
            <Loan/>
        </div>
    )
}

export default Loans