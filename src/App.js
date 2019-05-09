import React, { Component } from 'react';
import ButtonAdd from './components/ButtonAdd';
import TaskList from './taskList'


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

  // state = {taskList: [{ task: 'treinamento', id: 1 }, { task: 'reunião', id: 2 }]}
  state = {taskList: []}

  render() {
    return (
      <div>
        <h1>Task Manager</h1>
        <ButtonAdd />

        <TaskList />

      </div>
    );
  }
}

export default App;
