const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'xmas', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\n🌲🎅🏻 നėȑȑყ ᑤիȑîṡ𝔱ʍạṡ ⛄🌲\n";
r_text[1] = "✨〰️ നėȑȑყ ᑤիȑîṡ𝔱ʍạṡ 〰️✨";
r_text[2] = "🎅 ꗟȃກƫȃ îຮ Ͼõṁîກɡ ! 😍🎁🎁";
r_text[3] = "★*🌙☆* 🦌🛷 Ṃϱ໗໗у ϾԦᎥ໗ຮŁᘻลຮ";
r_text[4] = "☃️❄️Hᴀᴘᴘʏ ᴄʜʀɪsᴛᴍᴀs❄️☃️";
r_text[5] = "🎅🏻🥶ℍ𝕒𝕡𝕡𝕪 𝕔𝕙𝕣𝕚𝕤𝕥𝕞𝕒𝕤🥶🎅🏻.\n       -Ajfx💕";    
var i = Math.floor(6*Math.random())

await message.sendMessage(r_text[i]);

}));
