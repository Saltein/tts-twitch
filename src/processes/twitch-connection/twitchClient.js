import tmi from 'tmi.js'

export function createTwitchClient({ username, token, channel }) {
    return new tmi.Client({
        identity: { username, password: token },
        channels: [channel],
    })
}