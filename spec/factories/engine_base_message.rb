FactoryGirl.define do
  factory :tribal_email, :class => 'Atlas::Message' do
    name 'test spec'
    email 'testemail@testing.com'
  end
end
