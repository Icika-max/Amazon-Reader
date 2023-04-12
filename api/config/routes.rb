Rails.application.routes.draw do
  resources :admins

   #sessions
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'

   #admin_sessions
   post 'admin/login', to: 'admin_sessions#create'
  delete 'admin/logout', to: 'admin_sessions#destroy'
  post '/admin/signup', to: 'admins#create'

 
end
