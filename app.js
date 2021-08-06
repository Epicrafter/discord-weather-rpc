const rpc = require('discord-rpc');
const fetch = require('node-fetch');
const chalk = require('chalk');

const settings = require('./settings.json');
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${settings.location}?unitGroup=${settings.units}&key=${settings.weatherKey}`;

const client = new rpc.Client({ transport: 'ipc' });

const ascii = String.raw`


                    █     █░▓█████ ▄▄▄     ▄▄▄█████▓ ██░ ██ ▓█████  ██▀███      ██▀███   ██▓███   ▄████▄  
                    ▓█░ █ ░█░▓█   ▀▒████▄   ▓  ██▒ ▓▒▓██░ ██▒▓█   ▀ ▓██ ▒ ██▒   ▓██ ▒ ██▒▓██░  ██▒▒██▀ ▀█  
                    ▒█░ █ ░█ ▒███  ▒██  ▀█▄ ▒ ▓██░ ▒░▒██▀▀██░▒███   ▓██ ░▄█ ▒   ▓██ ░▄█ ▒▓██░ ██▓▒▒▓█    ▄ 
                    ░█░ █ ░█ ▒▓█  ▄░██▄▄▄▄██░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄ ▒██▀▀█▄     ▒██▀▀█▄  ▒██▄█▓▒ ▒▒▓▓▄ ▄██▒
                    ░░██▒██▓ ░▒████▒▓█   ▓██▒ ▒██▒ ░ ░▓█▒░██▓░▒████▒░██▓ ▒██▒   ░██▓ ▒██▒▒██▒ ░  ░▒ ▓███▀ ░
                    ░ ▓░▒ ▒  ░░ ▒░ ░▒▒   ▓▒█░ ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░░ ▒▓ ░▒▓░   ░ ▒▓ ░▒▓░▒▓▒░ ░  ░░ ░▒ ▒  ░
                    ▒ ░ ░   ░ ░  ░ ▒   ▒▒ ░   ░     ▒ ░▒░ ░ ░ ░  ░  ░▒ ░ ▒░     ░▒ ░ ▒░░▒ ░       ░  ▒   
                    ░   ░     ░    ░   ▒    ░       ░  ░░ ░   ░     ░░   ░      ░░   ░ ░░       ░        
                        ░       ░  ░     ░  ░         ░  ░  ░   ░  ░   ░           ░              ░ ░      
                                                                                                ░    
                    
                    By Epicrafter#4261  
`;

async function setActivity() {

    let unit;
    if(settings.units == 'metric') unit = '°C';
    if(settings.units == 'us') unit = '°F';

    const response = await fetch(url).then(url => url.json());
    const icon = response.days[0].icon;

    await client.setActivity({
        //buttons: [{ label: 'weather', url: "https://weather.com/weather/today" }],
        details: `Weather in ${response.address}:`,
        state: `Temperature: ${response.days[0].tempmax}${unit} | ${response.days[0].conditions}`,
        largeImageKey: icon
    }).catch(err => console.error(err));

};

client.on('ready', () => {

    console.log(chalk.cyan(ascii));
    console.log(``);
    console.log(chalk.cyan(`                    Please check this console if any errors occur`));
    console.log(``);

    setInterval(() => {

        console.log(chalk.cyan('                    Weather Updated'));
        setActivity();

    }, 10e3);

});

client.login({ clientId: settings.clientID }).catch(err => console.error(err));