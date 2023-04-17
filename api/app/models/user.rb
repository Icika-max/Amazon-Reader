class User < ApplicationRecord
    has_many :orders
    has_many :books, through: :orders
    has_many :lendings
    has_many :books, through: :lendings
    has_many :carts
    has_many :books, through: :carts


    has_secure_password

     validates :username, uniqueness: true
      
    

end
