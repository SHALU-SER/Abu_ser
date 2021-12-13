const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'alive', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\n🥶❄️🎅🏻☃️\n";
r_text[1] = "🥶❄️❄️☃️🎅🏻🎅🏻";
r_text[2] = "¨¨¨¨¨¨¨¨¨★
¨¨¨¨¨¨¨¨¨**
¨¨¨¨¨¨¨¨¨*o*
¨¨¨¨¨¨¨¨*♥*o*
¨¨¨¨¨¨¨***o***
¨¨¨¨¨¨**o**♥*o*
¨¨¨¨¨**♥**o**o**
¨¨¨¨**o**♥***♥*o*
¨¨¨*****♥*o**o****
¨¨**♥**o*****o**♥**
¨******o*****♥**o***
****o***♥**o***o***♥ *
¨¨¨¨¨____! _! ____
¨¨¨¨¨_________/";
r_text[3] = "_____________*_______________
____________*o*______________
___________*o*o*_____________
__________*o*o*o*____________
_________*o*o*o*o*___________
________*o*o*o*o*o*__________
_______*o*HO~HO~o*_________
______*o*o*o*o*o*o*o*________
_____*o*o*o*o*o*o*o*o*_______
________*o*o*o*o*o*__________
_______*o*o*o*o*o*o*_________
______*o*o*o*o*o*o*o*________
_____*o*~HO~HO~HO*o*_______
____*o*o*o*o*o*o*o*o*o*______
________*o*o*o*o*o*__________
_______*o*o*o*o*o*o*_________
______*o***MERRY***o*________
_____*o* CHRISTMAS *o*_______
____*o*o*o*o & o*o*o*o*______
___*o*o*o* HAPPY *o*o*o*_____
__*o*o*o*o* NEW *o*o*o*o**___
_*o*o*o* YEAR 2021 *o*o*o*___";
r_text[4] = "☾☆★¸¸.•*¨*••.¸¸☾☆★☾
(¯`´♥.¸____ღ☆ღ____ ¸.♥´´¯)
.........................
☆♥☆..✰Merry Christmas✰..☆♥☆
.........................
(_¸.♥´ ¯¯¯¯ღ☆ღ¯¯¯¯ `´♥.¸_)
☾☆★¸¸.•*¨*••.¸¸☾☆★☾";
r_text[5] = "M Є Ʀ Ʀ Ƴ Ƈ Ӈ Ʀ Ɩ Ƨ Ƭ M ƛ Ƨ 🌟
🎄 ⛄ 🎁 ❄ 🎅 👼
┊　　┊　　┊　　┊
┊　　┊　　┊　　★
┊　　┊　　☆
┊　　★
☆";
r_text[6] = "________(¯`•.¸¸.¤*¨¨*¤.¸.¤*¨¨*¤.¸¸.•´¯) ___ ________
¤¸.¤*¨¨*¤.¸¸.•´¯).HAPPY.CHRISTMAS.(¯`•.¸¸ .¤*¨¨*¤ .¸.¤
_________(¯`•.¸¸.¤*¨¨*¤.¸.¤*¨¨*¤.¸¸.•´¯) ____________";
r_text[7] = "❊..(
✿.(,)
❊|::::|.☆¸.¤ª“˜¨
✿|::::|)/¸.¤ª“˜¨˜“¨
❊|::¸.¤ª“˜¨¨˜“¨
✿%¤ª“˜¨¨
❊#ª“˜¨
MЄƦƦƳ ƇӇƦƖƧƬMƛƧ";
r_text[8] = "\n ☆
▄▀☆
▄▀▄☆
▄▀▄▀☆
▄▀▄▀▄☆
▄▀▄▀▄▀☆☆☆☆☆☆☆☆
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀☆
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄☆
▄▀▄▀▄▀▄▀▄▀▄▀▄▀☆
▄▀▄▀▄▀▄▀▄▀▄▀▄☆
▄▀▄▀▄▀▄▀▄▀▄▀☆
MЄƦƦƳ ƇӇƦƖƧƬMƛƧ
▄▀▄▀▄▀▄▀▄▀▄▀☆
▄▀▄▀▄▀▄▀▄▀▄▀▄☆
▄▀▄▀▄▀▄▀▄▀▄▀▄▀☆
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄☆
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀☆
▄▀▄▀▄▀☆ ☆☆☆☆☆☆
▄▀▄▀▄☆
▄▀▄▀☆
▄▀▄☆
▄▀☆
▄ ☆
☆\n";
r_text[9] = "🌲🎅🏻 നėȑȑყ ᑤիȑîṡ𝔱ʍạṡ ⛄🌲";
r_text[10] = "✨〰️ നėȑȑყ ᑤիȑîṡ𝔱ʍạṡ 〰️✨";
r_text[11] = "do you know who is my creator..? its none other than afnanplk";
r_text[12] = "രണ്ട് ബക്കറ്റ് നിറയെ വെള്ളമുണ്ട്. അതിൽ ഒരു ബക്കറ്റിനു ദ്വാരമുള്ളതാണ്. എന്നാൽ ദ്വാരമുള്ള ബക്കറ്റിൽ നിന്നും വെള്ളം പോകുന്നില്ല. കാരണം എന്താണ്? para ninak vivaram indo nokkatte";
r_text[13] = ".song adich thangalude fav song name para Shazz ath download aakki theraam";
r_text[14] = "ഹിന്ദിക്കാർ പോക്കറ്റിലും മലയാളികൾ അടുപ്പിലും വെക്കുന്ന സാധനം എന്ത്..?  ennallum ath enthaayikkum...🤔🤔";
r_text[15] = "hi.. ningal ente fan aano..?";
r_text[16] = "ivide aaro ente per villichallo.. nee aano..?";
r_text[17] = "\n hey mishter ningalude per entha..?";
r_text[18] = "enikk njan und Shazz uyir";
r_text[19] = "\n eda sathyam para nee ente fan alle..\n ";
r_text[20] = "The coefficient's of linear expansions is the position of Haemoglobin in the atmosphere. But Why? Full Many gem of purests serene lay underneath the unfathomed ocean's unblossomeds ! But why? But why";
r_text[21] = "Kochi pazhaya kochiyellennariyam… pakshe Shazz pazhaya Shazz thanneya...😎\n\n";
r_text[22] = "Kaanaan oru look illanney ullu… bhayankara budhiya\n\n ninnak allatto enik Shazz";
r_text[23] = "Ithalla ithinapparam chaadi kadannavananee K.K. Shazz";
r_text[24] = "\nVarrierey… Enthado njan inganey aayi poyathu\n";
r_text[25] = "\nPempillerey roattikoodey nadakkaan nee sammathikkilla, alley?... Da, neeyaanee alavaladi Shaji alley\n";
r_text[26] = "\nAthu enne uddheshichanu… enne thanney uddheshichanu… enne maatram uddheshichanu\n";
r_text[27] = "\nBeedi undo saghave, oru theepetti edukkan\n";
r_text[28] = "\nIppo sheriyakithara… ippo sheriyakithara…\n";
r_text[29] = "\nEnne kollathirikkan pattuo? illa alley?\n";
r_text[30] = "motivate cheyaan aarkum kayyum ath cheyth kaanikkaaana paad.\n       -Shazz";    
var i = Math.floor(31*Math.random())

await message.sendMessage(r_text[i]);

}));
