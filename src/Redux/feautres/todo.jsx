import { useState } from "react";
import toast from "react-hot-toast";
import { addTodo } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./todolist";
import { v4 } from "uuid";
const Todo = () => {
  const data = useSelector((state) => state.todo);
  const [todo, setTodo] = useState("");
  console.log("fnnskjfnsk", data);
  const newdata = [...data, todo].reverse();
  newdata.splice(0, 1);
  console.log(newdata, "ndata");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (todo && todo.length >=3 )  {
      dispatch(addTodo(todo));
      setTodo("");
      toast.success("Todo Added Succesfully");
    }
    if(todo == ""){
      toast.error("Fill it Out")
      return
    }
    if(todo.length < 3){
      toast.error("Too Short")

      setTimeout(() => {
        toast.error("Add More")

      }, 1000)
      return
    }
  };

  return (
    <>
      <main className={`flex justify-center items-center flex-col w-full ${newdata.length ==  0 ? "h-screen" : "h-max"}`}>

        
        <section className="bg-gray-100 relative w-1/2 max-md:w-3/4w-1/2 max-sm:w-5/6 max-lg:w-5/6 py-24 px-32   max-h-max">
        <h1 className="absolute top-[5%]  left-[45%] font-serif text-lg text-orange-600 border-b-2">
        Todo List</h1> 
              
          {newdata.map((items) => (
            <TodoList item={items} key={v4()} />
          ))}
           {!newdata.length && (
        <table className=" text-gray-900 font-serif m-auto blck font-bold">
          <tbody>
          <tr>
            <td>You {"Don't"} Have Any Tasks Add One</td>
          </tr>
          </tbody>
        </table>
      )}

      {" "}

      <div className="text-center absolute bottom-0 left-[30%]">
            <input
              className="p-2 mb-4 max-sm:w-1/2 outline-none"
              type="text"
              value={todo}
              required={true}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              className="p-2 bg-white outline-none text-green-700   "
              onClick={handleClick}
            >
              + Add
            </button>
          </div>
        </section>

       
      </main>
    </>
  );
};

export default Todo;
