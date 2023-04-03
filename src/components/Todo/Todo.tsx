import { MdLibraryAdd } from 'react-icons/md';
import { useFilter } from '../../hooks/useFilter';
import { useTodos } from '../../hooks/useTodos';
import FilterController from '../FiltereController/FilterController';
import TodoItem from '../TodoIitem/TodoItem';
import TodosQuantity from '../TodosQuantity/TodosQuantity';
import Input from '../UI/shared/Input';

const Todo: React.FC = () => {
  const {
    textChangeHandler,
    todoAddHandler,
    todoAllDelete,
    todos,
    todoText,
    offsetHeightRef,
    height,
    isLoading,
  } = useTodos();
  const { filteredTodos, filterState, todoFilterHandler } = useFilter();

  return (
    <div className="bg-white w-[44rem] h-fit mt-16 my-32 mx-auto rounded pt-[28px] pb-[30px] shadow-lg shadow-blue-500/40">
      <div className="h-[93px] p-[25px] relative">
        <Input
          type="text"
          placeholder="Add a New Task"
          className="h-full w-full outline-none rounded border-2 border-[#999] pt-0 pr-5 pb-0 pl-3  text-[25px] focus:border focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-[#bfbfbf]"
          onChange={textChangeHandler}
          value={todoText}
        />
        <button
          onClick={todoAddHandler}
          type="button"
          className={`text-[25px] absolute top-8 right-8 text-red-700 ${
            !todoText && 'cursor-not-allowed text-gray-500'
          }`}
          disabled={!todoText && true}
        >
          <MdLibraryAdd />
        </button>
      </div>
      <FilterController />

      {isLoading ? (
        <h1 className="text-red-700 text-2xl text-center">Loading...</h1>
      ) : (
        <div>
          <div className="mt-[20px] mr-[5px] pt-0 pr-[20px] pb-[10px] pl-[25px]">
            <ul
              ref={offsetHeightRef}
              className={`${
                height === true ? 'max-h-[480px] overflow-y-auto px-3' : ''
              }`}
            >
              {filteredTodos?.map(
                (todo: { id: number; title: string; completed: boolean }) => (
                  <TodoItem key={todo.id} todo={todo} />
                )
              )}
            </ul>
          </div>
        </div>
      )}

      <div>
        <TodosQuantity />
      </div>
    </div>
  );
};

export default Todo;
