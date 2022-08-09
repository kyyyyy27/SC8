const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

Hai 👋
𝐈𝐧𝐢 𝐥𝐢𝐬𝐭 𝐬𝐞𝐰𝐚 𝐤𝐚𝐦𝐢 𝐬𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐝𝐢𝐩𝐢𝐥𝐢𝐡

┏━━━•❅•°•❈〔 𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 〕
┣★ミ Premium : 4k
┣★ミ Sewabot + Permanen : 5k/2Grup
┣★ミ Sewabot + Permanen : 8k/4Grup
┣➲ Scan Barcod Qrisnya diatas🤗
┗━━━•❅•°•❈

┏━━━•❅•°•❈𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧 𝐌𝐞𝐦𝐛𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦
┣➲ Unlock Fitur Premium
┣➲ limit didapat tiap hari dengan claim
┣➲ bisa invite bot ke grup
┗━━━•❅•°•❈
Contact person Owner:
wa.me/6283830815715 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/8b56819006176f6cbbe22.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Saweria',
               phoneNumber: 'https://saweria.co/NakanooMikuu'
             }

           },
               {
             callButton: {
               displayText: 'Dana',
               phoneNumber: '085784914140'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['sewa']
handler.tags = ['donasi']
handler.command = /^sewa$/i

module.exports = handler
