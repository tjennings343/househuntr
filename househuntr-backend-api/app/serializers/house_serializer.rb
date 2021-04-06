class HouseSerializer
    include FastJsonapi::ObjectSerializer
    attributes :address, :bedrooms, :bathrooms, :square_foot, :price, :city_id, :city
end