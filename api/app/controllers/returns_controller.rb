class ReturnsController < ApplicationController
  before_action :set_return, only: %i[ show update destroy ]

  # GET /returns
  def index
    @returns = Return.all

    render json: @returns
  end

  # GET /returns/1
  def show
    render json: @return
  end

  # POST /returns
  def create
    @return = Return.new(return_params)

    if @return.save
      render json: @return, status: :created, location: @return
    else
      render json: @return.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /returns/1
  def update
    if @return.update(return_params)
      render json: @return
    else
      render json: @return.errors, status: :unprocessable_entity
    end
  end

  # DELETE /returns/1
  def destroy
    @return.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_return
      @return = Return.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def return_params
      params.require(:return).permit(:return_date, :status, :user_id, :lending_id)
    end
end
