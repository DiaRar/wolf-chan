const Discord = require('discord.js');
const Canvas=require('canvas')
const colors=require('../colors.json')
let user
module.exports = {
    name: 'whois',
    aliases: ['profile'],
    description: 'Displays user info',
    usage: 'server',
    category: 'general',
    async execute(client, message, args) {
            if(!args[0]) {
                user = message.author;
            }else {
                user = message.mentions.users.first()  || client.users.cache.get(args[0])
            }
            if(!user) return message.channel.send("Sorry, I couldn't find that user?")
        let member=message.guild.member(user);
            if(!member) return message.channel.send("The user isn't in this server!")
        const canvas= Canvas.createCanvas(576,324)
        const ctx=canvas.getContext("2d")
        const background=await Canvas.loadImage("canvas/welcome2.png")
        ctx.drawImage(background,0,0,canvas.width,canvas.height)
        ctx.strokeStyle = colors.black;
        ctx.strokeRect(0,0,canvas.width,canvas.height)

    }
}