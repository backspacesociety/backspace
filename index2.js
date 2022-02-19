const { Telegraf, Markup, Extra } = require('telegraf');
const fetch = require('node-fetch');
const bot = new Telegraf("1550579606:AAGi1uGyiUxf2rD67UJYqP39wOEh3TUCswc");
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base');
const { leave } = Stage
const session = require('telegraf/session')


bot.start((context) => {
    context.replyWithAudio({source: './greetings.mp3'});
    setTimeout(() => context.reply('Выбери задание:\nАга, тебе нужно постараться. Я же не отдам тебе всё за так...', 2000));
      setTimeout(() => context.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 1', 'task1')]).resize())), 500);
      setTimeout(() => context.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 2', 'task2')]).resize())), 1000);
      setTimeout(() => context.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 3', 'task3')]).resize())), 1500);
      setTimeout(() => context.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 4', 'task4')]).resize())), 2000);
});


const task1 = new Scene("task1");
const task2 = new Scene("task2");
const task3 = new Scene("task3");
const task4 = new Scene("task4");

task1.enter((ctx) => {
    ctx.replyWithAudio({source: './task1.mp3'});
    ctx.reply("uggcf://qevir.tbbtyr.pbz/svyr/q/1NkKQfd\nhttps://rot13.com/");
});
task1.on("text", (ctx) => {
    if (ctx.message.text.toLowerCase() == 'выйти') {
        leave();
        setTimeout(() => ctx.reply('Выбери задание:\nАга, тебе нужно постараться. Я же не отдам тебе всё за так...', 2000));
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 1', 'task1')]).resize())), 500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 2', 'task2')]).resize())), 1000);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 3', 'task3')]).resize())), 1500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 4', 'task4')]).resize())), 2000);
    }
});

task2.enter((ctx) => {
    ctx.replyWithAudio({source: './task2.mp3'});
});

task2.on("text", (ctx) => {
    if (ctx.message.text.toLowerCase().startsWith('па')) {
        ctx.reply("u8EWbKwtrDf");
        leave();
        setTimeout(() => ctx.reply('Выбери задание:\nАга, тебе нужно постараться. Я же не отдам тебе всё за так...', 2000));
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 1', 'task1')]).resize())), 500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 2', 'task2')]).resize())), 1000);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 3', 'task3')]).resize())), 1500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 4', 'task4')]).resize())), 2000);
    }
})

task2.on("text", (ctx) => {
    if (ctx.message.text.toLowerCase() == 'выйти') {
        leave();
        setTimeout(() => ctx.reply('Выбери задание:\nАга, тебе нужно постараться. Я же не отдам тебе всё за так...', 2000));
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 1', 'task1')]).resize())), 500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 2', 'task2')]).resize())), 1000);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 3', 'task3')]).resize())), 1500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 4', 'task4')]).resize())), 2000);
    }
});

task3.enter((ctx) => {
    ctx.replyWithPhoto({source: './task3.jpg'});
})

task3.on("text", (ctx) => {
    if (ctx.message.text.toLowerCase() == 'выйти') {
        leave();
        setTimeout(() => ctx.reply('Выбери задание:\nАга, тебе нужно постараться. Я же не отдам тебе всё за так...', 2000));
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 1', 'task1')]).resize())), 500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 2', 'task2')]).resize())), 1000);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 3', 'task3')]).resize())), 1500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 4', 'task4')]).resize())), 2000);
    }
});

task4.enter((ctx) => {
    ctx.replyWithAudio({source: './task4.mp3'});
    ctx.reply("В конец /view?usp=sharing. Последние 4 буквы ссылки - с большой буквы.");
});

task4.on("text", (ctx) => {
    if (ctx.message.text.toLowerCase() == 'выйти') {
        leave();
        setTimeout(() => ctx.reply('Выбери задание:\nАга, тебе нужно постараться. Я же не отдам тебе всё за так...', 2000));
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 1', 'task1')]).resize())), 500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 2', 'task2')]).resize())), 1000);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 3', 'task3')]).resize())), 1500);
        setTimeout(() => ctx.reply("----------------", Extra.markup(Markup.inlineKeyboard([Markup.callbackButton('Задание 4', 'task4')]).resize())), 2000);
    }
});


const stage = new Stage();
stage.command('cancel', leave())
stage.register(task1);
stage.register(task2);
stage.register(task3);
stage.register(task4);

bot.use(session())
bot.use(stage.middleware());


bot.action('task1', (ctx) => {
    ctx.scene.enter('task1');
});
bot.action('task2', (ctx) => {
    ctx.scene.enter('task2');
});
bot.action('task3', (ctx) => {
    ctx.scene.enter('task3');
});
bot.action('task4', (ctx) => {
    ctx.scene.enter('task4');
});

bot.startPolling();

