const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL_LOL_ESPORTS = import.meta.env.VITE_BASE_URL_LOL_ESPORTS
const BASE_URL_FEED = import.meta.env.VITE_BASE_URL_FEED

const POSITIONS = {
    1: 'TOP',
    2: 'JG',
    3: 'MID',
    4: 'AD',
    5: 'SUP',

    6: 'TOP',
    7: 'JG',
    8: 'MID',
    9: 'AD',
    10: 'SUP',
}

const SIDE_COLORS = {
    'red': '#E83F5B',
    'blue': '#2AA9E0'
}

export {
    API_KEY,
    BASE_URL_FEED,
    BASE_URL_LOL_ESPORTS,
    POSITIONS,
    SIDE_COLORS,
}