class AddSalaryRangeToOffer < ActiveRecord::Migration[7.2]
  def change
    add_column :offers, :salary_from, :integer
    add_column :offers, :salary_to, :integer
  end
end
