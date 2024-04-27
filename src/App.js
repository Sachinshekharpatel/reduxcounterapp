import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { authActions } from "./store/reduxcounter";
import { useSelector, useDispatch } from "react-redux";
import UserProfile from "./components/UserProfile";
function App() {
const dispatch = useDispatch();
const authentication = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!authentication && <Auth />}
      {authentication && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
