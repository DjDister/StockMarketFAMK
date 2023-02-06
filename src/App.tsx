import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./hooks/reduxHooks";
import { logIn } from "./redux/profileSlice";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      <div onClick={() => dispatch(logIn())}>LogIn</div>
    </div>
  );
}

export default App;
// overflowX: "hidden"
