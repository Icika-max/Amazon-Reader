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
  # UserRole.create!(user: user, role: [admin_role, customer_role].sample)
end

# Create books with location
# 10.times do
#   Book.create!(
#     title: Faker::Book.title,
#     author: Faker::Book.author,
#     description: Faker::Lorem.paragraph,
#     rating: Faker::Number.between(from: 1, to: 5),
#     genre: Faker::Book.genre,
#     price: Faker::Commerce.price,
#     image_url: Faker::Internet.url,
#     location: ['store', 'library'].sample
#   )
# end
book1 = Book.create(title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.", rating: 4.5, genre: "Fiction", price: 9.99, image_url: "https://i.pinimg.com/564x/11/91/8f/11918f3c356159ed09856eb1664f9bff.jpg", location: "store")
book2 = Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.", rating: 4.8, genre: "Crime", price: 0, image_url: "https://i.pinimg.com/564x/b3/43/3f/b3433fb70fe90ba77c06d385dc5e2fe5.jpg", location: "library")
book3 = Book.create(title: "The Hobbit", author: "J.R.R. Tolkien", description: "Bilbo Baggins, a hobbit, becomes a burglar when he is asked to help reclaim treasure from a dragon.", rating: 4.7, genre: "Fantasy", price: 14.99, image_url: "https://i.pinimg.com/564x/76/9f/51/769f51d079c66c1a9317b6f5df4859b5.jpg", location: "store")
book4 = Book.create(title: "The Catcher in the Rye", author: "J.D. Salinger", description: "The story of Holden Caulfield, a teenager who wanders around New York City after being expelled from an elite prep school.", rating: 4.2, genre: "Fiction", price: 0, image_url: "https://i.pinimg.com/564x/b1/1e/da/b11eda6bcd0eb6dfb7acde327f89e59d.jpg", location: "library")
book5 = Book.create(title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society, in which a man named Winston Smith rebels against the oppressive regime.", rating: 4.6, genre: "Romance", price: 10.99, image_url: "https://i.pinimg.com/564x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg", location: "store")
book6 = Book.create(title: "Gone Girl", author: "Gillian Flynn", description: "The story of a woman who disappears on her fifth wedding anniversary, and the subsequent investigation.", rating: 4.0, genre: "Mystery", price: 8.99, image_url: "https://i.pinimg.com/564x/34/c0/c9/34c0c9b1c20d23a12ee55601f42a261d.jpg", location: "store")
book7 = Book.create(title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", description: "The first book in the Harry Potter series, which follows the journey of a young wizard and his friends as they attend Hogwarts School of Witchcraft and Wizardry.", rating: 4.9, genre: "Fantasy", price: 0.0, image_url: "https://i.pinimg.com/564x/27/2a/8e/272a8e2f4444f2344a4abf21db3cc12f.jpg", location: "library")

book8 = Book.create(title: "The Da Vinci Code", author: "Dan Brown", description: "A murder mystery that takes place in Paris, with clues related to the works of Leonardo da Vinci.", rating: 4.2, genre: "Crime", price: 8.99, image_url: "https://i.pinimg.com/564x/b6/c3/6b/b6c36bf2676be15a6c1f86b156f38a1a.jpg", location: "store")

book9 = Book.create(title: "Pride and Prejudice", author: "Jane Austen", description: "A classic novel about the love lives of the Bennet sisters and their relationships with wealthy gentlemen.", rating: 4.6, genre: "Romance", price: 0.0, image_url: "https://i.pinimg.com/564x/04/33/5a/04335ad804c4b4f4a4c28e5f3ab54e5a.jpg", location: "library")

book10 = Book.create(title: "The Hunger Games", author: "Suzanne Collins", description: "A dystopian novel set in a future where teenagers are forced to compete in a televised battle to the death.", rating: 4.3, genre: "Fantansy", price: 9.99, image_url: "https://i.pinimg.com/564x/88/2d/28/882d2859c71ed0f1e43d95c6cd91de6e.jpg", location: "store")

book11 = Book.create(title: "Gone Girl", author: "Gillian Flynn", description: "A psychological thriller about a man who becomes the prime suspect in the disappearance of his wife.", rating: 4.0, genre: "Crime", price: 0.0, image_url: "https://i.pinimg.com/564x/5a/0e/e5/5a0ee5a01c1460b1a6b1d6fa9a6b0c6d.jpg", location: "library")

book12 = Book.create(title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", description: "A crime thriller about a journalist and a hacker who investigate the disappearance of a wealthy man's niece.", rating: 4.2, genre: "Mystery", price: 10.99, image_url: "https://i.pinimg.com/564x/df/75/f7/df75f7de86152a772e1025b5c24688d6.jpg", location: "store")

book13 = Book.create(title: "The Lord of the Rings", author: "J.R.R. Tolkien", description: "An epic fantasy novel that follows the journey of a hobbit, Frodo Baggins, to destroy a powerful ring that could bring about the end of the world", rating: 4.0, genre: "Mystery", price: "9.0", image_url: "https://i.pinimg.com/564x/df/75/f7/df75f7de86152a772e1025b5c24688d6.jpg",location: "store")
book14 = Book.create(title: "The Da Vinci Code", author: "Dan Brown", description: "A murder in the Louvre Museum and clues in paintings by Leonardo da Vinci lead to the discovery of a religious mystery.", rating: 4.1, genre: "Mystery", price: 0.0, image_url: "https://i.pinimg.com/564x/28/7c/8c/287c8c623cf24855b8e484262a67a048.jpg", location: "library")

book15 = Book.create(title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", description: "A journalist and a computer hacker investigate a decades-old disappearance and uncover dark secrets.", rating: 4.4, genre: "Crime", price: 11.99, image_url: "https://i.pinimg.com/564x/0d/7d/79/0d7d793c9ba9f1d2358b53a72b7ed35c.jpg", location: "store")

book16 = Book.create(title: "The Notebook", author: "Nicholas Sparks", description: "The story of a young couple's love that endures over many years.", rating: 4.2, genre: "Romance", price: 0.0, image_url: "https://i.pinimg.com/564x/63/98/9a/63989aa83c5a6db5a6c86b6d5bb03c70.jpg", location: "library")

book17 = Book.create(title: "The Hunger Games", author: "Suzanne Collins", description: "A dystopian novel set in a future where teenagers are forced to compete in a televised battle to the death.", rating: 4.3, genre: "Fiction", price: 9.99, image_url: "https://i.pinimg.com/564x/88/2d/28/882d2859c71ed0f1e43d95c6cd91de6e.jpg", location: "store")

book18 = Book.create(title: "Gone Girl", author: "Gillian Flynn", description: "A woman disappears on the day of her fifth wedding anniversary, and her husband becomes the prime suspect.", rating: 4.0, genre: "Mystery", price: 0.0, image_url: "https://i.pinimg.com/564x/75/6b/9e/756b9ee350e6e73c4237c4c4a4cc9515.jpg", location: "library")

book19 = Book.create(title: "The Handmaid's Tale", author: "Margaret Atwood", description: "A dystopian novel set in a future where women are oppressed and used for reproduction.", rating: 4.6, genre: "Science Fiction", price: 10.99, image_url: "https://i.pinimg.com/564x/3b/3f/8f/3b3f8fcd166d9b1ff8c956983f08d23c.jpg", location: "store")
book20 = Book.create(title: "The Alchemist", author: "Paulo Coelho", description: "A shepherd boy travels to Egypt in search of treasure and discovers the true meaning of life. This is a classic tale of following your dreams and finding your purpose in life.", rating: 4.7, genre: "Fiction", price: 7.99, image_url: "https://i.pinimg.com/564x/3e/7a/b8/3e7ab83d9a0580c0fb13f7bdf44f54e8.jpg", location: "store")







# Create carts
20.times do
  Cart.create!(
    quantity: Faker::Number.between(from: 1, to: 5),
    price: Faker::Commerce.price,
    book: Book.all.sample,
    user: User.all.sample
  )
end

# Create lendings
20.times do
  Lending.create!(
    book: Book.all.sample,
    user: User.all.sample,
    due_date: Faker::Date.forward(days: 30)
  )
end

# Create orders
20.times do
  Order.create!(
    book: Book.all.sample,
    user: User.all.sample
  )
end

# Create payments
20.times do
  Payment.create!(
    amount: Faker::Commerce.price,
    status: ['completed', 'pending'].sample,
    user: User.all.sample,
    order: Order.all.sample
  )
end

# Create returns
20.times do
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
