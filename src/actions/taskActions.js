import { ADD, UPDATE, SUBTRACT } from "../constants";
export function addTask() {

    return {
        type: ADD
    };
}

export function updateTask(taskId, taskValue) {
    return {
        type: UPDATE,
        taskId,
        taskValue,
    };
}

export function removeTask(id_tarefa) {
    console.log('id_tarefa', id_tarefa)
    return {
        type: SUBTRACT,
        id_tarefa,
    };
}

