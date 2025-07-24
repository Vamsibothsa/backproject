// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, onDelete} = props
  const {id, title, amount, type} = details

  const onClickDelete = () => {
    onDelete(id, type, amount)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{title}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{amount}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{type}</p>
        <button
          type="button"
          className="button1"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
