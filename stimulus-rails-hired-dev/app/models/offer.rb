class Offer < ApplicationRecord
  has_many :skill_in_offers
  has_many :skills, through: :skill_in_offers
end
