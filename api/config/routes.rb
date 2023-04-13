Rails.application.routes.draw do
  resources :lendings
  resources :orders
  resources :users
  resources :books
  resources :payments, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  resources :returns, only: [:index, :new, :create, :show, :edit, :update, :destroy]


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
end
