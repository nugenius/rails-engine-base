rails-engine-base
===========

# Rails 4.0.4

# What is it

A basic Rails Engine which includes RSpec, Shoulda and Factory Girl.

# Supported Ruby Versions

* ~> 2.0.0

# Installation

```$git clone https://github.com/nugenius/engine-base.git```

One of the great features of engines is the management of namespacing. Basically, each engine operates in it's own namespace.

In order to facilitate this, certain variables and a number of the directories will be named after your engine namespace.

To rename your engine, a convenience rake task rename has been provided. From the root of the engine directory, run:
```$rake app:engine:rename[your_new_underscored_name]```

If you have already renamed this project before, you must provide a second argument without spaces

```$rake app:engine:rename[your_new_underscored_name,your_old_underscored_name]```

This will automatically rename the necessary files and directories, and also substitute all of the underscored and CamelCased uses of the default engine class Atlas (or YourOldUnderscoredName) to the CamelCased version of your_new_underscored_name (i.e., YourNewUnderscoredName)

**Update your bundle**

```$ bundle install```

**Run Message Test**

A model named Message has been provided in order to run a simple test. From your console at the root of your new engine run the following:

```
$ rspec

or

$ rspec spec/
