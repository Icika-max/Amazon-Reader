class AdminsController < ApplicationController
    #a new admin
    def create
        admin = Admin.create!(admin_params)
        session[:admin_id] = admin.id
        render json: admin, status: :created
      end
end
