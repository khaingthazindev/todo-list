import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo, selectedDate, className='' }) {
		const d = new Date(selectedDate);
		selectedDate = (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear();

		return (
				<div className={`${className}`}>
						<h1 className={`tw-text-red-400 tw-border-b-2 tw-border-red-200`}>Date: {selectedDate}</h1>
						<ul>
								{todos.length === 0 && <p className="tw-pt-2 tw-text-neutral-600">Your list is empty. Add your first task for today!</p>}
								{todos.map(todo => {
										return (
												<TodoItem
														{...todo}
														key={todo.id}
														toggleTodo={toggleTodo}
														deleteTodo={deleteTodo}
														className='tw-my-2 tw-bg-white tw-rounded-3xl tw-py-2 tw-px-4 tw-flex tw-justify-between'
												/>
										)
								})}
						</ul>
				</div>
		)
}
