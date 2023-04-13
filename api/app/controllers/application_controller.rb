class ApplicationController < ActionController::API
    def authorized
        render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
