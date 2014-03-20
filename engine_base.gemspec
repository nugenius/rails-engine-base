$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "engine_base/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "engine_base"
  s.version     = EngineBase::VERSION
  s.authors     = ["Richard Nugen"]
  s.email       = ["richard.nugen@gmail.com"]
  s.homepage    = ""
  s.summary     = "EngineBase"
  s.description = "EngineBase"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]

  s.add_dependency "rails", "~> 4.0.4"

  s.add_dependency 'jquery-rails'
  s.add_development_dependency 'simplecov'
  s.add_development_dependency 'rspec-rails'
  s.add_development_dependency 'pry'
  s.add_development_dependency "pg"
  #
  s.add_development_dependency "factory_girl_rails"
  s.add_development_dependency 'database_cleaner', '~> 1.0' # cleanup database in tests
  s.add_development_dependency "shoulda", "~> 3.5"

end
