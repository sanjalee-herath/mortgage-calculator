import { useState } from "react";
import "./App.css";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(100000);
  const [interestRate, setInterestRate] = useState(3);
  const [downPayment, setDownPayment] = useState(10000);
  const [repaymentTime, setRepaymentTime] = useState(20);

  const [loanAmount, setLoanAmount] = useState(0);
  const [mortgage, setMortgage] = useState(0);

  function calculateMorgage() {
    const p = purchasePrice - downPayment;
    const r = interestRate / 100 / 12;
    const n = repaymentTime * 12;

    setLoanAmount("$" + p.toLocaleString());

    const mortgage = (p * (r * (1 + r) ** n)) / ((1 + r) ** n - 1);
    setMortgage("$" + mortgage.toFixed(2).toLocaleString());
  }

  return (
    <>
      <div className="container mx-auto max-h-screen grid gap-y-10">
        <div className="flex text-3xl">
          <h1>Mortgage Calculator</h1>
        </div>
        <div className="columns-3 gap-x-20">
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="purchase-price">
              Purchase Price: ${purchasePrice.toLocaleString()}
            </label>
            <input
              type="range"
              id="purchase-price"
              name="purchase-price"
              value={purchasePrice}
              onChange={(e) => {
                setPurchasePrice(+e.target.value);
              }}
              min="10000"
              max="1000000"
              step="5000"
            />
          </div>
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="interest-rate">
              Interest Rate: {interestRate}%
            </label>
            <input
              type="range"
              id="interest-rate"
              name="interest-rate"
              value={interestRate}
              onChange={(e) => {
                setInterestRate(+e.target.value);
              }}
              min="1"
              max="10"
            />
          </div>
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="down-payment">
              Down Payment: ${downPayment.toLocaleString()}
            </label>
            <input
              type="range"
              id="down-payment"
              name="down-payment"
              value={downPayment}
              onChange={(e) => {
                setDownPayment(+e.target.value);
              }}
              step="500"
              min="1000"
              max="500000"
            />
          </div>

          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="loan-amount">
              Loan Amount
            </label>
            <input
              type="text"
              id="loan-amount"
              name="loan-amount"
              value={loanAmount}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="repayment-time">
              Repayment Time: {repaymentTime} Years
            </label>
            <input
              type="range"
              id="repayment-time"
              name="repayment-time"
              value={repaymentTime}
              onChange={(e) => {
                setRepaymentTime(+e.target.value);
              }}
              min="1"
              max="25"
            />
          </div>
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="estimated-value">
              Estimated pr. Month
            </label>
            <input
              type="text"
              id="estimated-value"
              name="estimated-value"
              value={mortgage}
              readOnly
            />
          </div>
        </div>
        <div className="flex">
          <button
            onClick={calculateMorgage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Get a mortgage quote
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
