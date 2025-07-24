import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    transactionList: [],
    totalExpenses: 0,
    totalIncome: 0,
  }

  toAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const obj = {
      id: uuidv4(),
      title: title,
      amount: amount,
      type: type,
    }
    let a, b
    if (type === 'INCOME') {
      a = amount
      b = 0
    } else {
      a = 0
      b = amount
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, obj],
      totalIncome: prevState.totalIncome + a,
      totalExpenses: prevState.totalExpenses + b,
      title: '',
      amount: '',
      type: '',
    }))
  }

  onDelete = (id, type, amount) => {
    const {transactionList} = this.state
    this.setState({
      transactionList: transactionList.filter(
        eachtransaction => eachtransaction.id !== id,
      ),
    })
    let a, b
    if (type === 'INCOME') {
      a = amount
      b = 0
    } else {
      a = 0
      b = amount
    }
    this.setState(prevState => ({
      totalIncome: prevState.totalIncome - a,
      totalExpenses: prevState.totalExpenses - b,
    }))
  }

  toTitleInput = event => {
    this.setState({
      title: event.target.value,
    })
  }

  toamountInput = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  toTypeInput = event => {
    this.setState({
      type: event.target.value,
    })
  }

  render() {
    const {title, amount, type, transactionList, totalExpenses, totalIncome} =
      this.state
    const amountObj = {
      inc: totalIncome,
      exp: totalExpenses,
    }
    return (
      <div className="bg-container">
        <div className="name-container">
          <h1>Hi,Richard</h1>
          <p>Welcome back to your MoneyManager</p>
        </div>
        <MoneyDetails amtDetails={amountObj} />
        <div className="transaction-container">
          <div className="box">
            <form className="form" onSubmit={this.toAddTransaction}>
              <h1>Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                className="name-input"
                placeholder="TITLE"
                value={title}
                onChange={this.toTitleInput}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                className="name-input"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.toamountInput}
              />
              <label htmlFor="type"></label>
              <select
                id="type"
                className="name-input"
                value={type}
                onChange={this.toTypeInput}
              >
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button type="submit" className="button">
                add
              </button>
            </form>
          </div>
          <div className="box">
            <h1>History</h1>
            <ul className="transaction-table">
              <li className="list-item">
                <p className="table-header-cell name-column">Title</p>
                <hr className="separator" />
                <p className="table-header-cell name-column">Amount</p>
                <hr className="separator" />
                <p className="table-header-cell name-column">Type</p>
                <hr className="separator" />
              </li>
              {transactionList.map(eachtransaction => (
                <TransactionItem
                  details={eachtransaction}
                  key={eachtransaction.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
