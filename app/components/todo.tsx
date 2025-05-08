"use client"
import { useEffect, useState } from "react";

export default  function Todo() {
    const [todos, setTodos] = useState<any>({});
    useEffect( () => {
        async function fetchData() {
            const response =await fetch("https://jsonplaceholder.typicode.com/todos/1",{
                // cache: "no-store" // no-store, reload, force-cache, only-if-cached
                next:{
                    revalidate: 60 // revalidate after 60 seconds
                }
            });
            const data =await response.json();
            setTodos(data);
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>Todo</h1>
            <p>{todos.title}</p>
        </div>
    );
}
