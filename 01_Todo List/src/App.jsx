import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {

  const [todo, setTodo] = useState("")  // Input text
  const [todos, setTodos] = useState([]) // Handles input

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])  // This saves to localStorage whenever 'todos' changes
  
  const handleEdit = (id) => {
    let t = todos.find(i => i.id === id)
    setTodo(t.todo)
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
      setTodo("")
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => item.id === id)
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 p-5 bg-purple-200 rounded-xl min-h-[80vh] w-1/2 ">
        <h1 className="text-xl font-bold text-center text-[#333333]">Manage Your Tasks at One Place</h1>
        <div>
          <h2 className="addtodo text-lg font-bold text-[#333333] my-3">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-80 rounded-md text-[#333333] font-medium p-1 ' />
          <button onClick={handleAdd} className='p-2 py-1 mx-6 font-bold rounded-md bg-violet-800 active:bg-violet-600 hover:bg-violet-950'>Save</button>
        </div>

        <h1 className="text-lg font-bold text-[#333333]">Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && <div className='font-semibold text-[#333333]'>No todos to display</div>}
          {todos.map(item => (
            <div key={item.id} className="flex justify-between w-1/2 my-3 text-black todo">
              <div className='flex gap-5 font-bold'>
                <input
                  name={item.id}
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={handleCheckBox}
                />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
              </div>
              <div className="flex h-full buttons">
                <button
                  onClick={() => handleEdit(item.id)}
                  className='p-2 py-1 mx-1 font-bold text-white rounded-md bg-violet-800 active:bg-violet-600 hover:bg-violet-950'>
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='p-2 py-1 font-bold text-white rounded-md bg-violet-800 hover:bg-violet-950 active:bg-violet-600'>
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
