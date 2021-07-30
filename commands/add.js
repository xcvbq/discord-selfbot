const fs = require("fs");

module.exports.run = async (bot, message, args) => {

	    const user = message.mentions.users.first() || message.author;
  
  		let rawdata = fs.readFileSync('allowed.json');
  		let allowed = JSON.parse(rawdata);
  		allowed.push(user.id);
  		let allowed_json = JSON.stringify(allowed);
  		fs.writeFileSync('allowed.json', allowed_json);
		var response = ":white_check_mark: " + user.tag + " a été ajouté à la liste des utilisateurs autorisés à utilser le Selfbot!";
        if(message.author == bot.user) { message.edit(response); } else { message.channel.send(response); }


}

module.exports.help = {
    name: `add`,
    usage: `add`,
    description: `Ajouter un utilisateur autorisé à utiliser le selfbot`
}
