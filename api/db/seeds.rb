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


book1 = Book.create(title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.", rating: 4.5, genre: "Fiction", price: 9.99, image_url: "https://i.pinimg.com/564x/11/91/8f/11918f3c356159ed09856eb1664f9bff.jpg", location: "store")
book2 = Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.", rating: 4.8, genre: "Crime", price: 0, image_url: "https://i.pinimg.com/564x/b3/43/3f/b3433fb70fe90ba77c06d385dc5e2fe5.jpg", location: "library")
book3 = Book.create(title: "The Hobbit", author: "J.R.R. Tolkien", description: "Bilbo Baggins, a hobbit, becomes a burglar when he is asked to help reclaim treasure from a dragon.", rating: 4.7, genre: "Fantasy", price: 14.99, image_url: "https://i.pinimg.com/564x/76/9f/51/769f51d079c66c1a9317b6f5df4859b5.jpg", location: "store")
book4 = Book.create(title: "The Catcher in the Rye", author: "J.D. Salinger", description: "The story of Holden Caulfield, a teenager who wanders around New York City after being expelled from an elite prep school.", rating: 4.2, genre: "Fiction", price: 0, image_url: "https://i.pinimg.com/564x/b1/1e/da/b11eda6bcd0eb6dfb7acde327f89e59d.jpg", location: "library")
book5 = Book.create(title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society, in which a man named Winston Smith rebels against the oppressive regime.", rating: 4.6, genre: "Romance", price: 10.99, image_url: "https://i.pinimg.com/564x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg", location: "store")
book6 = Book.create(title: "Gone Girl", author: "Gillian Flynn", description: "The story of a woman who disappears on her fifth wedding anniversary, and the subsequent investigation.", rating: 4.0, genre: "Mystery", price: 8.99, image_url: "https://i.pinimg.com/564x/8a/b5/75/8ab5753e4cf924da1df6bbe76107bc21.jpg", location: "store")
book7 = Book.create(title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", description: "The first book in the Harry Potter series, which follows the journey of a young wizard and his friends as they attend Hogwarts School of Witchcraft and Wizardry.", rating: 4.9, genre: "Fantasy", price: 0.0, image_url: "https://i.pinimg.com/564x/ec/5b/85/ec5b85b8ea156ea50cd833154067e446.jpg", location: "library")

book8 = Book.create(title: "The Da Vinci Code", author: "Dan Brown", description: "A murder mystery that takes place in Paris, with clues related to the works of Leonardo da Vinci.", rating: 4.2, genre: "Crime", price: 8.99, image_url: "https://i.pinimg.com/564x/e6/16/fa/e616fac5bf2b21c41c13dc5a608271d3.jpg", location: "store")

book9 = Book.create(title: "Pride and Prejudice", author: "Jane Austen", description: "A classic novel about the love lives of the Bennet sisters and their relationships with wealthy gentlemen.", rating: 4.6, genre: "Romance", price: 0.0, image_url: "https://i.pinimg.com/564x/90/67/82/906782ef491ceb07e87e341b9bf67c70.jpg", location: "library")

book10 = Book.create(title: "The Hunger Games", author: "Suzanne Collins", description: "A dystopian novel set in a future where teenagers are forced to compete in a televised battle to the death.", rating: 4.3, genre: "Fantansy", price: 9.99, image_url: "https://i.pinimg.com/564x/20/e4/29/20e429d4263bdc52ecae1c7fcbe030a2.jpg", location: "store")



book11 = Book.create(title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", description: "A crime thriller about a journalist and a hacker who investigate the disappearance of a wealthy man's niece.", rating: 4.2, genre: "Mystery", price: 10.99, image_url: "https://i.pinimg.com/736x/c5/08/be/c508beacead2c93b7c18bd021f9fa5a3.jpg", location: "store")

book12 = Book.create(title: "The Lord of the Rings", author: "J.R.R. Tolkien", description: "An epic fantasy novel that follows the journey of a hobbit, Frodo Baggins, to destroy a powerful ring that could bring about the end of the world", rating: 4.0, genre: "Mystery", price: "9.0", image_url: "https://i.pinimg.com/564x/2e/54/0f/2e540f1a3072f9b0fc6458464d3c8f32.jpg",location: "store")


book13 = Book.create(title: "The Notebook", author: "Nicholas Sparks", description: "The story of a young couple's love that endures over many years.", rating: 4.2, genre: "Romance", price: 0.0, image_url: "https://i.pinimg.com/564x/5e/d7/ae/5ed7ae450dc7b852dd31f9357a377828.jpg", location: "library")


book14 = Book.create(title: "The Handmaid's Tale", author: "Margaret Atwood", description: "A dystopian novel set in a future where women are oppressed and used for reproduction.", rating: 4.6, genre: "Science Fiction", price: 10.99, image_url: "https://i.pinimg.com/564x/46/2d/82/462d824bddf2a2ab9f7f889d8d4b6151.jpg", location: "store")
book15 = Book.create(title: "The Alchemist", author: "Paulo Coelho", description: "A shepherd boy travels to Egypt in search of treasure and discovers the true meaning of life. This is a classic tale of following your dreams and finding your purpose in life.", rating: 4.7, genre: "Fiction", price: 7.99, image_url: "https://i.pinimg.com/564x/d8/dc/ad/d8dcad2f201031f00445640261cdd677.jpg", location: "store")







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




