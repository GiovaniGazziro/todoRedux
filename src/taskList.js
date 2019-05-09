import React, { Component } from 'react';
import OutlinedTextFields from './components/TextField';
import ButtonTools from './components/Button';
import { connect } from 'react-redux';


// eslint-disable-next-line react/prefer-stateless-function
class TaskList extends Component {
  render() {
    return (
      <div>

        { this.props.taskList.map(elem => (
          <div className="task" key={elem.id}>
              <OutlinedTextFields task={elem.task} taskId={elem.id} />
              <ButtonTools taskId={elem.id} onClick={this.removeList}/>

          </div>
        )) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  taskList:state.tasks.taskList
});

export default connect(mapStateToProps, null)(TaskList);
