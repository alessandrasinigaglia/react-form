import { useState } from "react";

export default  function App() {
  const [productName, setProductName] = useState("");
  const [shoppingList, setShoppingList] = useState(["Pane", "Acqua", "Uova"]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newShoppingList = [...shoppingList, productName];
    setShoppingList(newShoppingList);
  };


  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {
          shoppingList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <hr />
      <h3>Aggiungi alla lista</h3>
    <form onSubmit={handleSubmit}>
    <input 
    type="text"
    value={productName}
    onChange={(e) =>{
      setProductName(e.target.value);
    }}></input>
    <button type="submit">invia</button>
    </form>
    </div>
  )
}
