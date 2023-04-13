class Return < ApplicationRecord
  belongs_to :user
  belongs_to :lending

  enum return_status: { not_returned: 0, returned: 1 }
end
