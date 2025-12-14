import { TodoItem } from "../TodoItem.jsx"
import {CompletedItem} from "./CompletedItem.jsx";

export function TodoList({ todos, toggleTodo, deleteTodo, selectedDate, onOpenEdit, onCloseEdit, className='' }) {
		const d = new Date(selectedDate);
		const month = d.getMonth() + 1;
		const day = d.getDate();
		const year = d.getFullYear();
		selectedDate = `${month}-${day}-${year}`;

		const filteredTodos = todos.filter(todo => todo.date === selectedDate & todo.completed === false);
		const completedTodos = todos.filter(todo => todo.date === selectedDate & todo.completed === true);

		return (
				<div className={`${className}`}>
						<div>
								<h1 className={`tw-text-red-400 tw-border-b-2 tw-border-red-200`}>Date: {selectedDate}</h1>
								<ul>
										{filteredTodos.length === 0 && <p className="tw-pt-2 tw-text-neutral-600">Your list is empty. Add your first task for {selectedDate}!</p>}
										{filteredTodos.map(todo => {
												return (
														<TodoItem
																{...todo}
																key={todo.id}
																toggleTodo={toggleTodo}
																deleteTodo={deleteTodo}
																onOpenEdit={onOpenEdit}
																className='tw-my-2 tw-bg-white tw-rounded-3xl tw-py-2 tw-px-4 tw-flex tw-justify-between'
														/>
												)
										})}
								</ul>
						</div>

						{
								completedTodos.length !== 0 &&
								<div className="tw-mt-3">
										<h1 className={`tw-text-red-400 tw-border-b-2 tw-border-red-200`}>Completed List</h1>
										<ul>
												{completedTodos.map(todo => {
														return (
																<CompletedItem
																		{...todo}
																		key={todo.id}
																		toggleTodo={toggleTodo}
																		className='tw-my-2 tw-bg-zinc-300 tw-rounded-3xl tw-py-2 tw-px-4 tw-flex tw-justify-between'
																/>
														)
												})}
										</ul>
								</div>
						}
				</div>
		)
}
