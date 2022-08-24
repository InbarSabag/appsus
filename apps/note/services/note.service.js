import { storageService } from "../../../services/storage.service"

export const noteService = {
    query,
    getById,
    remove
}

//**** VARIABLES: *********************************************//
const KEY = 'notesDB'
const gNotes = []

//**** FUNCTIONS: *********************************************//

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = gNotes
        _saveToStorage(notes)
    }

    return Promise.resolve(notes)
}

function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}


//**** INTERNAL FUNCTIONS: ************************************//

function _createNotes() {
    gNotes = [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: { txt: "Fullstack Me Baby!" }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "http://some-img/me",
                title: "Bobi and Me"
            },
            style: { backgroundColor: "#00d" }
        },
        {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
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
        }]
        _saveToStorage(gNotes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}
