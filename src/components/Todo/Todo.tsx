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
    todoText,
    offsetHeightRef,
    height,
    isLoading,
  } = useTodos();
  const { filteredTodos } = useFilter();

  return (
    <div className="todo-container">
      <div className="h-[93px] p-[25px] relative">
        <Input
          type="text"
          placeholder="Add a New Task"
          className="text-input"
          onChange={textChangeHandler}
          value={todoText}
        />
        <button
          onClick={todoAddHandler}
          type="button"
          className={`text-[25px] absolute top-8 right-8 text-red-700 ${
            !todoText && 'cursor-not-allowed text-gray-400'
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
