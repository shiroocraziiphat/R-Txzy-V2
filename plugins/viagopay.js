let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Umobile
╠➥ *60189830350*
║- Chat Owner Terlebebih
║ Dahulu ketik .owner
║
╠═ ©LanXzy & LynXzy
╠═ Scrip original by Lan Official
╠═〘 LynXzy 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viaumobile']
handler.tags = ['info']
handler.command = /^viaumobile$/i

module.exports = handler
