import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

/**
 * 목표
 * 외부 api를 호출해 보자
 * 응답으로 받은 값을 원하는 형태로 표기해 보자
 *
 * TIP
 * fetch() -  네트워크 통신을 포함한 리소스 취득. url을 설정하면 해당 api를 호출?
 * then()
 * map() - 어떤 형식으로 어떤 형태로 데이터를 보여 줄건지
 *
 * Challenge
 * 내가 입력한 금액(USD)으로 얼만큼의 해당 통화를 살수 있는지
 *
 */

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
