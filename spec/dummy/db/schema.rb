# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140320144458) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tribal_addresses", force: true do |t|
    t.integer  "party_id"
    t.string   "type"
    t.string   "line1"
    t.string   "line2"
    t.string   "line3"
    t.string   "city"
    t.string   "state"
    t.string   "zip_code"
    t.boolean  "primary",     default: false
    t.boolean  "active"
    t.integer  "created_by"
    t.integer  "modified_by"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tribal_emails", force: true do |t|
    t.string   "email",      limit: 126
    t.boolean  "primary",                default: false
    t.boolean  "active"
    t.datetime "created_at"
    t.integer  "created_by"
    t.datetime "updated_at"
  end

  create_table "tribal_languages", force: true do |t|
    t.string   "language"
    t.boolean  "active"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "created_by"
    t.integer  "updated_by"
  end

  create_table "tribal_parties", force: true do |t|
    t.integer  "party_type_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "created_by"
    t.integer  "updated_by"
  end

  create_table "tribal_phones", force: true do |t|
    t.integer  "party_id"
    t.string   "type"
    t.string   "raw_number"
    t.string   "raw_extension"
    t.boolean  "primary",       default: false
    t.boolean  "active"
    t.integer  "created_by"
    t.integer  "modified_by"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
