const YANDEX_GEO_API_KEY = '27d678f1-19dd-4c4c-a473-e4340808cd43'

export const BASE_URL_GEO = `https://geocode-maps.yandex.ru/1.x
?apikey=${YANDEX_GEO_API_KEY}
&format=json
&lang=en_US
&kind=locality
&geocode=`;