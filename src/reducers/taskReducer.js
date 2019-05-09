import { ADD, UPDATE, SUBTRACT } from "../constants";
let id_increment=0;

const initialstate = {
  taskList: []
}

const helpUpdate = (taskId, taskValue, taskList) => ({
  taskList: [
    ...taskList.slice(0, taskId),
    {...taskList[taskId], task:taskValue},
    ...taskList.slice(taskId+1, taskList.length)
  ],
})

const TaskReducer = (state=initialstate, action) => {
    switch (action.type) {
      case ADD:
        state = {
          taskList: [
            ...state.taskList,
            {task: '', id: id_increment}
          ],
        };
        id_increment=id_increment+1;
        return state;


      case SUBTRACT:
        // let tgIndex = state.taskList.findIndex(element => state.TaskId  == element.id);
        let targetIndex = state.taskList.findIndex(element => action.id_tarefa === element.id);
        // console.log(targetIndex)
        state = {
          taskList: [
            ...state.taskList.slice(0, targetIndex),
            ...state.taskList.slice(targetIndex+1, state.taskList.length)
          ],
        };

        return state;

      case UPDATE:
        console.log(state)
        // let inputIndex = state.taskList.findIndex(element => action.taskId === element.id);
        return helpUpdate(action.taskId, action.taskValue, state.taskList)
        // state = {
        //   taskList: [
        //   ...state.taskList.slice(0,inputIndex),
        //   {id:action.taskId, task},
        //   ...toUpdate.slice(targetIndex+1, toUpdate.length)
        // ]}


      default:
        return state;
    }
  };
  export default TaskReducer;