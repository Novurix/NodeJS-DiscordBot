const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
let member

client.once('ready', () => {
    console.log('Ready');
    client.user.setActivity("Staff Bot");
})

client.on('message', message => {
    console.log(message.content);
    
    if (message.content.startsWith(`${prefix}kick`)) {

        member = message.mentions.members.first();

        if (message.member.roles.guild.equals("689848583637172245") || message.member.roles.guild.equals("689849249428668550")) {

            message.channel.send("you have no permission to use that command");
        } 
          
        else {
            if (member != null) {
                member.kick().then((member) => {
                    message.channel.send(":wave: " + member.displayName + " has been kicked");
                })
            }
        }
    }

    if (message.content.startsWith(`${prefix}ban`)) {

        member = message.mentions.members.first();

        if (message.member.roles.guild.equals("689848583637172245") || message.member.roles.guild.equals("689849249428668550")) {

            message.channel.send("you have no permission to use that command");
        } 
          
        else {
            if (member != null) {
                member.ban().then((member) => {
                    message.channel.send(":wave: " + member.displayName + " has been kicked");
                })
            }
        }
    }
})

client.login(token);