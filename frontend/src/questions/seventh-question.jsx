import React , {useState} from 'react'

const SeventhQuestion = () => {
    const [amount, setAmount] = useState('')
    const [fromCurrency , setFromCurrency] = useState('RPE')
    const [toCurrency, setToCurrency] = useState('USD')
    
    const [convertedAmount , setConvertedAmount] = useState(null)

    const exchangeRate = {
        RPE: {
            USD: 2,
            EUR: 2.5,
        },
        USD: {
            EUR: 3,
            RPE: 0.75,
        },
        EUR: {
            RPE: 2,
            USD: 0.5
        }

    }

    const convertCurrency = () => {
        const rate = exchangeRate[fromCurrency][toCurrency];
        const result = amount * rate;
        setConvertedAmount(result.toFixed(2));
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleToCurrencyChange = (e) => {
        setFromCurrency(e.target.value)
    }
    const handleFromCurrencyChange = (e) => {
        setToCurrency(e.target.value)
    }
  return (
    <div>
        <h2>Currency Converter</h2>
        <input 
            type="number" 
            value={amount} 
            onChange={handleAmountChange}
            placeholder = 'Enter amount' 
        />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="RPE">RPE</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD</option>
            <option value="RPE">RPE</option>
            <option value="EUR">EUR</option>
        </select>
        <button onClick={convertCurrency}>Convert</button>
        {convertedAmount !== null && (
            <h3>
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </h3>
        )}
    </div>
  )
}

export default SeventhQuestion