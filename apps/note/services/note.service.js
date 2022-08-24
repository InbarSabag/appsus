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
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" }
    },
    {
        id: "n102",
        type: "note-img",
        title: "Bobi and Me",
        info: { url: "http://some-img/me"  },
        style: { backgroundColor: "#00d" }
    },
    {
        id: "n103",
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

function query() {
    const notes = _loadFromStorage()
    if (!notes || !notes.length) notes = _createNotes()
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



