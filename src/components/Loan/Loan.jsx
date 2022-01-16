import { useState } from "react";
import "./Loan.css"
import Modal from "./../Modal/Modal"

function Loan({data, id, LoanAvailable}) {

    const [modalActive, setModalActive] = useState(false)
    const {amount, title, ltv, annualised_return} = data
    const [investedActive, setInvestedActive] = useState(false)
    function Submit(e) {
        e.preventDefault();
        setModalActive(false)
        const amount = e.target.investAmount.value
        LoanAvailable(id, amount)
        setInvestedActive(true)
    }
    return (
        <div className="loan" onSubmit={Submit}>
            <div className="loan__content">
                <h2 className="loan__title">{title}</h2>
                <p className="loan__info">amount: {amount} ltv: {ltv} annualised return: {annualised_return}</p>
            </div>
            <div className="loan__button">
                <p className={investedActive ? "loan__invested active": "loan__invested"}>Invested</p>
                <button className="loan__btn" type="button" onClick={() => setModalActive(true)}>
                    Invest
                </button>
            </div>
            <Modal active={modalActive} setActive={setModalActive} data={data}/>
        </div>
    )
}

export default Loan;