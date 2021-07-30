module.exports.run = async (bot, message, args) => {



    var response = "Pong!";
	if(message.author == bot.user) { message.edit(response); } else { message.channel.send(response); }

}

//Help object; Required for command handler and help command
module.exports.help = {
    name: `ping`,
    usage: `ping`,
    description: `Ping pong`
}
