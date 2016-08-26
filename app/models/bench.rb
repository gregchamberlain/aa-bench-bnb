class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
    minLat = bounds['southWest']['lat']
    maxLat = bounds['northEast']['lat']
    minLng = bounds['southWest']['lng']
    maxLng = bounds['northEast']['lng']
    Bench.where('lat > ? AND lat < ? AND lng > ? AND lng < ?', minLat, maxLat, minLng, maxLng)
  # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  #... query logic goes here
  end

end
