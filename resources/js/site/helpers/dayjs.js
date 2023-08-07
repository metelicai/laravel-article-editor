import dayjs from 'dayjs'
import ruLocale from 'dayjs/locale/ru'

dayjs.locale(ruLocale)

export const useDayjs = () => dayjs
