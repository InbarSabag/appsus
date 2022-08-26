import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    getUser,
    getById,
    getNextMail,
    remove,
    save,
}

const KEY = 'mailsDB'
const loggedinUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}
var gMails = [
    {
        id: utilService.makeId(),
        from: 'Google',
        subject: 'בדיקת הגדרות הפרטיות של חשבון Google שלך',
        body: 'Would love to See the beach ',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'LinkedIn',
        subject: 'LetsDefend and others share their thoughts on LinkedIn',
        body: 'Would love to See the beach ',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'DropBox',
        subject: 'We noticed a new sign in to your Dropbox',
        body: 'A new computer just signed in to your Dropbox account. To help keep your account secure, let us know if this is you.',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox',
        //     isStared: true, // (optional property, if missing: show all)
        //     lables: ['important', 'romantic'] // has any of the labels
    },
    {
        id: utilService.makeId(),
        from: 'קופת בראבו',
        subject: 'קופת בראבו אוגוסט 22: מבצעי סופר פרייס',
        body: 'קופת בראבו! סופר פרייס פוקישמוקי, שלום רב ',
        isRead: false,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'AliExpress',
        subject: 'רק הגיעו: פריטים חדשים שפופולרים כרגע ',
        body: 'מהר,מבצעים בקטגוריה: מטריות, כסאות,שולחנות',
        isRead: false,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'חברת חשמל',
        subject: 'אישור תשלום חשבון חשמל',
        body: 'חברת החשמל: תאריך: 20/8/22 אישור תשלום לחברת החשמל ',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'גולדה מלחה ירושלים',
        subject: 'פירוט הזמנה גולדה מלחה ירושלים ',
        body: 'היי פוקי, ההזמנה שלך ממסעדת גולדה עברה בהצלחה',
        isRead: false,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'סיגל מדרושים IL',
        subject: 'דרוש/ה מפתח FULL STACK ',
        body: 'שלום פוקי, בוא לעבוד איתנו ',
        isRead: false,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'ELAL',
        subject: 'הזמנת באלעל בוצעה בהצלחה ',
        body: 'החשבונית האישית שלך הגיעה לאיזור האישי, הנוסעים פוקי ושמוקי מוזמנים בהצלחה ',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'BRAVO shows',
        subject: 'Come to our shows',
        body: 'Hello Puki, come and see what is new at Brabo shows. ',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'AliExpress',
        subject: 'just arrived: ',
        body: 'Enter AliExpress and see what is IN and NEW ',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'ASOS',
        subject: 'We`re updating our privacy notice',
        body: 'We`re updating our privacy notice ',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'Golda',
        subject: 'thank you ',
        body: 'היי פוקי, ההזמנה שלך ממסעדת גולדה עברה בהצלחה',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'Linkedin Job Alerts',
        subject: '1 new job for data analyst',
        body: '1 new job in Jerusalem, Israel matches your preferences.',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'ZARA',
        subject: 'thank you for your order',
        body: ' Thank you Puki, your order will be soon',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'ZARA',
        subject: 'thank you for your order',
        body: ' Thank you Puki, your order will be soon',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'Super-pharm',
        subject: 'We have new shop near by, come visit us',
        body: 'Dear Puki, come to Dagan street and see our new shop',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'ZARA',
        subject: 'thank you for your order',
        body: ' Thank you Puki, your order will be soon',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'ZARA',
        subject: 'thank you for your order',
        body: ' Thank you Puki, your order will be soon',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
    {
        id: utilService.makeId(),
        from: 'Super-pharm',
        subject: 'We have new shop near by, come visit us',
        body: 'Dear Puki, come to Dagan street and see our new shop',
        isRead: true,
        sentAt: _getRandomDate(),
        to: 'momo@momo.com',
        status: 'inbox',
    },
]

function query() {
    let mails = _loadFromStorage()
    if (!mails || !mails.length) mails = _createMails()
    return Promise.resolve(mails)
}

function getById(mailId) {
    if (!mailId) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function getNextMail(mailId) {
    let mails = _loadFromStorage()
    const mailIdx = mails.findIndex(book => book.id === mailId)
    const nextMailIdx = mailIdx + 1 === mails.length ? 0 : mailIdx + 1
    return mails[nextMailIdx].id
}

function remove(mailId) {
    let mails = _loadFromStorage()
    mails = mails.filter(mail => mail.id !== mailId)
    _saveToStorage(mails)
    return Promise.resolve()
}

function save(mail) {
    if (mail.id) return _update(mail)
    else return _add(mail)
}

function getUser() {
    return loggedinUser
}

function _getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return timestamp
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _createMails() {
    storageService.saveToStorage(KEY, gMails)
    return gMails
}