class OrderSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :status, :created_at
  
  belongs_to :book
end
