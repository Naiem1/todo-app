import { useEffect, useRef, useState } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/features/filterSlice';
import { addTodo, deleteAll, fetchTodos } from '../../store/features/todoSlice';
import TodoItem from '../TodoIitem/TodoItem';

const Todo: React.FC = () => {
  const [height, setHeight] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>('');
  const filterData = useSelector((state) => state.filter);
  const offsetHeightRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const {
    entities: todos,
    isLoading,
    error,
  } = useSelector((state) => state?.todo);

  useEffect(() => {
    const offsetHeight = offsetHeightRef.current?.offsetHeight;
    setHeight(offsetHeight >= 480);
  }, [offsetHeightRef, todos]);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const addTodoHandler = () => {
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  const todoAllDelete = () => dispatch(deleteAll());

  let filteredTodos = todos;
  const todoFilterHandler = (filterText: string) => {
    dispatch(setFilter(filterText));

    if (filterText === 'pending') {
      filteredTodos = todos.filter((todo) => !todo.completed);
    } else if (filterText === 'completed') {
      filteredTodos = todos.filter((todo) => todo.completed);
    } else {
      filteredTodos = todos;
    }
  };

  let filterTodos = todos;
  if (filterData === 'all') {
    filterTodos = todos;
  } else if (filterData === 'pending') {
    filterTodos = todos.filter((todo) => !todo.completed);
  } else if (filterData === 'completed') {
    filterTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <div className="bg-white w-[44rem] h-fit mt-16 my-32 mx-auto rounded pt-[28px] pb-[30px] shadow-lg shadow-blue-500/40">
      <div className="h-[93px] p-[25px] relative">
        <input
          type="text"
          placeholder="Add a New Task"
          className="h-full w-full outline-none rounded border-2 border-[#999] pt-0 pr-5 pb-0 pl-3  text-[25px] focus:border focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-[#bfbfbf]"
          onChange={textChangeHandler}
          value={todoText}
        />
        <button
          onClick={addTodoHandler}
          type="button"
          className={`cursor-pointer text-[25px] absolute top-8 right-8 ${
            !todoText && 'hover: cursor-not-allowed'
          }`}
          disabled={!todoText && true}
        >
          <MdLibraryAdd />
        </button>
      </div>

      {isLoading ? (
        <h1 className="text-red-700 text-2xl text-center">Loading...</h1>
      ) : (
        <div>
          <div className="border-b-2 flex justify-between items-center py-[18px] px-[25px]">
            <div className=" text-[18px] cursor-pointer text-[#444444]">
              <button
                type="button"
                className={`my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-lg ${
                  filterData === 'all' ? 'bg-red-600 text-white' : ''
                }`}
                onClick={() => todoFilterHandler('all')}
              >
                All
              </button>
              <button
                type="button"
                className={`my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-lg ${
                  filterData === 'pending' ? 'bg-red-600 text-white' : ''
                }`}
                onClick={() => todoFilterHandler('pending')}
              >
                Pending
              </button>
              <button
                type="button"
                className={`my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-lg  ${
                  filterData === 'completed' ? 'bg-red-600 text-white' : ''
                }`}
                onClick={() => todoFilterHandler('completed')}
              >
                Complete
              </button>
            </div>
            <button
              type="button"
              className={`bg-red-400 border-none outline-none rounded-md text-white cursor-pointer font-[13px] py-[7px] px-[13px] tracking-[0.3px] ${
                !todos.length && 'bg-red-200 hover: cursor-not-allowed'
              }`}
              onClick={todoAllDelete}
              disabled={!todos.length && true}
            >
              Clear All
            </button>
          </div>

          <div className="mt-[20px] mr-[5px] pt-0 pr-[20px] pb-[10px] pl-[25px]">
            <ul
              ref={offsetHeightRef}
              className={`${
                height === true ? 'max-h-[480px] overflow-y-auto px-3' : ''
              }`}
            >
              {filterTodos?.map(
                (todo: { id: number; title: string; completed: boolean }) => (
                  <TodoItem key={todo.id} todo={todo} />
                )
              )}
            </ul>
          </div>
        </div>
      )}
      <div>
        {filterData === 'completed' ? (
          <span className=" ml-8 text-red-700 text-lg">Completed Todos:</span>
        ) : filterData === 'pending' ? (
          <span className=" ml-8 text-red-700 text-lg">Pending Todos: </span>
        ) : (
          <span className=" ml-8 text-red-700 text-lg">Total Todos:</span>
        )}
        <span className="ml-1 text-lg">{filterTodos.length}</span>
      </div>
    </div>
  );
};

export default Todo;
