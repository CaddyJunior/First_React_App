export default function ListTodosComponent(){

    const todaysDate = new Date()
    const futureDate = new Date(todaysDate.getFullYear()+10, todaysDate.getMonth(), todaysDate.getDay())

    const todos = [
                    {id: 1, description: 'Learn AWS', done: false, targetDate: futureDate},
                    {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: futureDate},
                    {id: 3, description: 'Learn Maths', done: false, targetDate: futureDate},
                    {id: 4, description: 'Learn Cryptography', done: false, targetDate: futureDate},
                    {id: 5, description: 'Learn AI', done: false, targetDate: futureDate}
    ]

    return(
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}