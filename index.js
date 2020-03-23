const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client({disableEveryone: true});
let member;

var messaged = false;

client.once('ready', () => {
    console.log('Ready');
    client.user.setActivity("Staff Bot");
})

client.on('message', message => {

    messaged = false;
    console.log(message.content);
    console.log(message.author);
    
    if (message.content.startsWith(`${prefix}kick`)) {

        member = message.mentions.members.first();

        if (message.member.roles.cache.some(role => role.name === "adminRole1") || message.member.roles.cache.some(role => role.name === "adminRole2")) {
            if (member != null) {
                if (!member.roles.cache.some(role => role.name === "adminRole1")) {
                    member.kick().then((member) => {
                        if (messaged == false) {
                            messaged = true;
                            message.channel.send(":wave: **" + member.displayName + "** has been kicked");
                        }
                    })
                }
            }
        }
        else {
            console.log("sender is not an admin");
            if (messaged == false) {
                messaged = true;
                message.channel.send( "**" + message.author.username + "**" + ", you cannot use that command");
            }
        }
    }

    else if (message.content.startsWith(`${prefix}ban`)) {

        member = message.mentions.members.first();

        if (message.member.roles.cache.some(role => role.name === "adminRole1")) {
            if (member != null) {
                member.ban().then((member) => {
                    if (messaged == false) {
                        messaged = true;
                        message.channel.send(":wave: **" + member.displayName + "** has been banned");
                    }
                })
            }
        }
        else {
            if (messaged == false) {
                messaged = true;
                message.channel.send( "**" + message.author.username + "**" + ", you cannot use that command");
            }
        }
    }
})

client.login(token);