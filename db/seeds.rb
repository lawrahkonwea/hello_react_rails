# frozen_string_literal: true

greetings = [
  'Hello World!',
  'Hello Amaka!'
]

greetings.each do |message|
  Greeting.create(message:)
end
