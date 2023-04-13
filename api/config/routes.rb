Rails.application.routes.draw do

  resources :admins

  resources :lendings
  resources :orders
  resources :users
  resources :books

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


   #sessions
   post '/users', to: 'users#create'
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'

   #admin_sessions
   post 'admin/login', to: 'admin_sessions#create'
  delete 'admin/logout', to: 'admin_sessions#destroy'
  post '/admin/signup', to: 'admins#create'

 
end
