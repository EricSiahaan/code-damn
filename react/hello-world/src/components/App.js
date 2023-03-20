import React, { useState, useEffect } from "react";
// import Header from "./Header";
import Custom from "./Custom";
let globalID = 0

// console.log("hello" && "eric");

// let age = 20;

// function buttonClickFn() {
//     console.log('I was Present')
// }

// const quotes = [
//     'this is the first Quote',
//     'Lorem ipsum 2',
//     'Lorem ipsum 3',
//     'Lorem ipsum 4',
//     'Lorem ipsum 5',
// ]

function App() {


    // const [counter, setCounter] = useState(100)

    // useEffect(() => {
    //     console.log('Run', counter)
    // }, [counter])

    // const increase = () => {
    //     setCounter(counter + 1)
    // }

    // const decrease = () => {
    //     setCounter(counter - 1)
    // }
    // return <div className="App">
    //     {/* <Header /> */}
    //     <div>
    //         {/* <p>Hello World </p> */}
    //         <h1>Counter : {counter}</h1>
    //         <button onClick={increase}>Increase the counter</button>
    //         <button onClick={decrease}>Decrease the counter</button>
    //         {/* <button onClick={buttonClickFn}>Click Me</button>
    //         <Custom name={age} greetingMessage="Hola" /> */}
    //     </div>
    // </div>

    //     const [quote, setQuote] = useState(quotes[0]);

    //     const randomizeQuote = () => {
    //         const randomquote = quotes[Math.floor(Math.random() * quotes.length)]
    //         setQuote(randomquote)
    //     }


    //     return <div className="App">
    //         <div>{quote}</div>
    //         <button onClick={randomizeQuote}>Click Me</button>
    //     </div>
    // }
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    const createTodo = (event) => {
        event.preventDefault()

        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, { todo: task, id: globalID++ }]
        })

    }

    function deletedItem(itemID) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
    }



    return <div>

        <h1>Best To do App Ever</h1>
        <form onSubmit={createTodo}>
            <input
                type="text"
                value={task}
                onChange={event => {
                    setTask(event.target.value)
                }} />
            <button type="submit">Create ToDo</button>
        </form>

        <ul>
            {todos.map((item, index) => {
                return <div key={item.id}>
                    <li>{item.todo}({item.id})</li>
                    <button onClick={() => deletedItem(item.id)}>Delete</button>
                </div>
            })}
        </ul>
    </div>
}

export default App