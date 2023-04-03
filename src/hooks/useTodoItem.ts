import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  completedTodo,
  deleteTodo,
  editTodo,
} from '../store/features/todoSlice';

export const useTodoItem = (todo: {
  id: string;
  title: string;
  completed: boolean;
}) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(todo.title);

  const todoDeleteHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const todoCheckedHandler = () => {
    dispatch(completedTodo(todo.id));
  };

  const todoEditHandler = () => {
    setEditable(true);
  };

  const editedTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const todoUpdateHandler = () => {
    dispatch(editTodo({ title: editedText, id: todo.id }));
    setEditable(false);
  };

  return {
    todoEditHandler,
    todoCheckedHandler,
    todoUpdateHandler,
    editedTextChangeHandler,
    todoDeleteHandler,
    setEditable,
    setEditedText,
    editable,
    editedText,
  };
};
