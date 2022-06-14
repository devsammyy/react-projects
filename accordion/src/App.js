import "./App.css";
import data from "./data";
import SingleQuestions from "./SingleQuestions";

function App() {
  return (
    <div className="App">
      <h1>Questions and Answers</h1>
      {data.map((d) => {
        return <SingleQuestions key={d.id} {...d} />;
      })}
    </div>
  );
}

export default App;
