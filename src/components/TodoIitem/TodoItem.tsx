import { GrDocumentUpdate, GrEdit } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useTodoItem } from '../../hooks/useTodoItem';

interface TodoItemProps {
  todo: { id: number | string; title: string; completed: boolean };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const {
    editedTextChangeHandler,
    todoDeleteHandler,
    todoEditHandler,
    todoCheckedHandler,
    todoUpdateHandler,
    setEditable,
    editedText,
    editable,
  } = useTodoItem(todo);

  return (
    <li className="task-item">
      {editable === true ? (
        <input
          className="edited-input"
          type="text"
          value={editedText}
          onChange={(e) => editedTextChangeHandler(e)}
        />
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 w-5 h-5 accent-red-600"
            onClick={() => todoCheckedHandler()}
            defaultChecked={todo.completed}
          />

          <p className={`text-[18px] ${todo.completed ? 'line-through' : ''}`}>
            {todo.title}
          </p>
        </div>
      )}
      {editable === true ? (
        <div className="task-btn">
          <MdOutlineCancel onClick={() => setEditable(false)} />
          <button
            className={`${!editedText && 'hover: cursor-not-allowed'}`}
            type="button"
            disabled={!editedText && true}
            onClick={todoUpdateHandler}
          >
            <GrDocumentUpdate />
          </button>
        </div>
      ) : (
        <div className="task-btn">
          {!todo.completed && (
            <button type="button" className="">
              <GrEdit className="" onClick={todoEditHandler} />
            </button>
          )}
          <RiDeleteBin5Line onClick={() => todoDeleteHandler(todo.id)} />
        </div>
      )}
    </li>
  );
};

export default TodoItem;
