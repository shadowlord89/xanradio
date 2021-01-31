const Discord = require('discord.js');

const client = new Discord.Client();

const { TOKEN, dc_channel_id, server_id, Link} = require('dotenv');

const ytdl = require('ytdl-core');

client.on("ready", async () => {

  client.user.setActivity("Im Radio Bot :D")

  let channel = client.channels.cache.get(process.env.dc_channel_id) || await client.channels.fetch(process.env.dc_channel_id)

  

  

  if (!channel) return;

  const connection = await channel.join();

  connection.play(ytdl(process.env.Link))

  })

setInterval(async function() {

  if (!client.voice.connections.get(process.env.server_id)) {

    let channel = client.channels.cache.get(process.env.dc_channel_id) || await client.channels.fetch(process.env.dc_channel_id)

  if (!channel) return;

const connection = await channel.join();

  connection.play(ytdl(process.env.Link))

  }

  }, 20000)

client.login(process.env.TOKEN);
