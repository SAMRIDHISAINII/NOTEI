console.log('Create');
makeNotes();

function createNote() {
    let addText = document.getElementById('noteTextArea');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    makeNotes();
}

function makeNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let nukestring = "";
    notesObj.forEach(function(element, index) {
        nukestring += `
        <div class="card text-dark m-3 mb-3" style="max-width: 20rem;">
            <div class="card-header">Note-${index + 1}</div>
            <div class="card-body">
                <p class="card-text">${element}
                </p>
                <button type="submit" class="mt-3 btn btn-create text-white mb-2" onclick="deleteNote(${index})">Delete Note-${index + 1}</button>
            </div>
        </div>`;
    });
    let notesElement = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElement.innerHTML = nukestring;
    } else if (notesObj.length == 0) {
        notesElement.innerHTML = `<p class="container d-flex justify-content-center align-items-center text-danger">Create your first note now....</p>`
    }
}

function deleteNote(index) {
    console.log('Deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    makeNotes();
}

