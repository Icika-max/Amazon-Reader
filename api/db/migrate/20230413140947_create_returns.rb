class CreateReturns < ActiveRecord::Migration[7.0]
  def change
    create_table :returns do |t|
      t.string :return_date
      t.string :status
      t.references :user, null: false, foreign_key: true
      t.references :lending, null: false, foreign_key: true

      t.timestamps
    end
  end
end
