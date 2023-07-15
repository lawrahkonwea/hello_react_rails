# frozen_string_literal: true

# Controller for managing greetings.
class GreetingsController < ApplicationController
  def random_greeting
    @greetings = Greeting.all
  end
end
