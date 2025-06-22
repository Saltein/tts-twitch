import s from './MainPage.module.scss'
import { useEffect } from 'react'
import { runTwitchConnection } from '../../../processes/twitch-connection'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMessages } from '../../../entities/message/model/chatSlice'
import { AccessForm } from '../../../widgets/AccessForm/AccessForm'
import { getChannel, getToken, getUsername } from '../../../entities/user/model/userSlice'


export const MainPage = () => {
    const messages = useSelector(getAllMessages)
    const dispatch = useDispatch()

    const username = useSelector(getUsername)
    const token = useSelector(getToken)
    const channel = useSelector(getChannel)


    useEffect(() => {
        if (username && token && channel) {
            runTwitchConnection({
                username: username,
                token: `oauth:${token}`,
                channel: channel,
            }, dispatch)
        }
    }, [username, token, channel])

    return (
        <div className={s.wrapper}>
            <AccessForm />
            <div className={s.messages}>
                {messages.map((message, index) => {
                    <span className={s.message} key={index}>message</span>
                })}
            </div>
        </div>
    )
}