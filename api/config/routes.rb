Rails.application.routes.draw do
  resources :lendings
  resources :orders
  resources :users

  #books
  resources :books, only: [:index, :show, :create, :update, :destroy]
  get '/store', to: 'books#store'
  get '/library', to: 'books#library'

  
  #carts
  resources :carts, only: [:index, :create, :update, :destroy]
end
