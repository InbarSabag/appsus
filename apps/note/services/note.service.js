import { storageService } from '../../../services/storage.service.js'
import { utilService } from "../../../services/util.service.js"

export const noteService = {
    query,
    getById,
    remove,
    createNote,
    getNoteIdx,
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

function createNote(type, title, info = '' , style =''){
    let notes = _loadFromStorage()
    let note={
        id: utilService.makeId(4),
        isPinned: false,
        // isArchive: false,
        // isRecycleBin: false,
        type,
        title,
        info,
        style
    }
    notes.unshift(note)
    _saveToStorage(notes)
    return Promise.resolve(note.id)
}

// function editNote(noteId ,key, value){
//     const notes = _loadFromStorage()
//     const noteIdx = getNoteIdx(noteId)
//     notes[noteIdx][key] = value
//     _saveToStorage(notes)
//     return Promise.resolve()
// }

// function archiveNote(noteId){
//     editNote(noteId,'isArchive',true)
//     // return Promise.resolve()
// }

// function recycleBinNote(noteId){
//     editNote(noteId,'isRecycleBin',true)
//     // return Promise.resolve()
// }

//**** INTERNAL FUNCTIONS: ************************************//

function _createNotes() {
    _saveToStorage(gNotes)
    return gNotes
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}



