import "./Loan.css"

function Loan({data, id}) {

    return (
        <div className="loan">
            <div className="loan__content">
                <h2 className="loan__title">{data.title}</h2>
                <p className="loan__info">amount: {data.amount} ltv: {data.ltv} annualised return: {data.annualised_return}</p>
            </div>
            <div className="loan__button">
                <button className="loan__btn" type="button">
                    Invest
                </button>
            </div>
        </div>
    )
}

export default Loan;