const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919072790587@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        
const array = ['name entha','Helo','King','Kooi','Tuttu','Azaru','Ramos','Tentacion','baby','Loveee','Neymar','umma','Music','Kurup','Friend','Rose','aara','Alone','ayilla','bie','Chiri','colony','enth','entha','Fuck','Goal','Hambada','Kanja','Killedi','DD','kuthirappavan','mathi','Meeting','mier','moonji','Name','Oh no','pever','Potta','Serious','Soldier','Sry','Subscribe','thottu','Va','Vada','vimanam','sorry','nanban','Lala','Smile','ghost','La be','Sed','Uff','Legend','music','Fek','Psycho','Town','Pwoli','Uyir','Malang','Bad','Boss','Thamasha','big fan','charlie','gd n8','kar98','love u','Love u','Endi','endi','noob','Noob','Poweresh','Perfect ok','perfect ok','power','saji','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Hi','Hlo','Poda','nirtheda','Aarulle','Cr7 back','Portugal','ennitt','Boss','Haters','ayn','Kgf','Akshay uyir','sed bgm','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','R yyi padicho','Myre','myre','Oompi','oompi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','Sneham','pm','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','lover','Lover','nanayikoode','Nanayikoode','die','hate','Hate','Lamiya engineering','lamiya engineering','nallath','Nallath','Neymer','neymer','Njr','njr','patti','Patti','poora','Poora','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Pinky','Caption','caption','onn poyi','Onn poyi','problem','Problem','Ameer','ameer','Suhail','Mathy','BGM','Die','Jd','Loveu','Veeran','Waiting','ano','ara','Ara','alone','bad boy','brokenlove','care','chunke','comedy','devadha','ekk','fd','free','gdmng','gdngt','group','ha','i am back','ijathi','jd','kadhal','kerivaa','kiss','kukku','line','lucifer','machan','Chetta','Per','massbgm','Mass','matam','may i','mindathe','my area','mylove','njn','padakam','polika','racal','rasool','rashmika','return','sneham','sulthan','thayirmulak','vada','wow','Thalapathy','Pikachu','Aliya','Leopucha','Poompatta gunda','Bgm','En nenjil','evde','Frnd','Game','Hy','Hoi','Yaar','Kadhali','king','Paavam','Pewer','pewer','Power','Pranayam','sed','Umma','Vava','Kunju','Sis','Bairavaa','bgm','Love tune','Mohanlal','Singapenne','Single','Jocker','1 vs 1 vada','1','alive','Aliyo','Ardra','Area','Ayn','bot','Chathi','Chunk','Chunks','cr7','Cry','Dai','Dora','Entry bgm','Gd mng','Gd ngt','Hloo','Kanjan','Ikkachi','Kanjav','Kevin','Kundan','kundan','manath','messi','My love','Nalla kutty','Nanban','Nanni','Nishal','Njn vera','Oh','Ok','Over','Pala shaji','Pever','Pinnallah','Poli','Potte','Power varatte','Re entry','Sad','sad','T','Sahva','Scene','sed','Saji','Seth po','sis','Supper','Vidhi','Baby','Music pranthan','Kenzo','kenzo','Kenzoo','Ashkar','per','Hbd','Mad','Blackzue','Nallakutti','Enthada','Akhil','Love','Fsq','Nanbiye','Iblees','Rashmika','Kutty','Arakkal iblees','Althaf','Sayip','thamasha','Edi','Muth','Muthe','Omb','2','Mood','Ok bye','Eda','Track maat','Chaya kudicho','photo','Set','Poote','Chathy','Aara','ayye','Ayyo','Bass bgm','Bgm id','Bhasi','Biscket','Chirikano','Chunnk uyr','ok','Umbi','da','Csk','ee','Ellarum ede','Etha cheyya','Entha','Fan','ff','grp','Kanapi','Kanaran','Kemam','kk','left','Lo','Loo','Lub u','muthe','My god','oombi','over','Paat','Panni','Podai','Pooda','Pora','Poyeda','Rasheed','Sed aayi','Sed tune','sed','Super','thayoli','Thug','Vaa','welcome','Wait','ambada','Arulle','ba ba','bass','biscat','Da','Ellam sheriyaavum','Enthada','evade','gd mrng','hbd','helet','hlo','kollaam','kozhi','love','minimum','morning','myre','Paavam','pever','power','pubg','rasheedka','rasheedkka','sad','shazz','Shahid','single','snake','sugano','thug life','Titanic','touch it','trance','wow','zayina','kali']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919072790587@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Amalserv2/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('Amalserv2/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['Hi','pro','coming','alive','list','go','menu','koii','update','wait','Mrng','Amalser','like','bad','amal','nice','link','Farhan','Hii','ok','myr','set','ayo','i want','help','working','life','Da','fix','Amalsir','promiss','sed','old','fek','Kozhi','ee','Single','one side','muthe','Aliya','audio','oh','something','Myre','caption','di','love','you','update now','super','iwa','erorr','status','Dii','feel','kuppy','bst','maduthu','niyo','what','but y','chakare','mone','uyir','friends','owner','shit','fan','fans','Broken','E bullet','Hello','over','ayikotte','kollam','muthe','propose','rain','kozhi','Adithhari']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./Amalserv2/' + a + '.mp3'), MessageType.audio,{ mimetype: Mimetype.mp4Audio,duration: Config.SAID, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/vava.png')}}}});
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '919895828468@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Amalser/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Amalser','chaya','escape','truth','hm','pottan','oh','nokk','nude','oo','kali','Remove','bot','lost','copy','Da','come','sex','help','sorry','podi','nee','done','kalam','Di','Dey','oho','Welcome','Nanba','ee','Hello','para','kindi','list','check','podey','odiko','save','Hii','oii','sad','sed','thenga','bad','run','remove','love','kick','enth','alive','amal','menu','ella','unmute','mute']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./Amalser/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
Asena.addCommand({on: 'text', fromMe: false,onlyGroup: true}, (async (message, match) => {

    if(Config.THERI_KICK){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
        var us = await checkUsAdmin(message)
        var im = await checkImAdmin(message)
        if (!im) return;
        if (us) return;
await message.client.sendMessage(message.jid,Lang.KICK, MessageType.text, {quoted: message.data });  
await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
 Asena.addCommand({on: 'text', fromMe: false, onlyPm: true}, (async (message, match) => {

    if(Config.PLKS){
const array = afnp 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){          
await message.client.sendMessage(message.jid,Lang.KICK2, MessageType.text, {quoted: message.data });               
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
