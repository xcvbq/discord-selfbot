const Discord = require("discord.js");
const readline = require('readline')
const { magentaBright: main, yellow, white, red } = require('chalk')
module.exports.run = async (bot, message, args) => {



const a = []

bot.users.forEach((user, i) => {
  a.push(user)
});


if(args[0] == undefined) { response = ":x: Veuillez spécifier un message!"; if(message.author == bot.user) { message.edit(response); } else { message.channel.send(response); } return;  }

response = ":white_check_mark: Démarrage du DMall!";
if(message.author == bot.user) { message.edit(response); } else { message.channel.send(response); }


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


const amount = bot.users.size;
go()
async function go() {
  console.clear();
  let count = 0;
  bot.users.forEach(async(usez, i) => {
    console.log("etape 1");
    await sleep(2000)
    const user = usez
    if (usez.id === bot.user.id) return;
    user.send(args[0]).then(() => {
      count++
      console.log("Message envoyé à " + usez.username);
    }).catch(() => {
      console.log("Erreur");
    })
  })

}

}

module.exports.help = {
    name: `dmall`,
    usage: `dmall`,
    description: `Envoyer un message privé à tous tes contacts.`
}
