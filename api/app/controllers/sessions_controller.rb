class SessionsController < ApplicationController
    def create
        user = User.find_by(name: params[:username])
        if user&.authenticate(params[:password])
          session[:User_id] = user.id
          render json: user, status: :created
        else
          render json: { error: 'user not found' }, status: :not_found
        end
      end
    
      def destroy
        session.delete :user_id
        render json: { message: 'user has logged out' }, status: 200
      end
    
      private
    
      def user_params
        params.permit(:username, :email, :password)
    end
end
