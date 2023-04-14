class AdminsController < ApplicationController

  before_action :authorized

  # Register a new admin
  def register
    admin = Admin.new(admin_params)
    if admin.save
      session[:admin_id] = admin.id
      render json: admin, status: :created
    else
      # Check for specific error message
      if admin.errors[:username].include?("has already been taken")
        render json: { error: 'Admin already exists' }, status: :unprocessable_entity
      else
        # Render all error messages
        render json: { error: admin.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
    end
  end
  
  # # Add a new book
  # def create
  #   @book = Book.new(book_params)
  #   if @book.save
  #     render json: @book, status: :created
  #   else
  #     render json: { error: @book.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  # # Update a book from the store
  # def update
  #   if @book.update(book_params)
  #     render json: @book, status: :ok
  #   else
  #     render json: { error: @book.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  # # Delete from the store
  # def destroy
  #   @book.destroy
  #   head :no_content
  # end

  # # Approve all orders
  # def approve_all_orders
  #   Order.update_all(approved: true)
  #   head :no_content
  # end

  # # Reject all orders
  # def reject_all_orders
  #   Order.update_all(approved: false)
  #   head :no_content
  # end

  # # Route: PUT /lendings/approve_all
  # # Approve all lendings
  # def approve_all_lendings
  #   Lending.update_all(approved: true)
  #   head :no_content
  # end

  # # Route: PUT /lendings/reject_all
  # # Reject all lendings
  # def reject_all_lendings
  #   Lending.update_all(approved: false)
  #   head :no_content
  # end

  # # Route: GET /books
  # # Get all books in store
  # def index
  #   @books = Book.all
  #   render json: @books, status: :ok
  # end

  # # Route: GET /library/books
  # # Get all books in library
  # def library_books
  #   @books = Book.where(in_library: true)
  #   render json: @books, status: :ok
  # end

  private

  # # Set permitted admin parameters
  # def admin_params
  #   params.permit(:username, :email, :password)
  # end

  # Set permitted book parameters
  def book_params
    params.permit(:title, :author, :description, :price, :rating, :genre, :image_url)
  end

  # Find book by ID
  # def set_book
  #   @book = Book.find(params[:id])
  # end

end
