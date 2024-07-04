import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge(calculateAge(dob));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Date of Birth:
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Calculate Age</button>
        </form>
        {age !== null && (
          <p>
            {name}, you are {age} years old.
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
