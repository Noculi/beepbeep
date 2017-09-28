const copypastaJSON = require('../commandDeps/copypasta.json')

function handler (bot, msg, args) {
  if (copypastaJSON.hasOwnProperty(args)) {
    bot.createMessage(msg.channel.id, copypastaJSON[args])
  } else {
    bot.createMessage(msg.channel.id, ':loudspeaker: KRUSTY KRAB IS UNFAIR! :loudspeaker: MR. KRABS IS IN THERE! :loudspeaker: STANDING AT THE CONCESSION! :loudspeaker: PLOTTING HIS OPPRESSION! :loudspeaker: (I don' + `'` + 't know what `' + args + '` is.)')
  }
}

module.exports = function (moduleHolder) {
  moduleHolder['copypasta'] = handler
}
