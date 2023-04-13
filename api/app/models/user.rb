class User < ApplicationRecord
    has_many :orders
    has_many :books, through: :orders
    has_many :lendings
    has_many :books, through: :lendings

end
