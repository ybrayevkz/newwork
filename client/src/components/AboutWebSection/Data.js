import about_web_page_img1 from "../../images/AboutWebPage/about_web_tech_obj1.svg";
import web_developer from "../../images/AboutWebPage/web-developer.svg"



export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Что такое web-технологии?',
    headline: 'Под "web-технологиями" подразумевается ряд инструментов на подобии HTML, CSS и т.д.',
    description: '__Тех кто занимаются "web-технологиями" называют web-разработчиками. Они делятся между собой в зависимости какие ' +
        'части они разрабатывают. Бывают моменты когда те кто разабатывают клиентскую часть не всегда могут разрабатывать серверную' +
        ' часть. И поэтому в мировом рынке их поделили на 2 типы. Те кто занимаются клиентской частью называют-"Front-End developers (' +
        'фронт-энд разработчики)", а тех кто занимаются серверной частью называют-"Back-End developers (бэк-энд разработчики)". ' +
        '',
    buttonLabel: 'Подробнее по web-разработке...',
    imgStart: false,
    img: about_web_page_img1,
    alt: 'Car',
    dark: true,
    direct: '/aboutweb',
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Немного о web-разработчиках',
    headline: '',
    description: '__Все что связано с интернетом включаю социальные сети и прграммы, платформы, порталы - дело рук web-разработчика.' +
        'А что было бы если бы их не было? Сложно представить, да?! На данный момент мы уверенно можем сказать что web-разработчики' +
        'как маски во время пандемии, они очень востребованны и соответственно заработные платы высокие. Но нельзя становиться разработчиком' +
        'лишь хотев им стать, быть разработчиком а точнее стать разработчиком очень долго и трудно. А что бы как то скоротать этот процесс' +
        'и облегчить я создал данный проект. От вас требуется лишь желание обучаться и время.',
    buttonLabel: 'Создать аккаунт!',
    imgStart: true,
    img: web_developer,
    alt: 'homepage_accont_image',
    dark: false,
    direct: '/auth',
    primary: false,
    darkText: true
}