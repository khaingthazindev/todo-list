import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import EditModal from "./EditModal.jsx";

export default function App() {
		const [todos, setTodos] = useState(() => {
				const localValue = localStorage.getItem("ITEMS")
				if (localValue == null) return []

				return JSON.parse(localValue)
		});

		const [selectedDate, setSelectedDate] = useState(new Date());

		const [isModalOpen, setIsModalOpen] = useState(false);
		const [editTodo, setEditTodo] = useState({});

		useEffect(() => {
				localStorage.setItem("ITEMS", JSON.stringify(todos))
		}, [todos])

		function addTodo(title) {
				// functional state update // state update is asynchronous so to get most recent update
				let date = new Date(selectedDate);
				date = (date.getMonth()+1) + '-' + date.getDate() + '-' + date.getFullYear();
				setTodos(latestTodos => {
						return [
								...latestTodos,
								{ id: crypto.randomUUID(), title, date: date, completed: false },
						]
				})
		}

		function updateTodo(title) {
				setTodos(prev =>
						prev.map(t => (t.id === editTodo.id ? { ...t, title } : t))
				);
				closeEdit();
		}

		function toggleTodo(id, completed) {
				setTodos(latestTodos => {
						return latestTodos.map(todo => {
								if (todo.id === id) {
										return { ...todo, completed }
								}

								return todo
						})
				})
		}

		function deleteTodo(id) {
				setTodos(latestTodos => {
						return latestTodos.filter(todo => todo.id !== id)
				})
		}

		function openEdit(id) {
				const todo = todos.filter(todo => todo.id === id);
				setEditTodo(...todo);
				setIsModalOpen(true);
		}

		function closeEdit() {
				setIsModalOpen(false);
		}

		return (
				<div className="">
						<div className="tw-w-1/2 tw-mx-auto tw-h-[100dvh] tw-overflow-y-auto tw-bg-white tw-bg-opacity-50 tw-shadow-lg tw-rounded-lg tw-p-6">
								<div className="tw-flex">
										<h1 className="tw-text-2xl tw-font-bold tw-text-teal-700">
												Todo List <i className="fa-regular fa-circle-check"></i>
										</h1>
										<DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} className="tw-ml-3 tw-rounded tw-p-1" />
								</div>
								<NewTodoForm onSubmit={addTodo}/>
								<TodoList onOpenEdit={openEdit} selectedDate={selectedDate} todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} className="tw-mt-3 tw-border-2 tw-border-gray-400 tw-p-3 tw-rounded-2xl" />
						</div>
						{isModalOpen && (
								<EditModal todo={editTodo} onCloseEdit={closeEdit} onUpdateTodo={updateTodo} />
						)}
				</div>
		)
}


