class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :address
      t.integer :bedrooms
      t.integer :bathrooms
      t.integer :square_foot
      t.integer :price
      t.belongs_to :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
