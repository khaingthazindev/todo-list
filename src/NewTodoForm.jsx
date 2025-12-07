import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  function inputChangeHandler(e) {
    console.log(e.target.value);
    setNewItem(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form tw-mt-3">
      <div className="form-row">
        <input
            value={newItem}
            onChange={(e) => inputChangeHandler(e)}
            type="text"
            id="item"
            placeholder="Enter new item..."/>
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
