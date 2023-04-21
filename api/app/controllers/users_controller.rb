class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy] 
    
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  before_action :authorize_admin, except: [:show, :update, :create]
  before_action :authorize, except: [:create]

  rescue_from ActiveRecord::RecordNotFound, with: :user_record_missing
  rescue_from ActiveRecord::RecordInvalid, with: :validation_error

  # def index 
  #   user = User.all 
  #   render json: user, status: :ok
  # end

  # def show 
  #   user = User.find(params[:id])
  #   render json: user, status: :ok
  # end
  def index 
    @users = User.all.includes(:roles)
    render json: @users, include: { roles: { only: :name } }, status: :ok
  end
  
  def show 
    @user = User.find(params[:id])
    render json: @user, include: { roles: { only: :name } }, status: :ok
  end
  
  
  def create
    user = User.new(user_params)
    if user.save
      # log in the user automatically
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update 
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy 
    user = User.find(params[:id])
    user.destroy 
    head :no_content
  end

  private

  def user_params 
    params.permit(:username, :password, :email)
  end

  def user_record_missing 
    render json: { "error": "User not found"}, status: :not_found
  end

  def validation_error 
    render json:  {"errors": ["validation errors"]}, status: :unprocessable_entity
  end
end
