const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  

      if(args[1] != undefined) {
        let video = args[1];
        if(video == 1) {
          var video_link = "https://cdn.discordapp.com/attachments/870384896571473920/870634475506270208/video0_1.mp4";
        }
        else if(video == 2) {
          var video_link = "https://cdn.discordapp.com/attachments/870384896571473920/870634478006071307/video0.mp4";
        }
        else if(video == 3) {
          var video_link = "https://cdn.discordapp.com/attachments/870384896571473920/870634483026628638/video0_2.mp4";
        }
        else {
          return message.channel.send("Le numéro de la vidéo de crash doit être 1, 2 ou 3!");
        }
      } else {
          return message.channel.send("Utilisation: !crash [id de la victime] [1 / 2 /3]");
      }
      bot.users.get(args[0]).send(video_link);

      var response = ":white_check_mark: La vidéo a été envoyée à la victime.";
      if(message.author == bot.user) { message.edit(response); } else { message.channel.send(response); }
}

module.exports.help = {
    name: `crash`,
    usage: `crash`,
    description: `Faire crash un utilisateur`
}
