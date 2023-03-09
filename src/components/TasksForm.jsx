import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasksForm() {
  const [tarea, setTarea] = useState("");
  const [desc, setDesc] = useState("");
  const { createTarea } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(desc, tarea);
    createTarea(tarea, desc);
    setDesc("");
    setTarea("");
  };
  return (
    <div className="max-w-md mx-auto">
      
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-3 text-white">Crear Tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="escribe Tu Tarea"
          onChange={(e) => {
            setTarea(e.target.value);
          }}
          value={tarea}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu descripcion"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Enviar</button>
      </form>
    </div>
  );
}

export default TasksForm;
