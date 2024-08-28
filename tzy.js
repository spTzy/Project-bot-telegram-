const TelegramBot = require('node-telegram-bot-api');

// Ganti dengan token bot Anda
const token = 'TOKEN_BOT';

// Buat instance bot
const bot = new TelegramBot(token, { polling: true });

// Handler untuk pesan teks
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text) {
        // Menyusun balasan teks
        const response = `${msg.text}`;
        
        // Mengirim balasan teks
        bot.sendMessage(chatId, response);
    } else if (msg.sticker) {
        // Mengambil ID stiker yang dikirim pengguna
        const stickerId = msg.sticker.file_id;
        
        // Mengirim stiker yang sama kembali ke chat
        bot.sendSticker(chatId, stickerId);
    }
});