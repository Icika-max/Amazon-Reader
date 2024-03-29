Rails.application.routes.draw do
  resources :user_roles
  resources :roles

  # resources :lendings
  # resources :orders
  # resources :users

  #books
  resources :books, only: [:index, :show, :create, :update, :destroy]
  get '/store', to: 'books#store'
  get '/library', to: 'books#library'

  # resources :admins

  resources :returns
  resources :payments
  resources :lendings
  resources :orders
  resources :users
  resources :books
  resources :payments, only: [:index, :new, :create, :show, :edit, :update, :destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  #  #sessions
 
    post '/users', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/me', to: 'users#show'

   #admin_sessions
   post 'admin/login', to: 'admin_sessions#create'
   delete 'admin/logout', to: 'admin_sessions#destroy'
   post '/admin/signup', to: 'admins#register'
  

  #  Routes for AuthenticationController
   post '/create_account', to: 'authentication#create_account'
   post '/login_account', to: 'authentication#login_account'
   delete '/logout_account', to: 'authentication#logout_account'

 
 
  get '/user_orders/:id', to: 'orders#user_orders'
  get '/user_lendings/:id', to: 'lendings#user_lendings'
  
  #carts
  resources :carts, only: [:index, :create, :update, :destroy]

   # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
