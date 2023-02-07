import React, { FC } from 'react';
import { ITodo } from '../../shared/store/models';
import { Todo } from '../Todo';
import style from './style.module.css';

interface IProps {
  todos: ITodo[];
  handleRemove?: (id: number | string) => void;
}

export const TodoList: FC<IProps> = ({ todos, handleRemove }) => {
  return (
    <ul className={style.root}>
      {todos.map((todo, i) => (
        <Todo key={todo.id} index={i + 1} todo={todo} handleRemove={handleRemove} />
      ))}
    </ul>
  );
};
