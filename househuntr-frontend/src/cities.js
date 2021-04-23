class City{
    static all = []

    constructor({id, name}){
        this.id = id
        this.name = name
        this.element = document.createElement('div')
        this.element.id = `city-${this.id}`

        City.all.push(this)
    }

    attachCityToDom(){
        const cityList = document.getElementById('city-list')
        this.element.innerHTML = `
        <h2>${this.name}</h2>
        `
        cityList.append(this.element)
    }

    citySelector(){
        const cityRoller = document.getElementById('city')
        const opt = document.createElement('option')
        opt.value = `${this.id}`
        opt.innerText = `${this.name}`
        cityRoller.options.add(opt)
    }
}