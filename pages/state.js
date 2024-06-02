import { useState } from "react";

export default function Home() {

    //state
    const [nama, setNama] = useState("Muhammad Afifuddin"); //string
    const [nilai, setNilai] = useState(0) //int-float
    const [tampil, setTampil] = useState(true); //boolean

    return (
        <div className="flex flex-col">
            <p>Haloo, {tampil ? nama : ""}</p>
            <button onClick={() => setNama("Amelsa")} >Ganti Nama</button>
            <button onClick={() => setTampil(!tampil)}>{tampil ? "Hapus" : "Tampil"} Nama</button>
        </div>
    );
}
