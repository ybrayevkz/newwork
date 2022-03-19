import homepage_programmer_image from "../../images/HomePage/homepage_programmer.svg";
import homepage_account_image from "../../images/HomePage/homepage_account.svg";
import homepage_certication_image from "../../images/HomePage/homepage_certification.svg";



export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Почему вы должны изучать наши курсы?',
    headline: 'Даже освоив лишь основы вы остаетесь конкурентоспособным на рынке труда.',
    description: 'В среднем мировая статистика гласит что средняя зарплата web-разработчика состовляет $50 313/в год',
    buttonLabel: 'Подробнее по web-разработке...',
    imgStart: false,
    img: homepage_programmer_image,
    alt: 'Car',
    dark: true,
    direct: '/aboutweb',
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Что вас ждет по окончанию каждого курса?',
    headline: 'Вы будете сертифицированы по данному курсу',
    description: 'Когда вы закончите обучения и задания данного курса вас ждет экзаменация по данному курсу на сертификат.',
    buttonLabel: 'Подробнее о сертификации...',
    imgStart: true,
    img: homepage_certication_image,
    alt: 'homepage_certification_image',
    direct: '/certification',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Присоединяйся к нам',
    headline: 'Создание аккаунта обойдется тебе всего лишь 2 минуты',
    description: 'Аккаунт нужен для того что бы хранить все ваши результаты и достижения при прохождении наших курсов.' +
        ' А так же для получения сертификата нам понадобится ваши данные.',
    buttonLabel: 'Создать аккаунт!',
    imgStart: false,
    img: homepage_account_image,
    alt: 'homepage_accont_image',
    dark: false,
    direct: '/auth',
    primary: false,
    darkText: true
}