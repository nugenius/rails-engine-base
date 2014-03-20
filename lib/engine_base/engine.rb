module EngineBase
  class Engine < ::Rails::Engine
    isolate_namespace EngineBase
    
    config.generators do |g|
      g.test_framework :rspec, :view_specs => false, :fixture => false
      g.fixture_replacement :factory_girl, :dir => 'spec/factories'

    end
 
    silence_warnings do
      begin
        require 'pry'
        IRB = Pry
        rescue LoadError
      end
    end
  end
end
