class AuthenticationController < ApplicationController
  def create_account
    user = User.create(create_params)
    if user.valid?
      create_user_session(user.id)
      app_response(status_code: 201, message: "Account created successfully", body: user)
    else
      app_response(status_code: 422, message: "Invalid input", body: user.errors.full_messages)
    end
  end

  def login_account
    user = User.find_by(username: params[:username]) || User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      create_user_session(user.id)

      role = user.roles.where(name: "admin").first
      if role && role.name == "admin"
        session[:admin_user] = "admin"
      end

      app_response(message: "Log in success", body: user)
     else
    
      app_response(status_code: 401, message: "Invalid username or password")
    end
  end

  def logout_account
    delete_user_session
    delete_admin_session
    app_response(status_code: 200, message: "Log out successfully")
  end

  def render_404
    not_found
  end

  private

  def create_params
    params.permit(:username, :email, :password)
  end

  def create_user_session(user_id)
    session[:user_id] = user_id
  end

  def delete_user_session
    session.delete :user_id
  end

  def delete_admin_session 
    session.delete :admin_user
  end
end


# class AuthenticationController < ApplicationController
#     def create_account
#       user = User.create(create_params)
#       if user.valid?
#         create_user_session(user.id)
#         app_response(status_code: 201, message: "Account created successfully", body: user)
#       else
#         app_response(status_code: 422, message: "Invalid input", body: user.errors.full_messages)
#       end
#     end
  
#     def login_account
#       # user = User.find_by(email: params[:email])
#       user = User.find_by(username: params[:username]) || User.find_by(email: params[:email])
#       if user&.authenticate(params[:password])
#         create_user_session(user.id)
        
#         #check for admin
#         role = user.roles.where(name: "admin").first
#         if role.name == "admin"
#           session[:admin_user] = "admin"
#         end
        
#         app_response(message: "Log in success", body: user)
#       else
#         app_response(status_code: 401, message: "Invalid username or password")
#       end
#     end
#     # def login_account
#     #     user = User.find_by(email: params[:email])
      
#     #     if user && user.authenticate(params[:password])
#     #       role = user.roles.find_by(name: 'admin')
#     #       if role
#     #         # successful login logic
#     #       else
#     #         # handle error when user doesn't have a role assigned
#     #         flash[:error] = "You don't have the necessary permissions to access this page."
#     #         redirect_to root_path
#     #       end
#     #     else
#     #       # handle error when login fails
#     #       flash[:error] = "Invalid email/password combination."
#     #       render :new
#     #     end
#     #   end
      
  
#     def logout_account
#       delete_user_session
#       delete_admin_session
#       app_response(status_code: 200, message: "Log out successfully")
#     end
  
#     # Render 404 page for unmapped routes
#     def render_404
#       not_found
#     end
  
#     private
  
#     def create_params
#       params.permit(:username, :email, :password)
#     end
  
#     def create_user_session(user_id)
#       session[:user_id] ||= user_id
#     end
  
#     def delete_user_session
#       session.delete :user_id
#     end
  
#     def delete_admin_session 
#       session.delete :admin_user
#     end
#   end