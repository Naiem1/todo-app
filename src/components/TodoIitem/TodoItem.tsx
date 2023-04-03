import { GrDocumentUpdate, GrEdit } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useTodoItem } from '../../hooks/useTodoItem';

interface TodoItemProps {
  todo: { id: string; title: string; completed: boolean };
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
    <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
      {editable === true ? (
        <input
          className="w-5/6 outline-none rounded p-1 border border-2 border-red-600 focus:border focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
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
        <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
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
        <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
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
