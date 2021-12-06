const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'sticker', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\njoin this bot group https://chat.whatsapp.com/JM2qHJm8zS95itgHXjd88R\n";
r_text[1] = "Kaztroser owner aj fx";
r_text[2] = "join this bot group https://chat.whatsapp.com/JM2qHJm8zS95itgHXjd88R";
r_text[3] = "njan killadi alle😂.\n       -Aj fx";    
var i = Math.floor(4*Math.random())

await message.sendMessage(r_text[i]);

}));
