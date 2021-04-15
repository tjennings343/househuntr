const housesAdapter = new HousesAdapter
const citiesAdapter = new CitiesAdapter
const newHouseForm = document.getElementById('new-house-form')

document.addEventListener('DOMContentLoaded', () => {
    housesAdapter.fetchHouses()
    citiesAdapter.fetchCities()
    newHouseForm.addEventListener('submit', housesAdapter.newHouseFormSubmit)

})

