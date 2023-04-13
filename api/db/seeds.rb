# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# create some users
user1 = User.create(username: "John", email: "john@example.com", password_digest: 'password1')
user2 = User.create(username: "Jane", email: "jane@example.com", password_digest: 'password2')
user3 = User.create(username: "Ken", email: "ken@example.com", password_digest: 'password3')
user4 = User.create(username: "Icika", email: "icika@example.com", password_digest: 'password4')
user5 = User.create(username: "Rose", email: "rose@example.com", password_digest: 'password5')

# create some books
# book1 = Book.create(title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99)
# book2 = Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99)
# book3 = Book.create(title: "Pride and Prejudice", author: "Jane Austen", price: 9.99)
# book4 = Book.create(title: "Pride and Prejudice", author: "Jane Austen", price: 9.99)
# book5 = Book.create(title: "Pride and Prejudice", author: "Jane Austen", price: 9.99)
book1 = Book.create(title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.", rating: 4.5, genre: "Fiction", price: 9.99, image_url: "https://images-na.ssl-images-amazon.com/images/I/51-7VzM5kmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")

book2 = Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.", rating: 4.8, genre: "Fiction", price: 12.99, image_url: "https://images-na.ssl-images-amazon.com/images/I/51FP1WYufvL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")

book3 = Book.create(title: "The Hobbit", author: "J.R.R. Tolkien", description: "Bilbo Baggins, a hobbit, becomes a burglar when he is asked to help reclaim treasure from a dragon.", rating: 4.7, genre: "Fantasy", price: 14.99, image_url: "https://images-na.ssl-images-amazon.com/images/I/51qng+rQKAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")

book4 = Book.create(title: "The Catcher in the Rye", author: "J.D. Salinger", description: "The story of Holden Caulfield, a teenager who wanders around New York City after being expelled from an elite prep school.", rating: 4.2, genre: "Fiction", price: 8.99, image_url: "https://images-na.ssl-images-amazon.com/images/I/41YI5O1dT5L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")

book5 = Book.create(title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society, in which a man named Winston Smith rebels against the oppressive regime.", rating: 4.6, genre: "Science Fiction", price: 10.99, image_url: "https://images-na.ssl-images-amazon.com/images/I/41gY3WryVML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")




# create some orders
Order.create(user: user1, book: book1, status: "approved")
Order.create(user: user2, book: book2, status: "pending")
Order.create(user: user3, book: book3, status: "rejected")
Order.create(user: user4, book: book4, status: "approved")
Order.create(user: user5, book: book5, status: "pending")


# Create 5 Lendings with random book, user, and due date
Lending.create(user: user1, book: book1, due_date: Date.today + 7.days, status: "pending")
Lending.create(user: user2, book: book2, due_date: Date.today + 14.days, status: "approved")
Lending.create(user: user3, book: book3, due_date: Date.today + 10.days, status: "rejected")
Lending.create(user: user3, book: book4, due_date: Date.today + 7.days, status: "approved")
Lending.create(user: user5, book: book5, due_date: Date.today + 7.days, status: "rejected")

  