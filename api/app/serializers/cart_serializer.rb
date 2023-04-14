class CartSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :price, :book_id, :user_id
end
