export function CompletedItem({ completed, id, title, toggleTodo, className='' }) {
		return (
				<li className={`${className}`}>
						<label>
								<input
										type="checkbox"
										checked={completed}
										onChange={e => toggleTodo(id, e.target.checked)}
										className="tw-cursor-pointer"
								/>
								<span className="tw-pl-1">{title}</span>
						</label>
				</li>
		)
}
