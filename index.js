const { Telegraf, Markup, Extra } = require('telegraf');
const fetch = require('node-fetch');
const fs = require('fs');
const bot = new Telegraf("1550579606:AAGi1uGyiUxf2rD67UJYqP39wOEh3TUCswc");


bot.start((context) => {
    context.reply(`Привет :), ${context.message.from.first_name}. Я Бекспейс :>.\nЧто я могу делать?\n1. Поиск всех паролей по почте.\n2. Поиск всех паролей по имени пользователя.\n3. ﾐ｢ﾑτ� ﾑ� ﾑ�σｹ ﾐｷﾐｽﾐｰﾐｵﾑ�, ﾑ�ひｾ ﾐｵﾑ禍ｵ ﾐｱﾑσｴﾐｵﾑ�..\nНапиши любую почту, и я проверю ее на слитые пароли ;).`);

});

bot.command('myid', (context) => {
    context.reply(`Твой id: ${context.from.id}.\n. Отправь это продавцу.`)
}) 

bot.on('text', (context) => {

    let flag = false;

    const results = JSON.parse(fs.readFileSync('permissions.json'));
    results.forEach(element => {
        if (element.id == context.from.id) {
            flag = true;
        }
    });

        if (flag) {
            if (context.message.text.split(' ').length == 2) {
                if (context.message.text.split(' ')[0] == '/username') {
                    fetch(`https://leakcheck.net/api/?key=7f10890d05bf2f5979585d4ab61d637e14618d3b&check=${context.message.text.split(' ')[1]}&type=login`)
                    .then(data => data.json())
                    .then(res => {
                        if (res.success == false) {
                            context.reply(`🔍Найденные пароли от имени пользователя ${context.message.text.split(' ')[1]}: Не найдено.`)
                        } else {
                            let reply = `🔍Найденные пароли от имени пользователя ${context.message.text.split(' ')[1]}:\n`;
                            res.result.forEach(password => {
                                reply += `${password.line} - Из сайтов: ${password.sources.length == 0 ? "N/A" : password.sources.toString()}\n`;
                            });
                            context.reply(reply);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
            } else {
                fetch(`https://leakcheck.net/api/?key=7f10890d05bf2f5979585d4ab61d637e14618d3b&check=${context.message.text}&type=email`)
                .then(data => data.json())
                .then(res => {
                    if (res.success == false) {
                        context.reply(`🔍Найденные пароли ${context.message.text}: Не найдено.`)
                    } else {
                        let reply = `🔍Найденные пароли ${context.message.text}:\n`;
                        res.result.forEach(password => {
                            reply += password.line + "\n";
                        });
                        context.reply(reply);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        } else {
            context.reply(`А хера тебе :). Купи сначала меня. /myid после покупки и отправь продавцу.`)
        }



})

bot.launch();