class AdminSessionsController < ApplicationController
    # POST /login
    def create
      admin = Admin.find_by(username: params[:username_or_email]) || Admin.find_by(email: params[:username_or_email])
      if admin && admin.authenticate(params[:password])
        session[:admin_id] = admin.id
        render json: admin, status: :created
      else
        render json: { error: 'admin not found' }, status: :not_found
      end
    end
  
    # DELETE /logout
    def destroy
      session.delete :admin_id
      render json: { message: 'admin has logged out' }, status: 200
    end
  
    private
      
    def admin_params
      params.permit(:username, :email, :password)
    end
  end
  