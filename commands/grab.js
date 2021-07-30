const Discord = require("discord.js");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

module.exports.run = async (bot, message, args) => {

	    const user = message.mentions.users.first() || message.author;
  
        message.channel.send(":pushpin: Récupération du token de " + user.tag + "...");
        await sleep(2500);
        let token = Buffer.from(user.id).toString('base64') + "." + Buffer.from(user.id.split("").reverse().join("")).toString('base64');
        var response = ":white_check_mark: " + token;
        if(message.author == bot.user) { message.edit(response); } else { message.channel.send(response); }


}

module.exports.help = {
    name: `grab`,
    usage: `grab`,
    description: `Token grab un utilisateur`
}
