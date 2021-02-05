import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    fr:{
        translation:{
            menu:'Menu en anglais'
        }
    }
}

i18n.use(initReactI18next).init({
    lng: 'fr',
    fallbackLng:'en',
    resources,

    interpolation: {
        escapeValue: false
    }
})



export default i18n