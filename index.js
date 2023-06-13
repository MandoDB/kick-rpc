const clientId = '';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc'});

DiscordRPC.register(clientId);

async function setActivity() {
    if(!RPC) return;
    RPC.setActivity({ // Put here what you want, your links, your stream titles, the image etc...
        details: `Rejoins l'aventure sur Starbound !`,
        startTimestamp: Date.now(),
        largeImageKey: 'kicklogo',
        smallImageKey: 'kicklogo',
        instance: false,
        buttons: [ //Here you put the buttons you want (label = title, url = link).
            {
                label: `Rejoins moi sur Kick !`,
                url: 'https://kick.com/mandodb'
            },
            {
                label: `Rejoins le Discord !`,
                url: 'https://discord.gg/la-station'
            }
        ]
    });
};

RPC.on('ready', async () => { // RPC.on run the script
    console.log(`Script is running now...`); 
    setActivity();

    setInterval(() => { //With setInterval the script will check that the status is still working.
        setActivity();
    }, 15 * 1000); 
});

RPC.login({ clientId }).catch(err => console.error(err)); //Le script se connecte au systeme de status et vérifie que l'ID fonctionne.