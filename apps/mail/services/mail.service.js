import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

const mailService = {
    query,
}

const KEY = 'mailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

var gMails = [
    {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
    },
    {
        id: utilService.makeId(),
        subject: 'Miss Him!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
    },
    {
        id: utilService.makeId(),
        subject: 'Miss Them!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
    },
    {
        id: utilService.makeId(),
        subject: 'Miss The All World!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
    },
]


// The emailService query function should get a criteria object, here is an idea:
const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
}

function query() { // TODO: add filterBy
    const mails = _loadFromStorage()
    if (!mails || !mails.length) _createMails()
    return Promise.resolve(filteredMails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _createMails() {
    storageService.saveToStorage(KEY, gMails)
    return gMails
}
