import "./Modal.css";

function Modal({data, active, setActive }) {

  const getDays = (second) => Math.floor(second / 86400);

  const { available, title, term_remaining } = data;

  return (
    <div>
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <form className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
          <h3 className="modal__title">Invest in Loan</h3>
          <p>{title}</p>
          <p>Amount avalible: £ {available}</p>
          <p>Loan ends in: {getDays(term_remaining)} days</p>
          <label htmlFor="investAmount">Investment amount (£)</label>
          <input
            name="investAmount"
            id="investAmount"
            type="number"
            placeholder="1,000"
          />
          <button type="submit">invest</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
