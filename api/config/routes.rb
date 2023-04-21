Rails.application.routes.draw do

  resources :lendings
  resources :orders
  resources :users

  #books
  resources :books, only: [:index, :show, :create, :update, :destroy]
  get '/store', to: 'books#store'
  get '/library', to: 'books#library'

  resources :admins

  resources :returns
  resources :payments
  resources :lendings
  resources :orders
  resources :users
  resources :books
  resources :payments, only: [:index, :new, :create, :show, :edit, :update, :destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


   #sessions
   post '/users', to: 'users#create'
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'

   #admin_sessions
   post 'admin/login', to: 'admin_sessions#create'
   delete 'admin/logout', to: 'admin_sessions#destroy'
   post '/admin/signup', to: 'admins#register'

 
 

  
  #carts
  resources :carts, only: [:index, :create, :update, :destroy]
end
