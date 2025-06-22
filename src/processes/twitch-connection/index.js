import { speak } from '../../shared/lib/speech'
import { createTwitchClient } from './twitchClient'
import { addMessage } from '../../entities/message/model/chatSlice'

export function runTwitchConnection({ username, token, channel }, dispatch) {
    const client = createTwitchClient({ username, token, channel })

    client.connect()

    client.on('message', (channelName, tags, message, self) => {
        if (self) return
        dispatch(addMessage(message))
        console.log('message:', message)

        // тэги custom-reward-id появляются только на сообщения, купленные за баллы

        speak(`${message}`)
        // speak(message)
        // if (tags['custom-reward-id']) {
        // }
    })
}