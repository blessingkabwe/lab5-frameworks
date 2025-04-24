import { useState } from "react";

function App(props) {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMeasaaaasage);
  };

  return (
    <div className="App">
      <h1>Welcome to my webpage, {props.name}!</h1>
      <button onClick={toggleMessage}>
        {showMessage ? " Message" : "Show Message"}
      </button>
      {showMessage && <p>This is bubu's page!</p>}
    </div>
  );
}

export default App;
