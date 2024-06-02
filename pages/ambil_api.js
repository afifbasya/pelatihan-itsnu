import { useEffect, useState } from "react";

export default function Home() {
    //looping
    const [users, setUsers] = useState([]); //array

    const ambilAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    useEffect(() => {
        console.log("haloooooo");
        ambilAPI()
    }, [])

    return (
        <div className="flex flex-col">
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                )
            })}
        </div>
    );
}
