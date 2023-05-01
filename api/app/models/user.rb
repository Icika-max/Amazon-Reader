class User < ApplicationRecord
    has_many :orders
    has_many :books, through: :orders
    has_many :lendings
    has_many :books, through: :lendings
    has_many :carts
    has_many :books, through: :carts
    has_many :user_roles
    has_many :roles, through: :user_roles


    # set default role randomly to either customer or admin
after_create :assign_random_default_role

def assign_random_default_role
  roles = Role.where(name: ['customer', 'admin'])
  role = roles.sample
  self.roles << role if role
end



    has_secure_password

     validates :username, uniqueness: true
      
    

end
