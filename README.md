# Phase-5 Final Project
# Amazon-Reader

# Description

- This is a rails and react.js application for an online bookstore that serves both as a library and a store.

# Getting  Started

- In order to use this repo you need to have the following installed:

- OS [either: Windows 10+, Linux or MacOS

- Ruby - 3.1.+


# Installation

- To use this repo on your machine requires some simple steps

#### Alternative One

- Open a terminal / command line interface on your computer

- Clone the repo by using the following:

        -  git@github.com:Icika-max/Amazon-Reader.git

- Change directory to the repo folder:

        - cd Amazon-Reader.git

- Open it in Visual Studio Code

        - code .

(Alternate Option) Open it in any editor of your choice.

# Alternative Two

- On the top right corner of this page there is a button labelled Fork.

- Click on that button to fork the repo to your own account.

- Take on the process in Alternative One above.

- Remember to replace your username when cloning.

        - git@github.com:Icika-max/Amazon-Reader.git


# Entity Relationship Diagram

![Screenshot from 2023-05-01 17-11-54](https://user-images.githubusercontent.com/117739286/235464720-8d162ae1-be31-4b39-a6f7-1e4a2da32e22.png)

# Project SetUp

- Run and install our dependency gems in the Gemfile in the terminal:

        - bundle install


- Run the migrations:


        - rails db:migrate


- Seed the database data:


        - rails db:seed


- Run the server:


        - rails s


# React Set-up
- React dependencies

        - npm install 

- Run the react server:

        - npm run dev

  # Screenshots of Api Endpoints
  # post /users
  ![Screenshot from 2023-05-01 17-34-45](https://user-images.githubusercontent.com/117739286/235468458-e616892f-f8a6-44d3-a41c-c46cea760114.png)
  
  # post /login
  ![Screenshot from 2023-05-01 17-36-04](https://user-images.githubusercontent.com/117739286/235468671-89fb2d56-9cc9-47e8-95a4-800df2df01e3.png)

  # delete /logout
  ![Screenshot from 2023-05-01 17-37-20](https://user-images.githubusercontent.com/117739286/235468851-13e03bba-518c-4fdd-ac4e-bd550367cb6b.png)

  # Get /user_role
  ![Screenshot from 2023-05-01 17-41-29](https://user-images.githubusercontent.com/117739286/235469582-7720e782-2da1-4e29-ad91-14e896c6fc13.png)

  # Get /users
  ![Screenshot from 2023-05-01 17-24-28](https://user-images.githubusercontent.com/117739286/235466830-6e6361a9-6d67-4d67-a66a-e0b6f9b68973.png)

  # Get /books
  ![Screenshot from 2023-05-01 17-26-03](https://user-images.githubusercontent.com/117739286/235467057-02f5c1e2-7bbd-4a34-bd44-695a769ecff7.png)

  # Get /carts
  ![Screenshot from 2023-05-01 17-28-00](https://user-images.githubusercontent.com/117739286/235467519-3cd45057-6922-443e-8512-cc4eb3fd5cfd.png)

  # Get /payments
  ![Screenshot from 2023-05-01 17-30-36](https://user-images.githubusercontent.com/117739286/235467852-1189c7f5-2879-42d4-be71-520fbf9b4f7d.png)

  # Get /returns
  ![Screenshot from 2023-05-01 17-32-08](https://user-images.githubusercontent.com/117739286/235468034-0cb1e142-5ada-4e42-af78-8622d5e170a2.png)      

# User Stories

# Admin
- An administrator acts as the overload of the entire bookstore. The following are functionalities executed by the administrator.
- Auth
- Add a new book to the store.
- Update and delete a book from the store.
- Approve / Reject all book orders (purchases).
- Approve / Reject all book lending requests.
- View all books in the store and library.

# User
- A user is a person looking to purchase or borrow books.
- Auth (Login & Register )
- View all books in the store.
- View all books in the library.
- Search for books by name or genre.
- Filter books by date uploaded, price, and genre.
- Add books to the lending cart.
- Add books to the purchasing cart.
- Checkout books from individual carts.
- Pay for approved orders.
- Initiate a return requests (For books that were lent out)
- View a list of all previous purchases and lendings.

# Technologies used

- Ruby on Rails
- React
- CSS

# Authors

- This project was contributed to by:

- [Kennedy Icika](https://github.com/Icika-max)
- [Martin Ntwiga](https://github.com/ntwigamartin)
- [Dorothy Jebet](https://github.com/DOROTHY2322)
- [Munah Hassan](https://github.com/MUNAH10)
- [Feisal Bireh](https://github.com/Feisalbireh)


# License

- MIT License

Copyright (c) 2023 