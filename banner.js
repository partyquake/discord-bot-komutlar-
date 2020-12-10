const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
 name: 'banner',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'banner <yazı>',

  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const akinbanner = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`
  .replace(' ', '+')

  
  const akinjs = new Discord.MessageEmbed()
            .setTitle("Banner!")
          .setColor("#2ECC71")
        .setImage(akinbanner)
      .setFooter('Banner Oluşturuldu!')
     message.channel.send(akinjs)
   }

}
