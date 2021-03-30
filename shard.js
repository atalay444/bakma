const { ShardingManager } = require("discord.js");
const Discord = require("discord.js")
const dreambot = new ShardingManager(`${__dirname}/bot.js`, { 
    totalShards: "auto", 
    token: "NzAwNjA4NzAyNDI3OTU1Mjcw.Xplasw.OMRaEFKjEuJrOY54MA782E_uO6I", 
    respawn: true 
});

dreambot.spawn();
dreambot.on("shardCreate", shard => {
    
    let kanal = new Discord.WebhookClient("785922911461572639", "iDbd_2qHKCf6H0LyBPXkvf8Tkcc-D-BOTI7cr6g2zJFnaM3aaWh7WQuAzOPig59M-3WH")
    //https://discord.com/api/webhooks/785922911461572639/iDbd_2qHKCf6H0LyBPXkvf8Tkcc-D-BOTI7cr6g2zJFnaM3aaWh7WQuAzOPig59M-3WH
    setTimeout(() => {
        const embed = new Discord.MessageEmbed()
        .setAuthor("WhYBoLu Bot", "https://cdn.discordapp.com/avatars/700608702427955270/db0a0267f1771e47430d693cffee81e3.webp")
        .setColor("BLUE")
        .setDescription(`[Shard Aktif] - **${shard.id + 1}** ID'li shard başlatılıyor! Toplam shard sayısı: **${dreambot.totalShards}**`)
        .setFooter("Copyright © WhYBoLu Bot 2020", "https://cdn.discordapp.com/avatars/700608702427955270/db0a0267f1771e47430d693cffee81e3.webp")
        kanal.send(embed)
    }, 5000)
    
    console.log("[Shard] Shard başarıyla başlatıldı! " + (shard.id + 1) + "/" + dreambot.totalShards);
});

