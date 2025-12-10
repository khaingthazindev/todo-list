import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo, className='' }) {
		return (
				<div className={`${className}`}>
						<h1 className={`tw-text-red-400 tw-border-b-2 tw-border-red-200`}>Date: 12/10/2025</h1>
						<ul>
								{todos.length === 0 && "No Todos"}
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
