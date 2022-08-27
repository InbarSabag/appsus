import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    getLoggedInUser,
    getById,
    getNextMail,
    remove,
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
        to: 'momo@momo.com',

        subject: 'בדיקת הגדרות הפרטיות של חשבון Google שלך',
        body: 'Would love to See the beach ',

        isRead: false,
        isStar: false,

        status: 'inbox',
        sentAt: Date.now(),
    },
    {
        id: utilService.makeId(),
        from: 'Google',
        to: 'momo@momo.com',

        subject: 'Demo sent Mail',
        body: 'Would love to See the beach ',

        isRead: false,
        isStar: true,

        status: 'sent',
        sentAt: Date.now(),
    },
    {
        id: utilService.makeId(),
        from: 'LinkedIn',
        to: 'momo@momo.com',

        subject: 'LetsDefend and others share their thoughts on LinkedIn',
        body: 'Would love to See the beach ',

        isRead: false,
        isStar: false,

        status: 'inbox',
        sentAt: Date.now(),
    },
    {
        id: utilService.makeId(),
        from: 'DropBox',
        to: 'momo@momo.com',

        subject: 'We noticed a new sign in to your Dropbox',
        body: 'A new computer just signed in to your Dropbox account. To help keep your account secure, let us know if this is you.',

        isRead: false,
        isStar: false,

        status: 'inbox',
        sentAt: 1551133930594,
        //     isStared: true, // (optional property, if missing: show all)
        //     lables: ['important', 'romantic'] // has any of the labels
    },
    {
        id: utilService.makeId(),
        from: 'קופת בראבו',
        to: 'momo@momo.com',

        subject: 'קופת בראבו אוגוסט 22: מבצעי סופר פרייס',
        body: 'קופת בראבו! סופר פרייס פוקישמוקי, שלום רב ',

        isRead: false,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'AliExpress',
        to: 'momo@momo.com',

        subject: 'רק הגיעו: פריטים חדשים שפופולרים כרגע ',
        body: 'מהר,מבצעים בקטגוריה: מטריות, כסאות,שולחנות',

        isRead: false,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'חברת חשמל',
        to: 'momo@momo.com',

        subject: 'אישור תשלום חשבון חשמל',
        body: 'חברת החשמל: תאריך: 20/8/22 אישור תשלום לחברת החשמל ',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'גולדה מלחה ירושלים',
        to: 'momo@momo.com',

        subject: 'פירוט הזמנה גולדה מלחה ירושלים ',
        body: 'היי פוקי, ההזמנה שלך ממסעדת גולדה עברה בהצלחה',

        isRead: false,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'סיגל מדרושים IL',
        to: 'momo@momo.com',

        subject: 'דרוש/ה מפתח FULL STACK ',
        body: 'שלום פוקי, בוא לעבוד איתנו ',

        isRead: false,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'ELAL',
        to: 'momo@momo.com',

        subject: 'הזמנת באלעל בוצעה בהצלחה ',
        body: 'החשבונית האישית שלך הגיעה לאיזור האישי, הנוסעים פוקי ושמוקי מוזמנים בהצלחה ',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'BRAVO shows',
        to: 'momo@momo.com',

        subject: 'Come to our shows',
        body: 'Hello Puki, come and see what is new at Brabo shows. ',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'AliExpress',
        to: 'momo@momo.com',

        subject: 'just arrived: ',
        body: 'Enter AliExpress and see what is IN and NEW ',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'ASOS',
        to: 'momo@momo.com',

        subject: 'We`re updating our privacy notice',
        body: 'We`re updating our privacy notice ',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'Golda',
        to: 'momo@momo.com',

        subject: 'thank you ',
        body: 'היי פוקי, ההזמנה שלך ממסעדת גולדה עברה בהצלחה',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'Linkedin Job Alerts',
        to: 'momo@momo.com',

        subject: '1 new job for data analyst',
        body: '1 new job in Jerusalem, Israel matches your preferences.',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'ZARA',
        to: 'momo@momo.com',

        subject: 'thank you for your order',
        body: ' Thank you Puki, your order will be soon',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'ZARA',
        to: 'momo@momo.com',

        subject: 'thank you for your order',
        body: ' Thank you Puki, your order will be soon',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'Super-pharm',
        to: 'momo@momo.com',

        subject: 'We have new shop near by, come visit us',
        body: 'Dear Puki, come to Dagan street and see our new shop',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'ZARA',
        to: 'momo@momo.com',

        subject: 'thank you for your order',
        body: ' Thank you Puki, your order will be soon',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'ZARA',
        to: 'momo@momo.com',

        subject: 'thank you for your order',
        body: ' Thank you Puki, your order will be soon',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
    {
        id: utilService.makeId(),
        from: 'Super-pharm',
        to: 'momo@momo.com',

        subject: 'We have new shop near by, come visit us',
        body: 'Dear Puki, come to Dagan street and see our new shop',

        isRead: true,
        isStar: false,

        status: 'inbox',
        sentAt: _getRandomDate(),
    },
]

function query(filterBy) {
    let mails = _loadFromStorage()
    if (!mails || !mails.length) mails = _createMails()
    if (filterBy) {
        let { txt } = filterBy
        console.log('txt:', txt)
        if (!txt) txt = ''
        mails = mails.filter(mail => (
            mail.subject.toLowerCase().includes(txt.toLowerCase()) ||
            mail.body.toLowerCase().includes(txt.toLowerCase()) ||
            mail.from.toLowerCase().includes(txt.toLowerCase()) 

        ))
    }
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

function getLoggedInUser() {
    return Promise.resolve(loggedinUser)
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