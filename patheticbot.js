var Discord = require('discord.js');
var auth = require('./auth.json');



// Initialize Discord Bot
const bot = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ]
});
bot.on('ready', () => {
    console.log('Connected')
    console.log('Logged in as: ');
    console.log(bot.user.username + ' - (' + bot.user.id + ')');
});

bot.on('messageCreate', (message) => {        
    if (!message.author.bot) {
        var re = /(?:^|\W)pathetic(?:$|\W)/gi;
        var match = message.content.match(re);
        if (match && match[0].length) { // Check for a match
            message.channel.send({
                files: ['./pathetic.jpg']
            });
        }
    }
});

bot.login(auth.token);
