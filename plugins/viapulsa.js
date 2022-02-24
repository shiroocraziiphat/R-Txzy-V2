let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Digi
╠➥ 60149431385
╠➥Chat Owner terlebih
║  dahulu ketik .owner
║
╠═ ©LanXzy & LynXzy
╠═ Scrip original by Lan Official
╠═〘 LynXzy 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viadigi']
handler.tags = ['info']
handler.command = /^viadigi$/i

module.exports = handler
