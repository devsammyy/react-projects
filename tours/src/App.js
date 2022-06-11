import { useState, useEffect } from "react";
import Loading from "./Loading";
const url = "https://course-api.netlify.app/api/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    const data = response.json;
    setTours(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {loading && <Loading />}
      {tours.map((tour) => {
        console.log(tour);
      })}
    </div>
  );
}

export default App;
