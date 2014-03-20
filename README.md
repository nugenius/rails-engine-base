engine-base
===========

# What is it

A basic Rails Engine which includes RSpec, Shoulda and Factory Girl.

# Supported Ruby Versions

* ~> 2.0.0

# Installation

```$git clone https://github.com/nugenius/engine-base.git```

One of the great features of engines is the management of namespacing. Basically, each engine operates in it's own namespace.

In order to facilitate this, certain variables and a number of the directories will be named after your engine namespace.

Below is a list of required updates to establish your namespace:

**Rename Directories**

Rename each directory named 'engine_base' with the name of [your_namespace]

For instance, rename [root]/assets/images/engine_base to [root]/assets/images/your_namespace

* [root]/assets/images/engine_base

* [root]/assets/javascripts/engine_base

* [root]/assets/stylesheets/engine_base

* [root]/controllers/engine_base

* [root]/helpers/engine_base

* [root]/models/engine_base

* [root]/views/layouts/engine_base

* [root]/lib/engine_base

* [root]/spec/models/engine_base

*Pay Special Attention to these paths*

* [root]/lib/engine_base.rb -> [root]/lib/[your_namespace].rb

* [root]/lib/tasks/engine_base_tasks.rake -> [root]/lib/tasks/[your_namespace]_tasks.rake

* [root]/engine_base.gemspec -> [root]/[your_namespace].gemspec


**Replace Strings**

Perform the follow search and replace using Case Sensitivity

* engine_base -> [your_namespace]

* EngineBase -> [YourNamespace]


**Update your bundle**

```$ bundle install```

**Run Message Test**

A model named Message has been provided in order to run a simple test. From your console at the root of your new engine run the following:

```
$ rspec

or

$ rspec spec/
