# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)
# require 'faker'

# Generate 10 books
# Create roles
# admin_role = Role.create!(name: 'admin')
# customer_role = Role.create!(name: 'customer')

# # Create users with roles
# 10.times do
#   user = User.create!(
#     username: Faker::Internet.username,
#     email: Faker::Internet.email,
#     password: 'password'
#   )
#   UserRole.create!(user: user, role: [admin_role, customer_role].sample)
# end
# Create roles
admin_role = Role.create!(name: 'admin')
customer_role = Role.create!(name: 'customer')

# Create users with roles
40.times do
  user = User.create!(
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password: 'password'
  )
  UserRole.create!(user: user, role: [admin_role, customer_role].sample)
end

# Create books with location
10.times do
  Book.create!(
    title: Faker::Book.title,
    author: Faker::Book.author,
    description: Faker::Lorem.paragraph,
    rating: Faker::Number.between(from: 1, to: 5),
    genre: Faker::Book.genre,
    price: Faker::Commerce.price,
    image_url: Faker::Internet.url,
    location: ['store', 'library'].sample
  )
end

# Create carts
10.times do
  Cart.create!(
    quantity: Faker::Number.between(from: 1, to: 5),
    price: Faker::Commerce.price,
    book: Book.all.sample,
    user: User.all.sample
  )
end

# Create lendings
10.times do
  Lending.create!(
    book: Book.all.sample,
    user: User.all.sample,
    due_date: Faker::Date.forward(days: 30)
  )
end

# Create orders
10.times do
  Order.create!(
    book: Book.all.sample,
    user: User.all.sample
  )
end

# Create payments
10.times do
  Payment.create!(
    amount: Faker::Commerce.price,
    status: ['completed', 'pending'].sample,
    user: User.all.sample,
    order: Order.all.sample
  )
end

# Create returns
10.times do
  Return.create!(
    return_date: Faker::Date.between(from: '2023-04-01', to: '2023-04-20'),
    status: ['completed', 'pending'].sample,
    user: User.all.sample,
    lending: Lending.all.sample
  )
end



# #Create admins
# admin = Admin.create(username: 'Dorothy', email: 'dorothy@example.com', password_digest: 'password')


# # create some users
# user1 = User.create(username: "John", email: "john@example.com", password_digest: 'password1')
# user2 = User.create(username: "Jane", email: "jane@example.com", password_digest: 'password2')
# user3 = User.create(username: "Ken", email: "ken@example.com", password_digest: 'password3')
# user4 = User.create(username: "Icika", email: "icika@example.com", password_digest: 'password4')
# user5 = User.create(username: "Rose", email: "rose@example.com", password_digest: 'password5')

# # create some books
# # book1 = Book.create(title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99)
# # book2 = Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99)
# # book3 = Book.create(title: "Pride and Prejudice", author: "Jane Austen", price: 9.99)
# # book4 = Book.create(title: "Pride and Prejudice", author: "Jane Austen", price: 9.99)
# # book5 = Book.create(title: "Pride and Prejudice", author: "Jane Austen", price: 9.99)

# book1 = Book.create(title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.", rating: 4.5, genre: "Fiction", price: 9.99, image_url: "https://images-na.ssl-images-amazon.com/images/I/51-7VzM5kmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", location: "store")

# book2 = Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.", rating: 4.8, genre: "Fiction", price: 0, image_url: "https://images-na.ssl-images-amazon.com/images/I/51FP1WYufvL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", location: "library")

# book3 = Book.create(title: "The Hobbit", author: "J.R.R. Tolkien", description: "Bilbo Baggins, a hobbit, becomes a burglar when he is asked to help reclaim treasure from a dragon.", rating: 4.7, genre: "Fantasy", price: 14.99, image_url: "https://images-na.ssl-images-amazon.com/images/I/51qng+rQKAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", location: "store")

