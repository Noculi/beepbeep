const packageJSON = require('../package.json')
var config = require('../config.json')

function handler (bot, msg, args) {
  if (msg.author.id === config.ownerID) {
    bot.createMessage(msg.channel.id, {
      embed: {
        title: 'Hey!',
        description: "I'm reloading, don't worry!",
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
    var spawn = require('child_process').spawn
    var child = spawn('node', ['index.js'], {
      detached: true,
      stdio: [ 'ignore', 'ignore', 'ignore' ]
    })
    child.unref()
    process.exit(0)
  }
}

module.exports = function (moduleHolder) {
  moduleHolder['reload'] = handler
}
