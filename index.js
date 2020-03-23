const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client({disableEveryone: true});
let member;

// owner id in order: Novurix,
var ownerID = "567421407080874045"
var adminID = "";

var kickedMessages = ["has been exterminated", "has been kicked", "left for reasons"];

client.once('ready', () => {
    console.log('Ready');
    client.user.setActivity("Staff Bot");
})

client.on('message', message => {
    console.log(message.content);
    console.log(message.author);
    
    if (message.content.startsWith(`${prefix}kick`)) {

        member = message.mentions.members.first();

        if (message.member.roles.cache.some(role => role.name === "Novurix") || message.member.roles.cache.some(role => role.name === "Admin")) {
            if (member != null) {
                if (!member.roles.cache.some(role => role.name === "Novurix")) {
                    member.kick().then((member) => {
                        message.channel.send(":wave: " + member.displayName + " has been kicked");
                    })
                }
            }
        }
        else {
            console.log("sender is not an admin");
            message.channel.send( "**" + message.author.username + "**" + ", you cannot use that command");
        }
    }

    else if (message.content.startsWith(`${prefix}ban`)) {

        member = message.mentions.members.first();

        if (message.member.roles.cache.some(role => role.name === "Novurix")) {
            if (member != null) {
                member.ban().then((member) => {
                    message.channel.send(":wave: " + member.displayName + " has been banned");
                })
            }
        }
        else {
            message.channel.send( "**" + message.author.username + "**" + ", you cannot use that command");
        }
    }

    else if (message.content.startsWith(`${prefix}cmds`)) {

        member = message.mentions.members.first();
        message.channel.send("https://www.novurix.com/discord-commands");
    }

    else if (message.content.startsWith(`${prefix}admin`)) {
        member = message.mentions.members.first();

        if (message.member.roles.cache.some(role => role.name === "Novurix")) {
            if (member != null) {
                // give member the Admin role.
            }
        }

        else {
            message.channel.send("you don't have permission to use that command");
        }
    }

    else if (message.content.startsWith(`${prefix}owner`)) {
        member = message.mentions.members.first();

        if (message.member.roles.guild.equals("689848583637172245")) {

        }
        else {
            message.channel.send("you don't have permission to use that command");
        }
    }
})

client.on('guildMemberAdd', newMember => {
    newMember.roles.set("name","Member");
})

client.login(token);