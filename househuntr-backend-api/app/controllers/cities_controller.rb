class CitiesController < ApplicationController

    def index
        cities = City.all
        render json: cities, only: :name
    end

    def show
        city = City.find(params[:id])
        render json: city, only: :name
    end
end
