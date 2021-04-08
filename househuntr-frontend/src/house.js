class House{
    static all =[]

    constructor({id, address, bedrooms, bathrooms, square_foot, price, city_id}){
        this.id = id
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.square_foot = square_foot
        this.price = price
        this.city = city_id
        this.element = document.createElement('div')
        this.element.id = `house-${this.id}`

        House.all.push(this)
    }


    attachToDom(){
        const getHouseList = document.getElementById('house-list')
        this.element.classList.add("houses")
        this.element.innerHTML = `<br>
        <li>
        <strong class="address">${this.address}</strong><br>
        <span class="bedrooms">Bed ${this.bedrooms}</span><br>
        <span class="bathrooms">Bath ${this.bathrooms}</span><br>
        <span class="square_foot">${this.square_foot}sqft</span><br>
        <strong class="price">${this.price}usd</strong><br><br>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="update" data-id="${this.id}">Update</button>
        </li>`
        getHouseList.append(this.element)
    }

    
}