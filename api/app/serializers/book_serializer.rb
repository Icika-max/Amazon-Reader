class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :rating, :genre, :price, :image_url, :location, :created_at
end
