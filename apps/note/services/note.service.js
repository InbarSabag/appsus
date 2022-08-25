import { storageService } from '../../../services/storage.service.js'
// import { utilService } from "../../../services/util.service.js"

export const noteService = {
    query,
    // getById,
    // remove,
    // createNote,
    // getNoteIdx,
    // archiveNote,
    // recycleBinNote
}

//**** VARIABLES: *********************************************//

const KEY = 'notesDB'
var gNotes = [
    {
        id: "n101",
        type: "note-txt",
        title: "First note",
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" },
        style: { backgroundColor: "lightpink" }
    },
    {
        id: "n102",
        type: "note-img",
        title: "React",
        info: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAm5ng6K2bPMzkqz9jV6kGA8ZV3CEVRk3LQ&usqp=CAU"  },
        style: { backgroundColor: "lightblue" }
    },
    {
        id: "n103",
        type: "note-video",
        title: "Liked this one!",
        info: { url: "https://www.youtube.com/embed/tgbNymZ7vqY?" },
    },
    {
        id: "n104",
        type: "note-todos",
        title: "Get my stuff together",
        info: {
            todos: [
                {
                    txt: "Driving liscence",
                    doneAt: null
                },
                {
                    txt: "Coding power",
                    doneAt: 187111111
                }
            ]
        }
    }
]

//**** FUNCTIONS: *********************************************//

function query(filterBy) {
    console.log('🚀 ~ query ~ filterBy', filterBy)
    let notes = _loadFromStorage()
    if (!notes || !notes.length) notes = _createNotes()

    if (filterBy) {
        let { title, type } = filterBy
        notes = notes.filter(note => (
            (note.title.toUpperCase()).includes(title.toUpperCase()) &&
            (type==='' || note.type === type)
        ))
    }


    return Promise.resolve(notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _createNotes() {
    _saveToStorage(gNotes)
    return gNotes
}



