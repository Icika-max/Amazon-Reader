class CreateLendings < ActiveRecord::Migration[7.0]
  def change
    create_table :lendings do |t|
      t.references :book, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.date :due_date
      t.string :status, default: "pending"

      t.timestamps
    end
  end
end
