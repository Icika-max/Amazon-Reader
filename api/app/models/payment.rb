class Payment < ApplicationRecord
  belongs_to :user
  belongs_to :order

  # Fields
  validates :amount, presence: true
  validates :payment_date, presence: true
  validates :payment_status, presence: true
end
