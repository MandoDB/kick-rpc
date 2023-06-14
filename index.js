const { clientId, RPC: { details, largeImageKey, smallImageKey, buttons }} = require("./config.json");
const RPC = new (require('discord-rpc')).Client({ transport: 'ipc'});

async function setActivity() {
    if(!RPC) return;
    RPC.setActivity({
        details: details,
        startTimestamp: Date.now(),
        largeImageKey: largeImageKey,
        smallImageKey: smallImageKey,
        instance: false,
        buttons: buttons
    });
};

RPC.on('ready', async () => {
    console.log(`Script is running now...`); 
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000); 
});

RPC.login({ clientId }).catch(err => console.error(err));