import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

/**
 * 목표
 * TIP
 *
 * Challenge
 * 내가 입력한 금액(USD)으로 얼만큼의 해당 통화를 살수 있는지
 *
 */

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [currency, setCurrency] = useState(0);

  const onChange = (event) => setMoney(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onSelected = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelected}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <p />
      <div>
        <label> Your Money is USD </label>
        <input
          onChange={onChange}
          value={money}
          type="number"
          placeholder="enter your money"
        />
      </div>
      <p />
      <div>
        <label>How Many coins you buy? </label>
        <input
          onChange={onChange}
          value={Math.round(money / currency)}
          type="number"
          disabled
        />
      </div>
    </div>
  );
}

export default App;
