class PaymentsController < ApplicationController
  def index
    @payments = Payment.all
  end

  def new
    @payment = Payment.new
    @order = Order.find(params[:order_id])
  end

  def create
    @payment = Payment.new(payment_params)
    @order = Order.find(params[:order_id])
    @payment.order = @order
    @payment.user = current_user # assuming you have a current_user method

    if @payment.save
      payment = Payment.first
      order = payment.order
      user = payment.user

      flash[:success] = "Payment successful"
      redirect_to order_path(@order)
    else
      flash[:error] = "Payment failed"
      render :new
    end
  end

  def show
    @payment = Payment.find(params[:id])
  end

  def edit
    @payment = Payment.find(params[:id])
  end

  def update
    @payment = Payment.find(params[:id])

    if @payment.update(payment_params)
      flash[:success] = "Payment updated"
      redirect_to payment_path(@payment)
    else
      flash[:error] = "Payment update failed"
      render :edit
    end
  end

  def destroy
    @payment = Payment.find(params[:id])
    @payment.destroy

    flash[:success] = "Payment deleted"
    redirect_to payments_path
  end

  private

  def payment_params
    params.require(:payment).permit(:amount, :payment_date, :payment_status)
  end
end
