class SessionsController < ApplicationController
   # POST /login
   def create
    user = User.find_by(username: params[:username]) || User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: 'user not found' }, status: :not_found
    end
  end
end

  

   # DELETE /logout
  def destroy
    session.delete :user_id
    render json: { message: 'user has logged out' }, status: 200
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end
end
