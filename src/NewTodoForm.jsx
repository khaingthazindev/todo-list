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
    setNewItem(e.target.value);
  }

  return (
      <form onSubmit={handleSubmit} className="new-item-form tw-mt-3">
        <div className="tw-flex">
          <input
              value={newItem}
              onChange={(e) => inputChangeHandler(e)}
              type="text"
              id="item"
              className="tw-flex-1 tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-outline-none tw-rounded-bl-2xl tw-text-neutral-500"
              placeholder="Enter new item..."
          />

          <button
              className="tw-text-white tw-px-7 tw-py-2 tw-bg-red-500 hover:tw-bg-red-600 tw-rounded-tr-2xl"
          >
            Add
          </button>
        </div>
      </form>
  )
}
