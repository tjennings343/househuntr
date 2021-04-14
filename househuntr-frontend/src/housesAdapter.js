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

    updateHouse(houseId){
        const address = document.getElementById(`update-address-${houseId}`).value
        const bedrooms = document.getElementById(`update-bedrooms-${houseId}`).value
        const bathrooms = document.getElementById(`update-bathrooms-${houseId}`).value
        const sqft = document.getElementById(`update-sqft-${houseId}`).value
        const price = document.getElementById(`update-price-${houseId}`).value

        let houseObj = {
            address,
            bedrooms,
            bathrooms,
            sqft,
            price
        }

        let configObj={
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(houseObj)
        }

        fetch(this.baseUrl + `/${houseId}`, configObj)
        .then(res => res.json())
        .then(response => {
             let house = House.all.find(h => h.id == response.data.attributes.id)
             house.updateDom(response.data.attributes)
        })

        let form = document.getElementById(`update-form-${houseId}`)
        form.remove()
    }
    
}

