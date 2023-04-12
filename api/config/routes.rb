Rails.application.routes.draw do
  resources :admins
  
   #sessions
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'
 
end
