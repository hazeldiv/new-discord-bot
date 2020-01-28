var Discord = require ('discord.js');
var bot = new Discord.Client();
var fs = require('fs');

var userData = JSON.parse(fs.readFileSync('storage/userData.json', 'utf8'));
var commandList = fs.readFileSync('storage/commands.txt', 'utf8');
bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if(err) console.error(err);

  var jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.length <= 0) { return console.log('no commands found..')}
  else { console.log(jsfiles.length + ' command found.')}

  jsfiles.forEach((f, i) => {
    var cmds = require(`./commands/${f}`);
    console.log(`command ${f} loading...`);
    bot.commands.set(cmds.config.command, cmds);
  })
})

function userInfo(user) {
  var finalString = ' ';
  var userCreated = user.created = user.createdAt.toString().split(' ');

  finalString += '**' + user.username + '**, dengan **ID** = **' + user.id + '**'
  finalString += ' dan telah dibuat sejak ' + '**' + userCreated[1] + ', ' + userCreated[2] + ' ' + userCreated[3] + '.**'

  return finalString;
}


bot.on('message', message => {

    let sender = message.author;
    let prefix = '!'
    let msg = message.content.toUpperCase();
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (!message.content.startsWith(prefix)) return;

    var cmd = bot.commands.get(cont[0])
    if (cmd) cmd.run(bot, message, args);




    if (sender.id === '402528814548254720') {
      return;
    }
    if (sender.id === '172002275412279296') {
      return;
    }
    if (sender.id === '616726438627901519') {
      return;
    }
    if (sender.id === '432533456807919639') {
      return;
    }
    if (sender.id === '185476724627210241') {
      return;
    }
    if (sender.id === '276060004262477825') {
      return;
    }
    if (sender.id === '478567255198662656') {
      return;
    }
    if (sender.id === '189702078958927872') {
      return;
    }
    if (sender.id === '159985870458322944') {
      return;
    }
    if (sender.id === '83010416610906112') {
      return;
    }
    if (sender.id === '234395307759108106') {
      return;
    }
    if (sender.id === '239631525350604801') {
      return;
    }
    if (sender.id === '184405311681986560') {
      return;
    }
    if (sender.id === '491614535812120596') {
      return;
    }

    if (msg === prefix + 'help' || msg === prefix + 'command') {
      message.channel.send(commandList)
    }

    if (msg === 'kenji') {
        return message.channel.send('goblok')
    }
    if (msg.includes('ngentot')) {
        message.delete();
        message.channel.send (`Jangan ngomong kasar`)
    }
    if (msg.includes('kontol')) {
        message.delete();
        message.channel.send (`Jangan ngomong kasar`)
    }
    if (msg.includes('bangsat')) {
        message.delete();
        message.channel.send (`Jangan ngomong kasar`)
    }
    if (msg.includes('anjing')) {
        message.delete();
        message.channel.send (`Jangan ngomong kasar`)
    }

    if (msg.startsWith(prefix + 'userinfo')) {
      if (msg === prefix + 'userinfo') {
        message.channel.send(userInfo(sender));
      }
    }


    if (!userData[sender.id]) userData[sender.id] = {
      messageSent: 0
    }

    userData[sender.id].messageSent++;

    fs.writeFile('storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);
    });

});

bot.on('guildMemberAdd', member => {
  console.log('user ' + member.user.username + ' has joined')

  const role = member.guild.roles.find('name', '👨‍🚀Astronaut');

  member.addRole(role)
})

bot.on('ready', () => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("OBS", {type: "STREAMING", url:"https://www.twitch.tv/1hazel1"})
});






bot.login('NTk0NzQ5NzAzNjIzNjcxODE4.XjAV4A.eR_uisVp1O7UafoD2utMj6Wp7WY');
