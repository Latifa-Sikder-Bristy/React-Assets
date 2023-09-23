import { useEffect, useState } from "react"

export default function Users() {
    const [Users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h3>Users: {Users.length}</h3>
        </div>
    )
}
/*
1. declear a state to hold the data
2. useEffect with callback and dependency array
3. use fetch to load data
4. set loaded data to the state
*/