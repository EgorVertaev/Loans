import "./Loan.css"

function Loan() {

    return (
        <div className="loan">
            <div className="loan__content">
                <h2 className="loan__title"></h2>
                <p className="loan__info"></p>
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