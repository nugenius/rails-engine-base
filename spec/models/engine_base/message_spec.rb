require 'spec_helper'

module EngineBase
  describe Message do
    it {

      should allow_value('r@r.com').for(:email)
      should_not allow_value('r').for(:email)

    }
  end
end
