import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export function TasksLists() {

  const {tareas} = useContext(TaskContext);

  if (tareas.length === 0) {
    return <h3>NO HAY TAREAS</h3>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      
      {tareas.map((tarea, i) => {
        return (
          <TaskCard key={tarea.id} tarea={tarea} />
        );
      })}
    </div>
  );
}
