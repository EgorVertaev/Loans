import "./Modal.css";

function Modal({data, active, setActive }) {

  const getDays = (second) => Math.floor(second / 86400);

  const { available, title, term_remaining } = data;

  return (
    <div>
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <form className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
          <a href="#" className="modal__title" onClick={(e) => e.preventDefault()}>{title}</a>
          <p className="modal__avalible">Amount avalible: £ {available}</p>
          <p className="modal__days">Loan ends in: {getDays(term_remaining)} days</p>
          <label className="modal__amount" htmlFor="investAmount">Investment amount (£)</label>
          <div className="modal__inner">
            <input
              className="modal__input"
              name="investAmount"
              id="investAmount"
              type="number"
              placeholder="1,000"
            />
            <button className="modal__btn" type="submit">invest</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
