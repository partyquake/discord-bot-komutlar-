// Embed'lı banner yapar.
// akinturtul.com

const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const akinbanner = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`
  .replace(' ', '+')

  
  const akinjs = new Discord.RichEmbed()
  .setTitle("Banner!")
  .setColor("#2ECC71")
  .setImage(akinbanner)
  .setFooter('Banner Oluşturuldu!')
  message.channel.send(akinjs)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0 // Sadece yönetici yetkisi olanların kullanması için 3 yapınız.
}

exports.help = {
    name: 'banner',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'banner <yazı>'
}
