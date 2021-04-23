class House{
    static all =[]

    constructor({id, address, bedrooms, bathrooms, square_foot, price, city}){
        this.id = id
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.sqft = square_foot
        this.price = price
        this.city = city.name
        this.element = document.createElement('div')
        this.element.id = `house-${this.id}`

        House.all.push(this)
    }

    addEventListeners(){
        this.element.addEventListener('click', this.houseEdits)
    }


    attachToDom(){
        const getHouseList = document.getElementById('house-list')
        getHouseList.append(this.renderHouse())
        this.addEventListeners()
    }

    renderHouse(){
        this.element.innerHTML = `
        <br>
        <li>
        <strong class="address">${this.address}</strong><br>
        <span class="city">${this.city}</span><br>
        <span class="bedrooms">Bed ${this.bedrooms}</span><br>
        <span class="bathrooms">Bath ${this.bathrooms}</span><br>
        <span class="sqft">${this.sqft}sqft</span><br>
        <strong class="price">${this.price}usd</strong><br><br>
        </li>
        <button class="update" data-id="${this.id}">Update</button>
        `
        return this.element   
    }

    updateDom({id, address, bedrooms, bathrooms, square_foot, price}){
        this.id = id,
        this.address = address,
        this.bedrooms = bedrooms,
        this.bathrooms = bathrooms,
        this.sqft = square_foot,
        this.price = price
        this.renderHouse()
        this.addEventListeners()

    }

    houseUpdateForm(houseId){
        let house = document.getElementById(`house-${houseId}`)
        let updateForm = `
            <input type="text" value="${this.address}" name="address" id="update-address-${houseId}">
            <input type="number" value="${this.bedrooms}" name="bedrooms" id="update-bedrooms-${houseId}">
            <input type="number" value="${this.bathrooms}" name="bathrooms" id="update-bathrooms-${houseId}">
            <input type="number" value="${this.sqft}" name="sqft" id="update-sqft-${houseId}">
            <input type="number" value="${this.price}" name="price" id="update-price-${houseId}">
            `
        let formDiv = document.createElement('div')
        formDiv.id = `update-form-${houseId}`
        formDiv.innerHTML = updateForm
        house.append(formDiv)
    }

    houseEdits = (e) => {
        let id = e.target.dataset.id
        if (e.target.className === 'update'){
            e.target.className = "save"
            e.target.innerText = "Save"
            this.houseUpdateForm(id)}
            else if(e.target.className === 'save'){
            e.target.className = "update"
            e.target.innerText = "Update"
            housesAdapter.updateHouse(id)}
            
    }



    
}