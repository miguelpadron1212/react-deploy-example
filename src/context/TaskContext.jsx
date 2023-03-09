import { createContext, useState, useEffect} from "react";
import { listaTareas } from "../data/listaTareas";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tareas, setTareas] = useState([]);
  function createTarea(nombre_tarea, desc) {
    setTareas([
      ...tareas,
      {
        id: tareas.length + 1,
        nombre_tarea: nombre_tarea,
        descripcion: desc,
      },
    ]);
  }
  function borrarTarea(id) {
    setTareas(tareas.filter((n) => n.id !== id));
    console.log("Hecho");
  }

  useEffect(() => {
    setTareas(listaTareas);
  }, []);

  return <TaskContext.Provider value={{
    tareas: tareas,
    borrarTarea: borrarTarea,
    createTarea: createTarea
  }}>{props.children}</TaskContext.Provider>;
}
