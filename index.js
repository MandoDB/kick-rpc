const { clientId, RPC: { details, largeImageKey, largeImageText, smallImageKey, smallImageText, buttons }} = require("./config.json");
const RPC = new (require('discord-rpc')).Client({ transport: 'ipc'});

async function setActivity() {
    if(!RPC) return;
    RPC.setActivity({
        details,
        startTimestamp: Date.now(),
        largeImageKey,
        largeImageText,
        smallImageKey,
        smallImageText,
        instance: false,
        buttons
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
