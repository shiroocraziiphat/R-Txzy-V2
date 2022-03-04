// RECODE ALYAAXZY

let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.getName(m.sender)
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.send2ButtonLoc(m.chat, await(await fetch(thumbfoto)).buffer(), `
*Hi ${name}, ${ucapan()}*
Saya adalah Bot  LynXzy salah satu bot WhatsApp.

*Harap untuk tidak menelpon, meminta save,mengirim virus atau spam dalam penggunaan bot*
Silahkan baca rules dan mematuhi rules.
Terimakasih

Jika ada kendala silahkan hubungi owner.
`.trim(), watermark, 'Menu', '.menu', 'Sewa', '.sewa')
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari🌃"
    if (time >= 4) { 
        res = "Selamat pagi🌄"
    }
    if (time > 10) {
        res = "Selamat siang🏞️"
    }
    if (time >= 15) {
        res = "Selamat sore🌅"
    }
    if (time >= 18) {
        res = "Selamat malam🌌"
    }
    return res
}
