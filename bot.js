const { Telegraf } = require('telegraf');

// Замените на ваш токен бота
const bot = new Telegraf('7596036861:AAHG2DAfziQE2CsfVIFliY7eK_7W0c1_mzQ');

// Обработка команды /start
bot.command('start', (ctx) => {
    ctx.reply('Запустить Web App', {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: 'Запустить Web App',
                        web_app: { url: 'https://telegram-mini-app-nlzy.vercel.app/' }, 
                    },
                ],
            ],
            resize_keyboard: true,
        },
    });
});



// Запуск бота
bot.launch()
    .then(() => console.log('Бот запущен!'))
    .catch((err) => console.error('Ошибка при запуске бота:', err));
