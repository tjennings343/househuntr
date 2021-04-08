class HousesAdapter{
    constructor(){
        this.baseUrl = 'http://localhost:3000/houses'
    }

    fetchHouses(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(response => {
            response.data.forEach(el => {
                let house = new House(el.attributes)
                house.attachToDom(el)
            })
        })
    }

    
}
