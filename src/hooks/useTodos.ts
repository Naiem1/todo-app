import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteAll, fetchTodos } from './../store/features/todoSlice';

export const useTodos = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [height, setHeight] = useState<boolean>(false);
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

  const todoAddHandler = () => {
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  const todoAllDelete = () => dispatch(deleteAll());

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
