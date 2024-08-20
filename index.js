const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6449794069:AAGGVstaKfGc1B_FnsVsOvcbiip7IGtgCwE', { polling: true });

const ownerId = 123456789; // Replace with your Telegram user ID

bot.on('message', (msg) => {
  if (msg.text === '/start') {
    bot.sendPhoto(msg.chat.id, 'https://telegra.ph/file/216554d670ac648617b5c.jpg', {
      caption: `
Welcome to the Subtitle Burner Bot!

This bot can burn subtitles into your videos. To use the bot, simply follow these steps:

1. Send a video file to the bot.
2. Send the subtitle file (in SRT format) to the bot.
3. The bot will burn the subtitles into the video and send the output video back to you.

Note: The bot only supports MP4 video files and SRT subtitle files.

If you have any questions or need help, feel free to ask!

/start - This message
/help - Get help and instructions
/about - About the bot

`,
      parse_mode: 'Markdown'
    });
  } else if (msg.text === '/help') {
    bot.sendMessage(msg.chat.id, `
To use the Subtitle Burner Bot, follow these steps:

1. Send a video file to the bot.
2. Send the subtitle file (in SRT format) to the bot.
3. The bot will burn the subtitles into the video and send the output video back to you.

If you have any questions or need further assistance, feel free to ask!

`, {
      parse_mode: 'Markdown'
    });
  } else if (msg.text === '/about') {
    bot.sendMessage(msg.chat.id, `
About Subtitle Burner Bot

The Subtitle Burner Bot is a Telegram bot that allows you to burn subtitles into your videos. It's a simple and convenient way to add subtitles to your videos without needing to use complex video editing software.

The bot is owned and maintained by [@your_username](https://t.me/your_username).

If you have any feedback or suggestions, feel free to reach out to the owner!

`, {
      parse_mode: 'Markdown'
    });
  }
});

bot.on('video', (msg) => {
  bot.sendMessage(msg.chat.id, 'Video received!');
});

bot.on('document', (msg) => {
  bot.sendMessage(msg.chat.id, 'Subtitle file received!');
});

bot.startPolling();
