const Discord = require('discord.js');

const client = new Discord.Client();


var quote = 0

client.on('ready', () => {
  console.log('I am ready!');
});
/*
client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
    console.log(message.author.username)
  }
});
*/
client.on('message', message => {
  if (message.author.username === 'candlestick') {
    message.delete(1)
    quote = Math.floor(Math.random() * 10)
    switch (quote) {
      case 0:
        message.channel.send('Very Very Gud')
        .then(console.log('Raj successfully trolled'))
        .catch(console.error);
        break;
      case 1:
        message.channel.send('To be honest I got boosted. I should be in low silver')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 2:
        message.channel.send('Really though, dont eat that cow, its probably my grandparents')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 3:
        message.channel.send('I could probably be in masters by now, but my mouse and bad teammates hold me back very strongly, to heavy to carry. Just like sacred cow')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 4:
        message.channel.send('Whats wrong Jesus boy?')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 5:
        message.channel.send('!@#$ this game, !@#$ my team. They are all !@#$%^& and all need to stop throwing')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 6:
        message.channel.send('Dont worry, Im a silver Hanzo. I got this')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 7:
        message.channel.send('Tech support, how may I help you?')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 8:
        message.channel.send('Carry me Dylan')
        .then(console.log('-'))
        .catch(console.error);
        break;
      case 9:
        message.channel.send('Dylan was right, I am actually gay')
        .then(console.log('-'))
        .catch(console.error);
        break;
    }
  }
     
      //.then(console.log(quote))
      
  }
)
/*
client.on('message', (message.author.username = 'candlestick') => {
  switch (quote) {
    case 0:
      message.channel.send('Very Very Gud')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 1:
      message.channel.send('To be honest I got boosted. I should be in low silver')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 2:
      message.channel.send('Really though, dont eat that cow, its probably my grandparents')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 3:
      message.channel.send('I could probably be in masters by now, but my mouse and bad teammates me back very strongly, to heavy to carry. Just like sacred cow')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 4:
      message.channel.send('Whats wrong Jesus boy?')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 5:
      message.channel.send('!@#$ this game, !@#$ my team. They are all !@#$%^& and all need to stop throwing')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 6:
      message.channel.send('Dont worry, Im a silver Hanzo. I got this')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 7:
      message.channel.send('Dont spoil 50 shades of Grey, Im watching next week while I masturbate')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 8:
      message.channel.send('Carry me Dylan')
      .then(console.log('-'))
      .catch(console.error);
      break;
    case 9:
      message.channel.send('Dylan was right, I am actually gay')
      .then(console.log('-'))
      .catch(console.error);
      break;
  }
})
*/


client.login(process.env.BOT_TOKEN);
