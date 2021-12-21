import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
/**
 * 목표
 * router 사용법을 익히자 : url과 보여줄 페이지를 매칭하는 역할
 * router된 화면에서 다른 화면으로 route 하고 싶다. : Link - 새로고침 없이 다른 페이지 연결
 * 왜 리로드가 필요없는거지? 왜 리로드가 되는거지?
 *
 * TIP
 * Switch  역할은?
 *
 * Challenge
 *
 */

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
