import s from './MainPage.module.scss'
import { useEffect } from 'react'
import { runTwitchConnection } from '../../../processes/twitch-connection'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMessages } from '../../../entities/message/model/chatSlice'


export const MainPage = () => {
    const messages = useSelector(getAllMessages)
    const dispatch = useDispatch()


    useEffect(() => {
        runTwitchConnection({
            username: 'saltein_play',
            token: 'oauth:e6owsm12lk4p8dgdzld4wqv3camhsr',
            channel: 'saltein_play',
        }, dispatch)
    }, [])

    return (
        <div>
            <h1>Озвучка чата за баллы канала</h1>
            <div className={s.messages}>
                {messages.map((message, index) => {
                    <span className={s.message} key={index}>message</span>
                })}
            </div>
        </div>
    )
}