# book4 = Book.create(title: "The Catcher in the Rye", author: "J.D. Salinger", description: "The story of Holden Caulfield, a teenager who wanders around New York City after being expelled from an elite prep school.", rating: 4.2, genre: "Fiction", price: 0, image_url: "https://images-na.ssl-images-amazon.com/images/I/41YI5O1dT5L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", location: "library")

# book5 = Book.create(title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society, in which a man named Winston Smith rebels against the oppressive regime.", rating: 4.6, genre: "Science Fiction", price: 10.99, image_url: "https://images-na.ssl-images-amazon.com/images/I/41gY3WryVML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", location: "store")





# # create some orders
# Order.create(user: user1, book: book1, status: "approved")
# Order.create(user: user2, book: book2, status: "pending")
# Order.create(user: user3, book: book3, status: "rejected")
# Order.create(user: user4, book: book4, status: "approved")
# Order.create(user: user5, book: book5, status: "pending")


# # Create 5 Lendings with random book, user, and due date
# Lending.create(user: user1, book: book1, due_date: Date.today + 7.days, status: "pending")
# Lending.create(user: user2, book: book2, due_date: Date.today + 14.days, status: "approved")
# Lending.create(user: user3, book: book3, due_date: Date.today + 10.days, status: "rejected")
# Lending.create(user: user3, book: book4, due_date: Date.today + 7.days, status: "approved")
# Lending.create(user: user5, book: book5, due_date: Date.today + 7.days, status: "rejected")

# #create cart
# Cart.create(quantity: 2, price: 9.99, book_id: 1, user_id: 1)
# Cart.create(quantity: 1, price: 0, book_id: 2, user_id: 2)



# Order.create(user: user1, book: book1, status: "approved")
# Order.create(user: user2, book: book2, status: "pending")
# Order.create(user: user3, book: book3, status: "rejected")
# Order.create(user: user4, book: book4, status: "approved")
# Order.create(user: user5, book: book5, status: "pending")

# Payment.create([
#   { amount: 50.0, status: 'paid', user_id: 1, order_id: 1 },
#   { amount: 20.0, status: 'paid', user_id: 2, order_id: 2 },
#   { amount: 15.0, status: 'pending', user_id: 3, order_id: 3 },
#   { amount: 40.0, status: 'paid', user_id: 4, order_id: 4 }
# ])

# # create payment
# # Payment.create!(order: order1, amount: 100.00, payment_date: Date.today, payment_status: "paid")
# # Payment.create!(order: order2, amount: 50.00, payment_date: Date.today, payment_status: "paid")
# # Payment.create!(order: order3, amount: 75.00, payment_date: Date.yesterday, payment_status: "unpaid")
# # Payment.create!(order: order4, amount: 200.00, payment_date: Date.today, payment_status: "unpaid")



# # Payment.create!(order_id: 1, user_id: 1, amount: 100.00, payment_date: Date.today, payment_status: "paid")
# # Payment.create!(order_id: 2, user_id: 2, amount: 50.00, payment_date: Date.today, payment_status: "paid")
# # Payment.create!(order_id: 3, user_id: 3, amount: 75.00, payment_date: Date.yesterday, payment_status: "unpaid")
# # Payment.create!(order_id: 4, user_id: 4, amount: 200.00, payment_date: Date.today, payment_status: "unpaid")
# # Payment.create([{ amount: 50.0, status: 'paid', user_id: 1, order_id: 1 },{ amount: 20.0, status: 'paid', user_id: 2, order_id: 2 },{ amount: 15.0, status: 'pending', user_id: 3, order_id: 3 },{ amount: 40.0, status: 'paid', user_id: 4, order_id: 4 }])

# Return.create!(lending_id: 3,return_date: Date.today,status: :returned,user_id: 2)
# Return.create!(lending_id: 4,return_date: Date.today,status: :not_returned,user_id: 1)
# Return.create!(lending_id: 5,return_date: Date.today,status: :returned,user_id: 3)
