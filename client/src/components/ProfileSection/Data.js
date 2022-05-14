import avatarimage from '../../images/ProfilePage/avatarimage.svg'
import infoimage from '../../images/ProfilePage/infoimage.svg'
import passimage from '../../images/ProfilePage/passimage.svg'



export const profileObjOne = {
    id: 'avatarsection',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Профильное фото пользователя',
    headline: 'Вы можете поменять ваше профильное фото на ту, которое вам нравится',
    description: 'Для этого вы должны загрузить фото с помощью кнопки "Поменять фото"',
    buttonLabel: 'Поменять фото',
    imgStart: false,
    img: avatarimage,
    alt: 'Avatar Image',
    dark: true,
    direct: '/avatar',
    primary: true,
    darkText: false
}

export const profileObjTwo = {
    id: 'infosection',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Ваши данные',
    headline: 'Вы можете слегкостью поменять ваши данные',
    description: 'Для это вы должны просто поменять значении в соответствующих ячейках',
    buttonLabel: 'Обновить информацию',
    imgStart: true,
    img: infoimage,
    alt: 'Info Image',
    dark: false,
    direct: '/info',
    primary: false,
    darkText: true
}

export const profileObjThree = {
    id: 'passwordsection',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Ваш пароль',
    headline: 'Вы можете поменять ваш пароль',
    description: 'Для этого вы должны поменять значение в поле "Пароль" а в поле "Подтвердите пароль" должны указать тот же пароль что бы' +
        'удостовериться правильно ли вы ввели свой новый пароль',
    buttonLabel: 'Поменять пароль',
    imgStart: false,
    img: passimage,
    alt: 'Password Image',
    dark: true,
    direct: '/password',
    primary: true,
    darkText: false
}