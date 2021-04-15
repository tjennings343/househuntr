class CitiesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/cities'
    }

    fetchCities(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let city = new City(el.attributes)
                city.attachCityToDom()
            })
        })
    }
}

