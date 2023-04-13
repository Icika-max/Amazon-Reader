class ReturnsController < ApplicationController
  before_action :set_return, only: [:show, :edit, :update, :destroy]

  def index
    @returns = Return.all
  end

  def new
    @return = Return.new
  end

  def create
    @return = Return.new(return_params)
    @return.user = current_user # assuming you have a current_user method

    if @return.save
      flash[:success] = "Return created"
      redirect_to @return
    else
      flash[:error] = "Error creating return"
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @return.update(return_params)
      flash[:success] = "Return updated"
      redirect_to @return
    else
      flash[:error] = "Error updating return"
      render :edit
    end
  end

  def destroy
    @return.destroy
    flash[:success] = "Return deleted"
    redirect_to returns_path
  end

  private

  def set_return
    @return = Return.find(params[:id])
  end

  def return_params
    params.require(:return).permit(:book_id, :return_status, :lending_id, :return_date)
  end
end
