import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/features/filterSlice';
import { useTodos } from './useTodos';

export const useFilter = () => {
  const { todos } = useTodos();
  const dispatch = useDispatch();

  const filterState = useSelector((state: any) => state.filter);

  const todoFilterHandler = (filterText: string) => {
    dispatch(setFilter(filterText));
  };

  let filteredTodos = todos;

  if (filterState === 'all') {
    filteredTodos = todos;
  } else if (filterState === 'pending') {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filterState === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return { todoFilterHandler, filteredTodos, filterState };
};
