import { useState } from "react";

export default  function App() {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("il nome inviato è : " + firstName)
  };


  return (
    <div>
      <h1>Lista</h1>
      <ul>
        <li>Pane</li>
        <li>Acqua</li>
        <li>Uova</li>
      </ul>
      <hr />
      <h3>Aggiungi alla lista</h3>
    <form onSubmit={handleSubmit}>
    <input 
    type="text"
    value={firstName}
    onChange={(e) =>{
      setFirstName(e.target.value);
    }}></input>
    <button type="submit">invia</button>
    </form>
    </div>
  )
}
