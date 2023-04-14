require "test_helper"

class BooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @book = books(:one)
  end

  test "should get index" do
    get books_url, as: :json
    assert_response :success
  end

  test "should create book" do
    assert_difference("Book.count") do
      post books_url, params: { book: { author: @book.author, description: @book.description, genre: @book.genre, image_url: @book.image_url, price: @book.price, rating: @book.rating, title: @book.title } }, as: :json
    end

    assert_response :created
  end

  test "should show book" do
    get book_url(@book), as: :json
    assert_response :success
  end

  test "should update book" do
    patch book_url(@book), params: { book: { author: @book.author, description: @book.description, genre: @book.genre, image_url: @book.image_url, price: @book.price, rating: @book.rating, title: @book.title } }, as: :json
    assert_response :success
  end

  test "should destroy book" do
    assert_difference("Book.count", -1) do
      delete book_url(@book), as: :json
    end

    assert_response :no_content
  end
<<<<<<< HEAD
  # test "the truth" do
  #   assert true
  # end
=======
>>>>>>> 9bb10686b3331fbe0457ef32f30d591ce46c2844
end
