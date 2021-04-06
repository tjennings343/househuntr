class HousesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/houses'
    }

    fetchHouses(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            console.log(response)
        })
    }
}