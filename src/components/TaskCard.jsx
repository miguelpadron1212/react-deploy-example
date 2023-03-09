import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ tarea }) {
  const { borrarTarea } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold capitalize">{tarea.nombre_tarea}</h3>
      <p className="text-gray-500 text-sm">{tarea.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => borrarTarea(tarea.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
