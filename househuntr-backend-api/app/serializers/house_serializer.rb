class HouseSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :address, :bedrooms, :bathrooms, :square_foot, :price, :city_id, :city
end