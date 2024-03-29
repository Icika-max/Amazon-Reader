class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy]
  # before_action :authorize_admin, except: [:show,:index, :create, :user_orders]

  # GET /orders
  def index
    @orders = Order.all
    # .where(user_id: session[:user_id])
    render json: @orders
  end

  # GET /orders/1
  def user_orders
    orders = Order.where(user_id: params[:id])
    render json: orders
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:book_id, :user_id, :status)
    end
end
