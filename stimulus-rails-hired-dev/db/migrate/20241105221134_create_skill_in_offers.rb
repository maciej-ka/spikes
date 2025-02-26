class CreateSkillInOffers < ActiveRecord::Migration[7.2]
  def change
    create_table :skill_in_offers do |t|
      t.references :offer, null: false, foreign_key: true
      t.references :skill, null: false, foreign_key: true
      t.boolean :required

      t.timestamps
    end
  end
end
