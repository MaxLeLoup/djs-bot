const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants.js");

module.exports.run = (bot, message, args) => {
  message.channel.send('Teste !')
};

module.exports.help = MESSAGES.COMMANDS.TEST.TEST;