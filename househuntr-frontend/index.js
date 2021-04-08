const housesAdapter = new HousesAdapter
const citiesAdapter = new CitiesAdapter

document.addEventListener('DOMContentLoaded', () => {
    housesAdapter.fetchHouses()
    citiesAdapter.fetchCities()
})

