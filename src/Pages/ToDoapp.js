import React from "react";
import { useState } from "react";
export default function ToDo() {

    const [todo, setTodo] = useState([]);
    const [newDetails, setNewDetails] = useState({ name: "", address: "" });
    const [editIndex, setEditIndex] = useState(null);

    const deleteTodo = (index) => {
        const deleteDTodo = [...todo];
        deleteDTodo?.splice(index, 1);
        setTodo(deleteDTodo);
    };

    const editaddTodo = () => {
        if (editIndex !== null) {
            const updatedTodo = [...todo];
            updatedTodo[editIndex] = { ...newDetails };
            setTodo(updatedTodo);
            setEditIndex(null);
        } else if (
            newDetails?.name?.trim() !== "" &&
            newDetails?.address?.trim() !== ""
        ) {
            setTodo([...todo, { ...newDetails }]);
        }
        setNewDetails({ name: "", address: "" });
    };
    const editTodo = (index) => {
        setNewDetails(todo[index]);
        setEditIndex(index);
    };
    ////? is optional
    // console.log(todo, "todo");
    return (
        <>
            <div className="container">
                <div className="todowrapper">
                    <h1>My To Do App</h1>
                    <div className="SimpleTodoApp">
                        <div className="row">
                            <div className="col-sm-6 todoform">
                                <div className="add-todo">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        name="fullname"
                                        value={newDetails?.name}
                                        onChange={(e) =>
                                            setNewDetails({ ...newDetails, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="add-todo">
                                    <label>Address:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Address"
                                        name="address"
                                        value={newDetails?.address}
                                        onChange={(e) =>
                                            setNewDetails({ ...newDetails, address: e.target.value })
                                        }
                                    />
                                </div>
                                <button className="add-button" onClick={editaddTodo}>
                                    {editIndex !== null ? (
                                        <i class="fa-solid fa-pen-nib"></i>
                                    ) : (
                                        <i class="fa-solid fa-plus fa-beat"></i>
                                    )}
                                </button>
                            </div>
                            <div className="col-sm-6">
                                <ul className="todo-list">
                                    {todo?.map((item, index) => (
                                        <li key={item}>
                                            <span>
                                                <h4 color="red">Name: {item?.name}</h4>
                                                <p><strong color="red">Address: {item?.address}</strong></p>

                                            </span>
                                            <span>
                                                <button className="edit-button"
                                                    onClick={() => {
                                                        editTodo(index);
                                                    }}
                                                >
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button className="delete-button"
                                                    onClick={() => {
                                                        deleteTodo(index);
                                                    }}
                                                >
                                                    <i class="fa-solid fa-circle-xmark"></i>
                                                </button>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>


            </div>

        </>
    );

}
