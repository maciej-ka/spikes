# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_11_05_221134) do
  create_table "offers", force: :cascade do |t|
    t.string "link"
    t.string "title"
    t.string "company"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "salary_from"
    t.integer "salary_to"
  end

  create_table "skill_in_offers", force: :cascade do |t|
    t.integer "offer_id", null: false
    t.integer "skill_id", null: false
    t.boolean "required"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["offer_id"], name: "index_skill_in_offers_on_offer_id"
    t.index ["skill_id"], name: "index_skill_in_offers_on_skill_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "skill_in_offers", "offers"
  add_foreign_key "skill_in_offers", "skills"
end
