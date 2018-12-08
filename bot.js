const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => { // know if our bot is online

    console.log('I am ready!');

});

 

client.on('message', message => { // When the message a message is executed

    if (message.content === 'pytong') { // if that message matches ping

       message.reply('kys kys kys'); // 
     var role = message.guild.roles.find(role => role.name === "miętka faja");
     
     message.member.addRole(role);

       }
       if(message.content.includes('kys')) {
        
           message.reply('kys kys kys');  
           var role = message.guild.roles.find(role => role.name === "miętka faja");
        message.reply('kys kys kys');  
           var role = message.guild.roles.find(role => role.name === "Botsony");
        
       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
