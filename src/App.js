import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3004/views";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  const renderDataViews = (data) => {
    console.log("received data", data);
    let arrayItems = [];
    data.map((views) =>
      arrayItems.push(
        <div key={views.id}>
          <span>{views.name}</span>
          <span>{views.discription}</span>
          <span>{views.returns}</span>
          <span>{views.volitility}</span>
        </div>
      )
    );
    console.log("arrayItems", arrayItems);
    return arrayItems;
  };

  return <div>{isLoading ? <h2>Loading...</h2> : renderDataViews(data)}</div>;
}

export default App;
