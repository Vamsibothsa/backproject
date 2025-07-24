// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {amtDetails} = props
  const {inc, exp} = amtDetails
  const bal = inc - exp

  return (
    <div className="money-container">
      <div className="money-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div className="details-box">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {bal}</p>
        </div>
      </div>
      <div className="money-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="details-box">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {inc}</p>
        </div>
      </div>
      <div className="money-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div className="details-box">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {exp}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
