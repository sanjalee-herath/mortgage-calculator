import "./App.css";

function App() {
  return (
    <>
      <div className="container mx-auto max-h-screen grid gap-y-10">
        <div className="flex text-3xl">
          <h1>Mortgage Calculator</h1>
        </div>
        <div className="columns-3 gap-x-20">
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="purchase-price">
              Purchase Price: $450,000
            </label>
            <input
              type="range"
              id="purchase-price"
              name="purchase-price"
              min="0"
              max="11"
            />
          </div>
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="interest-rate">
              Interest Rate: 3%
            </label>
            <input
              type="range"
              id="interest-rate"
              name="interest-rate"
              min="0"
              max="11"
            />
          </div>
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="down-payment">
              Down Payment: $135,000
            </label>
            <input
              type="range"
              id="down-payment"
              name="down-payment"
              min="0"
              max="11"
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
              value={315000}
              readOnly
            />
          </div>
          <div className="flex flex-col gap-y-4 mb-11">
            <label className="flex" htmlFor="repayment-time">
              Repayment Time: 25 Years
            </label>
            <input
              type="range"
              id="repayment-time"
              name="repayment-time"
              min="0"
              max="11"
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
              value={1}
              readOnly
            />
          </div>
        </div>
        <div className="flex">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Get a mortgage quote
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
