Rails.application.routes.draw do
<<<<<<< HEAD
  resources :admins
=======
  resources :lendings
  resources :orders
  resources :users
  resources :books

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
>>>>>>> 1f17c85d96277aab51fa1144cf5b79f3a131376f

   #sessions
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'

   #admin_sessions
   post 'admin/login', to: 'admin_sessions#create'
  delete 'admin/logout', to: 'admin_sessions#destroy'
  post '/admin/signup', to: 'admins#create'

 
end
