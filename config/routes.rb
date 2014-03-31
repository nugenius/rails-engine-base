Atlas::Engine.routes.draw do
  get "assets/index"
  get '*ember' => 'assets#index'
  root :to => 'assets#index'
end
