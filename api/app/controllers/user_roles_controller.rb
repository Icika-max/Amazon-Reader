class UserRolesController < ApplicationController
  # before_action :authorize_admin

  rescue_from ActiveRecord::RecordNotFound, with: :user_role_record_missing
  rescue_from ActiveRecord::RecordInvalid, with: :validation_error

  def create 
      user_role = UserRole.create!(user_role_params)
      if user_role.valid? 
          render json: user_role, status: :created
      else 
          render json:{error:"Invalid user_role detail"}, status: :unprocessable_entity
  
      end
     end
  
     def index 
      user_role =UserRole.all 
      render json: user_role, status: :ok
     end
  
     def show 
      user_role = UserRole.find(params[:id])
      render json: user_role, status: :ok
     end
  
     def update 
      user_role =UserRole.find(params[:id])
      user_role.update!(user_role_params)
      render json: user_role, status: :accepted
     end

     def destroy 
      user_role=UserRole.find(params[:id])
      user_role.destroy 
      head :no_content
     end
  
     private
  
     def user_role_params 
      params.permit(:user_id,:role_id)
     end

     def user_role_record_missing 
      render json: { "error": "User_role not found"}, status: :not_found
     end
  
     def validation_error 
      render json:  {"errors": ["validation errors"]}, status: :unprocessable_entity
     end
  
end
