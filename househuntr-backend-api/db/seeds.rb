# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# City Seed Data
Savannah = City.create(name: 'Savannah')
Guyton = City.create(name: 'Guyton')
Pooler = City.create(name: 'Pooler')
Rincon = City.create(name: 'Rincon')

# House Seed Data
Timbercrest = House.create(address: '31 Timbercrest', bedrooms: 4, bathrooms: 4, square_foot: 1800, price: 160000, city_id: Savannah.id)
Barbados = House.create(address: '114 Barbados', bedrooms: 4, bathrooms: 2, square_foot: 1800, price: 230000, city_id: Guyton.id)
Sunbriar = House.create(address: '23 Sunbriar', bedrooms: 3, bathrooms: 3, square_foot: 1600, price: 190000, city_id: Pooler.id)
Jasper = House.create(address: '247 Jasper', bedrooms: 4, bathrooms: 2, square_foot: 1700, price: 249000, city_id: Rincon.id)