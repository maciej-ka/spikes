class CreateOffers < ActiveRecord::Migration[7.2]
  def change
    create_table :offers do |t|
      t.string :link
      t.string :title
      t.string :company
      t.text :description

      t.timestamps
    end
  end
end
