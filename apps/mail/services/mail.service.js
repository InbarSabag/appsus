import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
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
        from: 'DropBox',
        subject: 'We noticed a new sign in to your Dropbox',
        body: 'A new computer just signed in to your Dropbox account. To help keep your account secure, let us know if this is you.',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox/sent/trash/draft',
        //     isStared: true, // (optional property, if missing: show all)
        //     lables: ['important', 'romantic'] // has any of the labels
    },
    {
        id: utilService.makeId(),
        from: 'Google',
        subject: 'בדיקת הגדרות הפרטיות של חשבון Google שלך',
        body: 'Would love to See the beach ',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        status: 'inbox/sent/trash/draft',
    },
    {
        id: utilService.makeId(),
        from: 'LinkedIn',
        subject: 'LetsDefend and others share their thoughts on LinkedIn',
        body: 'Would love to See the beach ',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        status: 'inbox/sent/trash/draft',
    },

]

function query() {
    let mails = _loadFromStorage()
    if (!mails || !mails.length) mails = _createMails()
    return Promise.resolve(mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _createMails() {
    storageService.saveToStorage(KEY, gMails)
    return gMails
}