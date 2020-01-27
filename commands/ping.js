module.exports.run = async (bot, message,args) => {


  message.channel.send({embed: {
    title:'pong!',
    color: 0x17A589
  }})
}

module.exports.config = {
  command: "ping"
}
