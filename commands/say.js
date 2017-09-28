const packageJSON = require('../package.json')
var config = require('../config.json')

function handler (bot, msg, args) {
  bot.createMessage(msg.channel.id, {
    embed: {
      description: args,
      author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL
      },
      color: 0x008000,
      footer: {
        text: config.name + ' ' + packageJSON.version
      }
    }
  })
}

module.exports = function (moduleHolder) {
  moduleHolder['say'] = handler
}
