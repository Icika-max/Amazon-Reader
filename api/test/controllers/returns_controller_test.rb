require "test_helper"

class ReturnsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @return = returns(:one)
  end

  test "should get index" do
    get returns_url, as: :json
    assert_response :success
  end

  test "should create return" do
    assert_difference("Return.count") do
      post returns_url, params: { return: { lending_id: @return.lending_id, return_date: @return.return_date, status: @return.status, user_id: @return.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show return" do
    get return_url(@return), as: :json
    assert_response :success
  end

  test "should update return" do
    patch return_url(@return), params: { return: { lending_id: @return.lending_id, return_date: @return.return_date, status: @return.status, user_id: @return.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy return" do
    assert_difference("Return.count", -1) do
      delete return_url(@return), as: :json
    end

    assert_response :no_content
  end
end
