class City{
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name
        this.cityList = document.getElementById('city-list')
        this.element = document.createElement('li')
        this.element.id = `city-${this.id}`

        City.all.push(this)
    }

    attachCityToDom(){   
        this.cityList.append(this.cityRender())
        this.addEventListeners()
    }

    addEventListeners(){
        this.element.addEventListener('click', this.cityClick)
    }

    get houses(){
        return House.all.filter(h => h.city_id == this.id)
    }

    cityClick = (e) => {
        const houseList = document.getElementById('house-list')
        houseList.innerHTML= ""
        this.houses.forEach(h => {
            h.attachToDom()
        })
        
    }

    cityRender(){
        this.element.innerHTML = `
        <h2>${this.name}</h2>
        `
        return this.element
    }


    citySelector(){
        const cityRoller = document.getElementById('city')
        const opt = document.createElement('option')
        opt.value = `${this.id}`
        opt.innerText = `${this.name}`
        cityRoller.options.add(opt)
    }

    

    


}