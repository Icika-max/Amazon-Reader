class LendingsController < ApplicationController
  before_action :set_lending, only: %i[ show update destroy ]
  # before_action :authorize_admin, except: [:show, :index, :create]

  # GET /lendings
  def index
    # @lending = Lending.all
    @lendings = Lending.all.where(user_id: session[:user_id])

    render json: @lendings
  end

  # GET /lendings/1
  def show
    render json: @lending
  end

  # POST /lendings
  def create
    @lending = Lending.new(lending_params)

    if @lending.save
      render json: @lending, status: :created, location: @lending
    else
      render json: @lending.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lendings/1
  def update
    if @lending.update(lending_params)
      render json: @lending
    else
      render json: @lending.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lendings/1
  def destroy
    @lending.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lending
      @lending = Lending.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def lending_params
      params.require(:lending).permit(:book_id, :user_id, :due_date, :status)
    end
end
