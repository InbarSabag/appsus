import { storageService } from "../../../services/storage.service"
import { utilService } from "../../../services/util.service"

export const noteService = {
    query,
    getById,
    remove,
    createNote,
    getNoteIdx,
    onArchiveNote,
    onRecycleBinNote
}

//**** VARIABLES: *********************************************//

const KEY = 'notesDB'


//**** FUNCTIONS: *********************************************//

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = _createNotes
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

function getNoteIdx(noteId){
    const notes = _loadFromStorage()
    return notes.findIdx(note => note.id === noteId)
}

function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function createNote(type, title, info, style){
    let notes = _loadFromStorage()
    let note={
        id: utilService.makeId(4),
        isPinned: false,
        isArchive: false,
        isRecycleBin: false,
        type,
        title,
        info,
        style
    }
    notes.unshift(note)
    _saveToStorage(notes)
}

function editNote(noteId ,key, value){
    const notes = _loadFromStorage()
    const noteIdx = getNoteIdx(noteId)
    notes[noteIdx][key] = value
    _saveToStorage(notes)
}

function onArchiveNote(noteId){
    editNote(noteId,'isArchive',true)
}
function onRecycleBinNote(noteId){
    editNote(noteId,'isRecycleBin',true)
}


//**** INTERNAL FUNCTIONS: ************************************//

function _createNotes() {
    return [
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
        }]
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(books) {
    storageService.saveToStorage(KEY, books)
}
