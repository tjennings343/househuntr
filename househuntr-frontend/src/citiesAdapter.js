class CitiesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/cities'
    }

    fetchCities(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            console.log(response)
        })
    }
}

