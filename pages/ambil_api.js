import { useEffect, useState } from "react";

export default function Home() {
    //looping
    const [users, setUsers] = useState([]); //array
    const [tampil, setTampil] = useState(true);

    const ambilAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }


    //2. ketika ada state yang berubah
    //3. ketika dicopot

    //1. ketika pertama dimuncul
    useEffect(() => {
        // console.log("haloooooo");
        ambilAPI()
    }, [])

    useEffect(() => {
        console.log("masukkk 2 ketika ada state yang berubah");
    }, [tampil])

    useEffect(() => {
        console.log("masukkk 1");
    }, [])

    return (
        <div className="flex flex-col">

            <button onClick={() => setTampil(!tampil)}>Ganti</button>

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
