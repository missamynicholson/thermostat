require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions

  set :public_folder, proc{ File.join(root)}

  post '/temperature' do
    session[:temperature] = params[:temp]
  end

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    session[:temperature] || 20
  end

  get '/' do
      File.read('thermostat.html')
  end

  run! if app_file == $0
end
