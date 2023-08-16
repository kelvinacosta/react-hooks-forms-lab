import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  // const [formData,setFormData] = useState([])
  const [itemName, setItemName] = useState("")
  const [itemCategory,setItemCategory] = useState("Produce")


  function handleSubmit(event){
    event.preventDefault()
    const newFormData = {
      id:uuid(),
      name: itemName,
      category: itemCategory
    }
    //console.log(newFormData)

    //console.log(newFormData)
    // const dataArray = [...formData, newFormData ]
    onItemFormSubmit(newFormData);
    setItemName("");
    setItemCategory("");

    //console.log(dataArray)

    
  }
  function handleChange(event){
    setItemName(event.target.value)
  }
  function handleCategory(event){
    setItemCategory(event.target.value)
    
  }

  

  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
      
    </form>
    
  );
}

export default ItemForm;
