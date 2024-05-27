import { useState, useEffect } from "react";
import api from "../api";


function Home() {
    const [notes, setNotes] = useState([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getNotes();
    }, [])

    const  getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {setNotes(data); console.groupCollapsed(data)})
            .catch((err) => alert(err))
    };

    const deleteNote = (id) => {
        api.delete("/api/note/delete/{id}").then((res) => {
            if (res.status === "204") alert("Note Deleted")
            else alert("Failed to delete note.")
        })
        .catch((error) => alert(error))
        getNotes()
    }



    return(
        <h1>Home. You are successfully logged in</h1>
    );
}

export default Home