class Book < ApplicationRecord
    has_many :orders
    has_many :users, through: :orders
    has_many :lendings
    has_many :users, through: :lendings
<<<<<<< HEAD

    

=======
    has_many :carts
    has_many :users, through: :carts
>>>>>>> 9bb10686b3331fbe0457ef32f30d591ce46c2844
end
