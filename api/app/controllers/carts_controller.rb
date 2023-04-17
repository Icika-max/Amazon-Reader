class CartsController < ApplicationController

    # Get items in cart
    def index
        @carts_books = Cart.all
        render json: @carts_books
    end

    # POST item to cart
    def create
        @cart = Cart.create(carts_params)
        if @cart.valid?
            render json: @cart, status: :ok
        else
            render json: {error: "invalid"}, status: :unprocessable_entity
        end
    end

    # PATCH quantity of item in cart
    def update
        cart = Cart.find(params[:id])
        cart.update(carts_params)
        render json: cart, status: :ok
    end

    # DELETE item from cart
    def destroy
        cart = Cart.find(params[:id])
        cart.destroy
        render json: {message: 'item removed'}, head: :no_content
    end

    private

    def carts_params
        params.permit(:quantity, :price, :book_id, :user_id)
    end
end
