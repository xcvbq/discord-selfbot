const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	    const user = message.mentions.users.first() || message.author;
  
        let embed = new Discord.RichEmbed()
          .setAuthor(user.tag)
          .setThumbnail(user.avatarURL)
          .setDescription("```Infos d'utilisateur```", false)
          .setColor("#64FF00", false)
          .addField("**Nom d'utilisateur:**", "```" + user.tag + "```" , false)
          .addField("**ID:**", "```" + user.id + "```", false)
          .addField("**Crée le:**", "```" + user.createdAt + "```", false)
          .addField("**Status:**", "```" + user.presence.status + "```" , false)
          .addField("**En jeu:**", user.presence.game ? user.presence.game : "```" + 'aucun' + "```" , false)
        var response = embed;
        if(message.author == bot.user) { message.edit(response); } else { message.channel.send(response); }


}

module.exports.help = {
    name: `info`,
    usage: `info`,
    description: `Informations sur un utilisateur`
}
