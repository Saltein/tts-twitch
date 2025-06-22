import { useDispatch } from 'react-redux'
import s from './AccessForm.module.scss'
import { useState } from 'react'
import { setChannel, setToken, setUsername } from '../../entities/user/model/userSlice'

export const AccessForm = () => {
    const [warning, setWarning] = useState('')
    const [username, setLocalUsername] = useState('')
    const [channel, setLocalChannel] = useState('')
    const [token, setLocalToken] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (!username || !channel || !token) {
            setWarning('Заполни все поля')
            return
        }
        dispatch(setUsername(username))
        dispatch(setChannel(channel))
        dispatch(setToken(token))
    }

    return (
        <div className={s.wrapper}>
            <input className={s.input} type='text' placeholder='Твой никнейм на твиче' onChange={(e) => {
                setLocalUsername(e.target.value)
                setWarning('')
            }} />
            <input className={s.input} type='text' placeholder='Название канала для отслеживания чата' onChange={(e) => {
                setLocalChannel(e.target.value)
                setWarning('')
            }} />
            <input className={s.input} type='text' placeholder='Access token с сайта https://twitchtokengenerator.com/' onChange={(e) => {
                setLocalToken(e.target.value)
                setWarning('')
            }} />
            <button className={s.submit} onClick={handleSubmit}>Подключить</button>
            {warning && <span className={s.warning}>{warning}</span>}
        </div>
    )
}