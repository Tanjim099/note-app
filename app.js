const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = ()=>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    });
    // console.log(data)
    localStorage.setItem("notes", JSON.stringify(data));
}

addBtn.addEventListener("click", ()=>{
    confirm("are you want to create a new note")
    AddNote();
});


const AddNote = (text = "")=>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
    <i class="save fa fa-save"></i>
    <i class="trash fa fa-solid fa-trash"></i>
</div>
<textarea>${text}</textarea> `;

note.querySelector(".trash").addEventListener("click", ()=>{
    note.remove();
    saveNotes()
})

note.querySelector(".save").addEventListener("click", ()=>{
    saveNotes()
})
main.appendChild(note)
saveNotes()
}

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        // console.log(lsNotes);

        lsNotes.forEach((lsNote) =>{
            AddNote(lsNote);
        })
    }
)()