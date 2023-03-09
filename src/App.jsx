import { TasksLists } from "./components/Tasks";
import TasksForm from "./components/TasksForm";

function App() {

    /* ---ESTADO--- */

  //const [tareas, setTareas] = useState([]);

  /* useEffect(() => {
    setTareas(listaTareas);
  }, []); */ // Pasar el arreglo de tareas a TasksList como un prop

  /* function createTarea(nombre_tarea, desc) {
    setTareas([
      ...tareas,
      {
        id: tareas.length + 1,
        nombre_tarea: nombre_tarea,
        descripcion: desc,
      },
    ]);
  } */
  /* function borrarTarea(id) {
    setTareas(tareas.filter((n) => n.id !== id));
    console.log("Hecho");
  } */

    /* ---FIN_ESTADO--- */
    
  return (
    <main className="bg-zinc-900 h-screen ">
      <div className="container mx-auto p-10">
        <TasksForm/>
        <TasksLists/>
      </div>
      
    </main>
  );
}
export default App;
