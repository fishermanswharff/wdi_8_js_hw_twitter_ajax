require 'pry-byebug'
class TweetsController < ApplicationController

  def show
    username = params[:id]
    tweets = TwitterClient.user_timeline(username)
    render json: {tweets: tweets}, status: 200
  end
end