
let data = {}
let city = ''

const selectCity = document.querySelector('select')
const div = document.querySelector('div.results');
const pCity = document.querySelector('p.city')
const pDate = document.querySelector('p.date')
const pHour = document.querySelector('p.hour')
const pTemp = document.querySelector('p.temp')
const phumidity = document.querySelector('p.humidity')


const getData = (e) => {
	const url = `https://danepubliczne.imgw.pl/api/data/synop/station/${city}`

	fetch(url)
		.then((response) => {
			console.log(response)
			if (!response.ok) {
				throw new Error('Invalid url address')
			} else {
				return response.json()
			}
		})
		.then(data => {

			showData(data)

		})
		.catch(err => console.error(err))

}

const showData = (data) => {
	pCity.textContent = `Miasto: ${data.stacja}`
	pDate.textContent = `Data: ${data.data_pomiaru}`
	pHour.textContent = `Godzina pomiaru: ${data.godzina_pomiaru}:00`
	pTemp.textContent = `Temperatura: ${data.temperatura} stopni`

	phumidity.textContent = `Wilgotność: ${data.wilgotnosc_wzgledna} %`

}

selectCity.addEventListener('change', (e) => {
	city = e.target.value
	getData()
})
