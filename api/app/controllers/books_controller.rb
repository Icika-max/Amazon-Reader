class BooksController < ApplicationController
  before_action :authorize_admin, except: [:show, :index]
  before_action :set_book, only: %i[ show update destroy ]
  before_action :authorized, only: [:show]



  # GET /books
  def index
    @books = Book.all

    render json: @books
  end


  # GET all books in store
  def store
    @store_books = Book.where(location: 'store')
    render json: @store_books
  end

  # GET all books in library
  def library
    @library_books = Book.where(location: 'library')
    render json: @library_books
  end


  # GET /books/1
  def show
    render json: @book
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :author, :description, :rating, :genre, :price, :image_url, :location)
    end
end
