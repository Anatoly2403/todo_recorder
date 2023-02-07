import React, { FC } from 'react';
import { ITodo } from '../../shared/store/models';
import { ReactComponent as TrashIcon } from '../../shared/icons/trash.svg';
import style from './style.module.css';

interface IProps {
  index: number;
  todo: ITodo;
  handleRemove?: (id: number | string) => void;
}

export const Todo: FC<IProps> = ({ index, todo, handleRemove }) => {
  return (
    <li className={style.root}>
      <span className={style.index}>{index}.</span>
      <p className={style.title}>{todo.title}</p>
      <TrashIcon className={style.icon} onClick={() => handleRemove?.(todo.id)} />
    </li>
  );
};
