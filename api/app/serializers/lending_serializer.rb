class LendingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :due_date, :status, :created_at
  
  belongs_to :book
end
