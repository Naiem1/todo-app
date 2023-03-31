import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/features/todoSlice';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const dispatch = useDispatch();

  const todoDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="flex items-center justify-between list-none text-[17px] mb-[18px] pb-[16px] border-b border-[#ccc]">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2 w-5 h-5 accent-red-600" />
        <p className="text-[18px]">{props.todo.title}</p>
      </div>
      <div className="flex items-center justify-between w-14 text-xl cursor-pointer">
        <GrEdit className="" />
        <RiDeleteBin5Line onClick={() => todoDeleteHandler(props.todo.id)} />
      </div>
    </li>
  );
};

export default TodoItem;
