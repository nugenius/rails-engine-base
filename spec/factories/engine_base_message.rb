FactoryGirl.define do
  factory :tribal_email, :class => 'EngineBase::Message' do
    name 'test spec'
    email 'testemail@testing.com'
  end
end
