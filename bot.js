var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug'; // LOGGER LEVEL

// Initialize Discord Bot
const bot = new Discord.Client();
bot.on('ready', () => {
    logger.info('Connected')
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', (message) => {        
    
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
