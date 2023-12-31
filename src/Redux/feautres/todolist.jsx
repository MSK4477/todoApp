/* eslint-disable react/prop-types */
import { useState } from "react";
import { updateTodo, deleteTodo, markAsComleted } from "../slices/todoSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const TodoList = ({ item }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [data, setData] = useState(item.todo);

  const edit = (id) => {
    if (!toggleEdit) {
      setToggleEdit(true);
      setId(id);
    } else {
      setToggleEdit(false);
    }
  };

  const updatetodo = () => {
    setToggleEdit(false);
    dispatch(updateTodo({ id, data }));
    toast.success("Todo Updated");
  };

  const deletetodo = (id) => {
    console.log(dispatch(deleteTodo({ id })));
    toast.success("Todo Deleted Succesfully");
  };
let {completed} = item
  const markAsCompleted = (id) =>  {
    console.log(dispatch(markAsComleted({id})))
    if(!completed) { 
      toast.success(" Mark as Completed")
    }else { 
      toast.success("Removed From Completed")
    }
}

  return (
    <main>
   
      {!toggleEdit &&item.todo &&(
        <section className="mb-7">
          <table className="flex justify-center items-center w-full border-collapse border  border-gray-300">
            <tbody>
            <tr className="border-b bg-white shadow-2xl rounded-2xl border-gray-300">
              <td className="p-2">
                <input className="cursor-pointer" checked={completed ? true : false} onClick={() => markAsCompleted(item.id)} onChange={(e) => console.log(e)} type="checkbox" />
              </td>
              <td    title={completed ? "completed" : item.todo.length  > 13 ? item.todo : "" } className={`p-2 text-red-900 font-serif max-lg:w-[120rem] max-md:w-[100rem]  w-96  m-auto ${completed && "line-through"}`}>
                {item.todo.substring(0, 13)}
                {item.todo.length > 13 && "..."}
              </td>
              <td className="p-2">
                {item.todo &&  !completed && (
                  <div className=" text-right   space-x-2">
                    <span
                      className="text-blue-500  cursor-pointer"
                      onClick={() => edit(item.id)}
                    >
                      Edit
                    </span>
                    <span
                      className="text-red-500  cursor-pointer"
                      onClick={() => deletetodo(item.id)}
                    >
                      Delete
                    </span>
                  </div>
                )}
              </td>
            </tr>
            </tbody>
          </table>
        </section>
      )}

      {toggleEdit && item.todo && (
        <section className="mb-7">
          <div className="flex justify-between items-center">
            <input
              className="p-2 border w-full outline-none rounded-r-none border-none "
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <span
              className="p-2 bg-white border-none outline-none text-green-700   cursor-pointer"
              onClick={updatetodo}
            >
              Update
            </span>
          </div>
        </section>
      )}
    </main>
  );
};

export default TodoList;
