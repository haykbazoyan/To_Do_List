import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import List from '../List/List';
import styles from './ToDo.module.css';
import ToDoItem from './ToDoItem';

const idGenerator = () => {
    let id = 0;
    return () => {
      id += 1;
      return id;
    };
  };

const getRandomId = idGenerator();

const createNewToDo = (text) => {
    return {
      text,
      id: getRandomId(),
      isComplete: false,
      isEdit: false,
      draft: text,
    };
  };
export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : [],
            todoInput: '',
            validationMessage: '',
        }
    }
    
    setInputValue = (todoInput) => {
        this.setState({
            todoInput,
        });
    }

    handleClick = (e) => {
        const { todoInput } = this.state;
        if (!todoInput.trim()) {
            this.setState({
                validationMessage: "Input text is required"
            });
        } else {
            this.setState(({ todos, todoInput }) => ({
                todos: [...todos, createNewToDo(todoInput)],
                todoInput: "",
                validationMessage: ""
            }));
        }
        
    }
    
    componentDidUpdate() {
        localStorage.setItem('key', JSON.stringify(this.state.todos));
    }

    // get localStorage doesn't work
    getLocalTodos = () => {
       return localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : localStorage.setItem('key', JSON.stringify([createNewToDo]))
        
    }

    handleDelete = (id) => (e) => {
        e.stopPropagation();

        this.setState(({ todos }) => ({
            todos: todos.filter((todo) => todo.id !== id),
        }));
    };

    handleComplete = (id) => (e) => {
        e.stopPropagation();  

        this.setState(({ todos }) => ({
          todos: todos.map((todo) =>
            todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
          ),
        }));
    };

    handleDraftChange = (id) => (draft) => {
        this.setState(({ todos }) => ({
          todos: todos.map((todo) => (todo.id === id ? { ...todo, draft } : todo)),
        }));
    };

    render() {
        return (
            <div className={`${styles.contentStyle}`}>
                <h1 className='text-4xl mb-6 text-green-900'>To Do List</h1>
                <div>
                    <Input value={this.state.todoInput} name='todo' placeholder="Add what to Do" onChange={this.setInputValue} />
                    <Button onClick={this.handleClick} isDisable="false" btnName="Add"/>
                </div>
                
                <List
                    renderItem={({ ...props }) => {
                        return (
                            
                            <ToDoItem
                                key={props.id}
                                onComplete={this.handleComplete}
                                onDelete={this.handleDelete}
                                onDraftChange={this.handleDraftChange}
                                onDone={this.handleComplete} 
                                {...props}
                            />
                        )
                    }}
                    items = {this.state.todos}
                />
            </div>
            
        );
    }  
}