# frozen_string_literal: true

# Controller for handling greetings in the API version 1
module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        greetings = Greeting.order('Random()').first
        render json: greetings
      end
    end
  end
end
