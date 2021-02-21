
const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`

 > ➥ \`.gel <@etiket> \` -> yanınıza gelmenizi isteyen kişiyi etiketle .

 > ➥ \`.git <@etiket> \` -> yanına gitmek istediğin kişiyi etiketle.
 
 > ➥ \`.afk / afk <sebep> \` -> afk olduğunuzu belirtme.
 
 > ➥ \`.aşk <@etiket> \` -> aşkını söyler.
 
 > ➥ \`.aşkölçer <@etiket> \` -> aşkını ölçer.
 
 > ➥ \`.bitcoin \` -> bitcoin borsasının değerlerini söyler.
 
 > ➥ \`.canlıdestek \` -> 📞canlı-destek sağlar.
 
 > ➥ \`.havadurumu [şehir] \` -> Belirtiğiniz şehrin havadurumu söyler.
 
 > ➥ \`.csgo \` -> csgo bilgilerini gösterir.
 
 > ➥ \`.kartopu <@etiket> \`-> Kime kartopu atmak isterin.
  
 > ➥ \`.korona <ülke> \` -> Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz.
 
 > ➥ \`.saat \` -> Saatı gösterir.
 
 > ➥ \`.sigarayak \` -> sigara içersiniz.
 
 > ➥ \`.tkm <taş,kağıt,makas> \` -> Taş kağıt makas oyununu oynar.
 
 > ➥ \`.yapımcım\` -> yapımcım.
 
 > ➥ \`.yazı-tura\` ->  Yazı Tura Oynamanıza Yarar.
  
 > ➥ \`.yılbaşı\` -> Yılbaşına ne kadar kaldığını gösterir.
 
 > ➥ \`.çıkma-teklifi-et <@etiket> \` -> Çıkma teklifi.
 
 > ➥ \`.sunucuresmi \` -> 𝐀𝐬𝐬𝐚𝐬𝐬𝐢𝐧'𝐬 𝐂𝐫𝐞𝐞𝐝 𝐅𝐚𝐦𝐢𝐥𝐲 sunucu resmi.
 
 > ➥ \`.sikayet <Şikayet> \` -> Şikayet de bulunursunuz.\``)
 .setFooter(`⚔ 𝗔𝘀𝘀𝗮𝘀𝗶𝗻'𝘀 𝗰𝗿𝗲𝗲𝗱 Sunar .`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/801730953813688340/811568133273157692/assss.gif")
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',   
  description: '',
  usage: ''
};

