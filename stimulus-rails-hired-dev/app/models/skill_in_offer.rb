class SkillInOffer < ApplicationRecord
  belongs_to :offer
  belongs_to :skill
end
