class AdminsController < ApplicationController
  before_action :authorized
    #a new admin
    def create
      admin = Admin.new(admin_params)
      if admin.save
        session[:admin_id] = admin.id
        render json: admin, status: :created
      else
        if admin.errors[:username].include?("has already been taken")
          render json: { error: 'Admin already exists' }, status: :unprocessable_entity
        else
          render json: { error: admin.errors.full_messages.join(", ") }, status: :unprocessable_entity
        end
      end
    end
    

      private

  def admin_params
    params.permit(:username, :email, :password)
  end

end
