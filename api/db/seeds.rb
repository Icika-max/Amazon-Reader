


#Create admins
admin = Admin.create(username: 'Dorothy', email: 'dorothy@example.com', password_digest: 'password')


# create some users
user1 = User.create(username: "John", email: "john@example.com", password_digest: 'password1')
user2 = User.create(username: "Jane", email: "jane@example.com", password_digest: 'password2')
user3 = User.create(username: "Ken", email: "ken@example.com", password_digest: 'password3')
user4 = User.create(username: "Icika", email: "icika@example.com", password_digest: 'password4')
user5 = User.create(username: "Rose", email: "rose@example.com", password_digest: 'password5')



book1 = Book.create(title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.", rating: 4.5, genre: "Fiction", price: 9.99, image_url: "https://i.pinimg.com/564x/11/91/8f/11918f3c356159ed09856eb1664f9bff.jpg", location: "store")

book2 = Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.", rating: 4.8, genre: "Fiction", price: 0, image_url: "https://i.pinimg.com/564x/b3/43/3f/b3433fb70fe90ba77c06d385dc5e2fe5.jpg", location: "library")

book3 = Book.create(title: "The Hobbit", author: "J.R.R. Tolkien", description: "Bilbo Baggins, a hobbit, becomes a burglar when he is asked to help reclaim treasure from a dragon.", rating: 4.7, genre: "Fantasy", price: 14.99, image_url: "https://i.pinimg.com/564x/76/9f/51/769f51d079c66c1a9317b6f5df4859b5.jpg", location: "store")

book4 = Book.create(title: "The Catcher in the Rye", author: "J.D. Salinger", description: "The story of Holden Caulfield, a teenager who wanders around New York City after being expelled from an elite prep school.", rating: 4.2, genre: "Fiction", price: 0, image_url: "https://i.pinimg.com/564x/b1/1e/da/b11eda6bcd0eb6dfb7acde327f89e59d.jpg", location: "library")

book5 = Book.create(title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society, in which a man named Winston Smith rebels against the oppressive regime.", rating: 4.6, genre: "Science Fiction", price: 10.99, image_url: "https://i.pinimg.com/564x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg", location: "store")





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

#create cart
Cart.create(quantity: 2, price: 9.99, book_id: 1, user_id: 1)
Cart.create(quantity: 1, price: 0, book_id: 2, user_id: 2)



Order.create(user: user1, book: book1, status: "approved")
Order.create(user: user2, book: book2, status: "pending")
Order.create(user: user3, book: book3, status: "rejected")
Order.create(user: user4, book: book4, status: "approved")
Order.create(user: user5, book: book5, status: "pending")

Payment.create([
  { amount: 50.0, status: 'paid', user_id: 1, order_id: 1 },
  { amount: 20.0, status: 'paid', user_id: 2, order_id: 2 },
  { amount: 15.0, status: 'pending', user_id: 3, order_id: 3 },
  { amount: 40.0, status: 'paid', user_id: 4, order_id: 4 }
])


Return.create!(lending_id: 3,return_date: Date.today,status: :returned,user_id: 2)
Return.create!(lending_id: 4,return_date: Date.today,status: :not_returned,user_id: 1)
Return.create!(lending_id: 5,return_date: Date.today,status: :returned,user_id: 3)
