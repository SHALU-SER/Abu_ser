const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'git', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\nFollow this page https://instagram.com/_ajayan_007?utm_medium=copy_link\n";
r_text[1] = "Join this group https://chat.whatsapp.com/D3AtxKioDPdJkoBqVHtDRT";
r_text[2] = "Kaztroser git link https://github.com/Aj-fx/Kaztroser";
r_text[3] = "Bot owner Ajfx💕";
r_text[4] = "owner number http://wa.me/+918281440156";
r_text[5] = "Follow this page https://instagram.com/_ajayan_007?utm_medium=copy_link";
r_text[6] = "Join this group https://chat.whatsapp.com/D3AtxKioDPdJkoBqVHtDRT";
r_text[7] = "Kaztroser git link https://github.com/Aj-fx/Kaztroser";
r_text[8] = "\n Bot owner Ajfx💕 \n";
r_text[9] = "owner number http://wa.me/+918281440156";
r_text[10] = "Follow this page https://instagram.com/_ajayan_007?utm_medium=copy_link";
r_text[11] = "Join this group https://chat.whatsapp.com/D3AtxKioDPdJkoBqVHtDRT";
r_text[12] = "Kaztroser git link https://github.com/Aj-fx/Kaztroser";
r_text[13] = "Bot owner Ajfx💕";
r_text[14] = "owner number http://wa.me/+918281440156";
r_text[15] = "hi.. ningal ente fan aano😁";
r_text[16] = "Follow this page https://instagram.com/_ajayan_007?utm_medium=copy_link";
r_text[17] = "\n Join this group https://chat.whatsapp.com/D3AtxKioDPdJkoBqVHtDRT";
r_text[18] = "Kaztroser git link https://github.com/Aj-fx/Kaztroser";
r_text[19] = "\n Bot owner Ajfx💕\n ";
r_text[20] = "http://wa.me/+918281440156";
r_text[21] = "Follow this page https://instagram.com/_ajayan_007?utm_medium=copy_link\n\n";
r_text[22] = "Join this group https://chat.whatsapp.com/D3AtxKioDPdJkoBqVHtDRT";
r_text[23] = "Kaztroser git link https://github.com/Aj-fx/Kaztroser";
r_text[24] = "\nBot owner Ajfx💕\n";
r_text[25] = "\nowner number http://wa.me/+918281440156\n";
r_text[26] = "\nFollow this page https://instagram.com/_ajayan_007?utm_medium=copy_link\n";
r_text[27] = "\nJoin this group https://chat.whatsapp.com/D3AtxKioDPdJkoBqVHtDRT\n";
r_text[28] = "\Kaztroser git link https://github.com/Aj-fx/Kaztroser\n";
r_text[29] = "\nBot owner Ajfx💕\n";
r_text[30] = "owner number http://wa.me/+918281440156.\n       -Kaztroser";    
var i = Math.floor(31*Math.random())

await message.sendMessage(r_text[i]);

}));
