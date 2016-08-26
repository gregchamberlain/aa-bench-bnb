# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
minLng = -122.506960
maxLng =  -122.390973
minLat = 37.717138
maxLat = 37.803994
def random(min, max)
  rand * (max-min) + min
end

20.times do
  Bench.create!(description: Faker::Lorem.paragraph, lat: random(minLat, maxLat), lng: random(minLng, maxLng))
end
