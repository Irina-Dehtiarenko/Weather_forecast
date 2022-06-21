// Wariant 2 - jeśli pobieramy dane od użytkownika, nie najlepszy sposób, ale też można


let data = {}
const city = (prompt('Witaj, proszę napisz w jakim mieście chcecz sprawdzić aktualną pogodę', 'enter the city name')).toLowerCase()

const div = document.querySelector('div');

const url = `https://danepubliczne.imgw.pl/api/data/synop/station/${city}`

fetch(url)
	.then((response) => {
		console.log(response)
		return response.json()

	})
	.then(data => {

		showData(data)

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