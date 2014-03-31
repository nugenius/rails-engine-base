Atlas::Engine.routes.draw do
  get "assets/index"
  root :to => 'assets#index'
end
