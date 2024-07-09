import { useState } from "react";

function IdleChecker() {
  const [isIdle, setIsIdle] = useState(true);
  const [busyStatus, setBusyStatus] = useState("");

  return (
    <>
      <div>
        {isIdle ? (
          <h2>idle </h2>
        ) : busyStatus ? (
          <h2>{busyStatus}</h2>
        ) : (
          setBusyStatus("monologuing")
        )}
      </div>
      <button
        onClick={() => {
          setIsIdle(!isIdle);
        }}
      >
        Switch
      </button>
    </>
  );
}
export default IdleChecker;
