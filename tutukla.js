//Etkiketlediğiniz Kişiyi Tutuklarsınız. (Eğlence Komutudur.)
//akinturtul.com

const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['628955894809624586', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media1.giphy.com/media/26gJzpMDnTH6KWM2Q/giphy.gif",
    "https://media1.tenor.com/images/365c722ebc5010be2891b6fb585f9123/tenor.gif",
    "https://media4.giphy.com/media/l49JHQGBEEnhf3MME/giphy.gif",
    "https://media4.giphy.com/media/JilXQQFlkZ5ZK/giphy.gif",
    "https://media1.tenor.com/images/0dffee8c0d349bbec3a71d823f11a91d/tenor.gif",
    "https://i.gifer.com/Plc.gif",
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) {
    const akinjs = new Discord.RichEmbed()
      .setDescription(`\`${message.author.username}#${message.author.discriminator}\` birini etiketlemelisin.`);
    message.channel.send({ embed: akinjs });
    return;
  }
  if (
    !message.mentions.members.first().user.username ===
    message.isMentioned(message.author)
  ) {
    const akinjs1 = new Discord.RichEmbed()
      .setDescription(
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` , \`${message.author.username}#${message.author.discriminator}\` tarafından tutuklandı.`
      )
      .setImage(resimler);
    message.channel.send({ embed: akinjs1 });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const akinjs1 = new Discord.RichEmbed()
      .setTitle(`Kendini tutuklayacak kadar suçlu musun ? 😟`)
      .setImage(resimler);
    message.channel.send({ embed: akinjs1 });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tutukla'],
  permLevel: 0 //Sadece Yöneticiler İçin 3 Yazınız. 
};
exports.help = {
  name: "tutukla",
  description: "istediğiniz kişiyi tutuklar.",
  usage: "tutukla [isim]"
};
