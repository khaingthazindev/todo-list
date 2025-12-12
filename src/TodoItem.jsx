export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, onOpenEdit, className='' }) {
		return (
				<li className={`${className}`}>
						<label>
								<input
										type="checkbox"
										checked={completed}
										onChange={e => toggleTodo(id, e.target.checked)}
								/>
								<span className="tw-pl-1">{title}</span>
						</label>
						<div>
								<button className="tw-ml-2" onClick={() => onOpenEdit(id)}>
										<i className="fa-regular fa-pen-to-square tw-text-orange-400"></i>
								</button>
								<button onClick={() => deleteTodo(id)} className="tw-ml-2">
										<i className="fa-regular fa-trash-can tw-text-red-400"></i>
								</button>
						</div>
				</li>
		)
}
