const url = 'https://danepubliczne.imgw.pl/api/data/synop/station/zielonagora'

let data = {}
const div = document.querySelector('div');


fetch(url)
	.then((response) => {
		console.log(response)
		if (!response.ok) {
			throw new Error('Błąd w api. Sprawdź URL')
		} else {
			return response.json()
		}
	})
	.then(next => {

		console.log(next)
		showData(next)

	})
	.catch(err => console.error(err))


const showData = (data) => {
	const pCity = document.createElement('p')
	const pdate = document.createElement('p')
	const ptemp = document.createElement('p')
	const phumidity = document.createElement('p')


	pCity.textContent = `Miasto: ${data.stacja}`
	pdate.textContent = `Data pomiaru: ${data.data_pomiaru}, godzina pomiaru: ${data.godzina_pomiaru}:00`
	ptemp.textContent = `Temperatura: ${data.temperatura} stopni`
	phumidity.textContent = `Wilgotność: ${data.temperatura} %`

	div.appendChild(pCity)
	div.appendChild(pdate)
	div.appendChild(ptemp)
	div.appendChild(phumidity)
}