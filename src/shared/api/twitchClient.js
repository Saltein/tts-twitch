import tmi from 'tmi.js';

export function createTwitchClient({ username, token, channel }) {
    const client = new tmi.Client({
        identity: { username, password: token },
        channels: [channel],
    });

    return client;
}