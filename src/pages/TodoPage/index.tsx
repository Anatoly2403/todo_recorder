import React, { ChangeEventHandler, FC, MouseEventHandler, useCallback, useState } from 'react';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { Logo } from '../../shared/ui/Logo';
import { TodoList } from '../../components/TodoList';
import style from './style.module.css';
import { todoActions } from '../../shared/store/actions';
import { todoSelector } from '../../shared/store/selectors';
import { useAppSelector } from '../../shared/store';

export const TodoPage: FC = () => {
  const { todos } = useAppSelector(todoSelector);
  const [todoValue, setTodoValue] = useState<string>('');
  const { addTodo, removeTodo } = todoActions;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodoValue(event.target.value);
  };

  const addTodoHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (!todoValue.length) return;
    const id = todos.length + 1;

    addTodo({
      id,
      title: todoValue,
    });

    setTodoValue('');
  };

  const removeTodoHandler = useCallback(
    (id: number | string) => {
      removeTodo(id);
    },
    [removeTodo]
  );

  return (
    <div className={style.root}>
      <div className={style.block_left}>
        <Logo greetingText="TODO Recorder" />
        <Input placeholder="Add todo" value={todoValue} onChange={handleInputChange} />
        <Button onClick={addTodoHandler}>Create</Button>
      </div>

      <div className={style.block_right}>
        {!!todos.length && <TodoList todos={todos} handleRemove={removeTodoHandler} />}
        {!todos.length && (
          <div className={style.empty}>
            <span>Empty</span>
            <span>&#129335;&#127998;</span>
          </div>
        )}
      </div>
    </div>
  );
};
