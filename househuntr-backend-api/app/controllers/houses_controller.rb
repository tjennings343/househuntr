class HousesController < ApplicationController

    def index
        houses = House.all
        render json: HouseSerializer.new(houses)
    end

    def show
        house = House.find(params[:id])
        render json: HouseSerializer.new(house)
    end

    def create
        house = House.new(house_params)
        if house.save
            render json: HouseSerializer.new(house)
        else
            render json: {error: 'House could not be created!'}
        end
    end

    def destroy
        house = House.find(params[:id])
        house.destroy
        render json: {message: 'House deleted!'}
    end

    def update
        house = House.find(params[:id])
        house.update(house_params)
        render json: HouseSerializer.new(house)
    end

    private

    def house_params
        params.require(:house).permit(:address, :bedrooms, :bathrooms, :square_foot, :price, :id)
    end
end
