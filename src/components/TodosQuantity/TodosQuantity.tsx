import { useFilter } from '../../hooks/useFilter';

const TodosQuantity: React.FC = () => {
  const { filterState, filteredTodos } = useFilter();

  let todosQuanity;

  if (filterState === 'completed') {
    todosQuanity = (
      <span className=" ml-8 text-red-700 text-lg">Completed Todos:</span>
    );
  } else if (filterState === 'pending') {
    todosQuanity = (
      <span className=" ml-8 text-red-700 text-lg">Pending Todos: </span>
    );
  } else {
    todosQuanity = (
      <span className=" ml-8 text-red-700 text-lg">Total Todos:</span>
    );
  }

  return (
    <>
      {todosQuanity}

      <span className="ml-1 text-lg">{filteredTodos.length}</span>
    </>
  );
};

export default TodosQuantity;
