require "test_helper"

class LendingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lending = lendings(:one)
  end

  test "should get index" do
    get lendings_url, as: :json
    assert_response :success
  end

  test "should create lending" do
    assert_difference("Lending.count") do
      post lendings_url, params: { lending: { book_id: @lending.book_id, due_date: @lending.due_date, status: @lending.status, user_id: @lending.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show lending" do
    get lending_url(@lending), as: :json
    assert_response :success
  end

  test "should update lending" do
    patch lending_url(@lending), params: { lending: { book_id: @lending.book_id, due_date: @lending.due_date, status: @lending.status, user_id: @lending.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy lending" do
    assert_difference("Lending.count", -1) do
      delete lending_url(@lending), as: :json
    end

    assert_response :no_content
  end
end
