class AdminSessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_is_invalid
    # POST /login
    def create
      admin = Admin.find_by(username: params[:username]) || Admin.find_by(email: params[:username])
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

    def record_is_invalid(invalid)
      render json: {
               errors: invalid.record.errors.full_messages,
             },
             status: :unprocessable_entity
    end
  
    def record_not_found
      render json: { error: 'admin not found' }, status: :not_found
    end
  
  end
  