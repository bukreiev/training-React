import  { PageTitle }  from './components/PageTitle/PageTitle'
import { EventBoard } from 'components/EventBoard/EventBoard';
import events from './components/EventBoard/events.json'
import Counter from './components/Counter'
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import React, {Component} from "react";
import TodoList from "components/TodoList/TodoList";
import initialTodos from './components/TodoList/todos.json'

const ColorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#2196F3' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F5185' },
];


class App extends Component {
  state = {
    todos: initialTodos
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
    
    
  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    
    return (<div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <PageTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>

      <EventBoard events={events}/>

      <Counter />

      <Dropdown />

      <ColorPicker options={ ColorPickerOptions } />


      <div>
        <span>Amount: { todos.length }</span>
        <span>Amount od completed: { completedTodos }</span>
      </div>
      <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      
      <footer class="footer">
      <p class="footer__text">footer</p>
      </footer>

    </div>
      
  );
  }
}

export default App;