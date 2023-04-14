class Book < ApplicationRecord
    has_many :orders
    has_many :users, through: :orders
    has_many :lendings
    has_many :users, through: :lendings

    

end
