import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteAll, fetchTodos } from './../store/features/todoSlice';

interface TodoType {
  filter(arg0: (todo: { completed: boolean }) => boolean): TodoType;

  map(
    arg0: (todo: {
      id: number;
      title: string;
      completed: boolean;
    }) => JSX.Element
  ): import('react').ReactNode;
  id: number;
  title: string;
  completed: boolean;
}

interface TodosType {
  entities: [];
  isLoading: boolean;
  error: string;
}

interface StateType {
  todo: TodosType;
}

export const useTodos = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [height, setHeight] = useState<boolean>(false);
  const offsetHeightRef = useRef<HTMLUListElement>(null);

  const dispatch = useDispatch();

  const {
    entities: todos,
    isLoading,
    error,
  } = useSelector((state: StateType) => state?.todo);

  useEffect(() => {
    const offsetHeight: string | number =
      offsetHeightRef?.current?.offsetHeight ?? '';
    setHeight(offsetHeight >= 480);
  }, [offsetHeightRef, todos]);

  useEffect(() => {
    dispatch<any>(fetchTodos());
  }, [dispatch]);

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const todoAddHandler = () => {
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  const todoAllDelete = () => dispatch(deleteAll([]));

  return {
    textChangeHandler,
    todoAddHandler,
    todoAllDelete,
    setTodoText,
    todoText,
    offsetHeightRef,
    height,
    todos,
    isLoading,
  };
};
