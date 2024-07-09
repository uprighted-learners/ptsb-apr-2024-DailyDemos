import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserStatus from "./UserStatus";
import IdleChecker from "./IdleChecker";
import WarningBanner from "./WarningBanner";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  //one way to do it
  function shouldDisplayButton(count) {
    if (count < 4) {
      return (
        <button onClick={() => setCount((count) => count + 1)}>
          Ex.1 count is {count}
        </button>
      );
    }
    // else return undefined which renders nothing
  }

  function countHandler() {
    return () => setCount((count) => count + 1);
  }

  let example4;
  if (count < 4) {
    example4 = (
      <button onClick={() => setCount((count) => count + 1)}>
        Ex.4 count is {count} {console.log(`${count}`)}
      </button>
    );
  }

  function setMessageHandler() {
    return () =>
      setMessage(
        "You are monologuing without visual aid, prepare for a ticket"
      );
  }

  return (
    <>
      <WarningBanner message={message} />

      <button onClick={setMessageHandler()}> set Message </button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* if count > 50 then make button disappear */}

        {/* 1. function that returns jsx */}

        {shouldDisplayButton(count)}

        {/* 2. conditional expression - check the first value then render second part if true */}
        {count < 5 && (
          <button onClick={countHandler()}>
            Ex.2 count is {count} {console.log(`${count}`)}
          </button>
        )}

        {/* 3 ternary operator ?  and then a :*/}
        {count < 5 ? (
          <button onClick={() => setCount((count) => count + 1)}>
            Ex.3 count is {count} {console.log(`${count}`)}
          </button>
        ) : (
          <h2>count greater than 4</h2>
        )}

        {example4}

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* ideally isLoggedIn would be a useState */}
      <UserStatus isLoggedIn="true" />
      <IdleChecker />
    </>
  );
}

export default App;
