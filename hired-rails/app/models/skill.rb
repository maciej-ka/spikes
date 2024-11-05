class Skill < ApplicationRecord
  has_many :skill_in_offers
  has_many :offers, through: :skill_in_offers
end
