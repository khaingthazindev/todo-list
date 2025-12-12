import React, {useState, useEffect, useRef} from "react";

export default function EditModal({ todo, onCloseEdit, onUpdateTodo, onSave, onCancel }) {
		const [title, setTitle] = useState("");
		const inputRef = useRef(null);

		useEffect(() => {
				if (todo) {
						setTitle(todo.title || "");
						inputRef.current?.focus();
				}
		}, [todo]);

		function handleSubmit(e) {
				e.preventDefault();
				onUpdateTodo(title);
		}

		return (
				<div className="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black/50">
						<form onSubmit={handleSubmit} className="tw-bg-white tw-p-6 tw-rounded tw-shadow-lg tw-w-96">
								<div className="tw-flex tw-justify-between tw-align-bottom tw-mb-3">
										<h2 className="tw-text-lg tw-font-semibold tw-text-gray-500">Edit Todo</h2>
										<i className="fa-regular fa-circle-xmark tw-text-slate-200 tw-cursor-pointer" onClick={onCloseEdit}></i>
								</div>
								<input ref={inputRef} value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="tw-text-neutral-500 tw-w-full tw-p-2 tw-border tw-rounded tw-mb-3" />
								<div className="tw-flex tw-justify-end tw-gap-2">
										<button type="button" onClick={onCloseEdit} className="tw-px-3 tw-py-1 tw-rounded tw-border">Cancel</button>
										<button type="submit" className="tw-px-3 tw-py-1 tw-rounded tw-bg-red-500 hover:tw-bg-red-600 tw-text-white">Update</button>
								</div>
						</form>
				</div>
		);
}
