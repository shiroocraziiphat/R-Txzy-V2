let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

• Allah swt
• My family
• Nurutomo
• Xteam
• Hyzer.(Owner)
• Shiro-Botz(Bot)
• Exc(membantu)
• Zeks
• Penyedia Layanan API
• Orang-orang yang Berdonasi
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
