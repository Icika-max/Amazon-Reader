Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :books
  resources :carts, only: [:index, :create, :update, :destroy]
end
