import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Calendar, Gauge, Fuel, Users, Star, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data for featured cars
  const featuredCars = [
    {
      id: 1,
      title: '2022 Tesla Model 3',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
      year: 2022,
      mileage: 15000,
      fuel: 'Electric',
      transmission: 'Automatic',
      location: 'San Francisco, CA',
      rating: 4.8,
      reviews: 24,
      features: ['Autopilot', 'Premium Interior', 'Supercharging']
    },
    {
      id: 2,
      title: '2021 BMW X5',
      price: 62000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
      year: 2021,
      mileage: 28000,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      location: 'Los Angeles, CA',
      rating: 4.6,
      reviews: 18,
      features: ['AWD', 'Leather Seats', 'Navigation']
    },
    {
      id: 3,
      title: '2023 Audi A4',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
      year: 2023,
      mileage: 8000,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      location: 'New York, NY',
      rating: 4.7,
      reviews: 31,
      features: ['Quattro', 'Virtual Cockpit', 'Premium Sound']
    },
    {
      id: 4,
      title: '2020 Honda Civic',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop',
      year: 2020,
      mileage: 35000,
      fuel: 'Gasoline',
      transmission: 'Manual',
      location: 'Chicago, IL',
      rating: 4.5,
      reviews: 42,
      features: ['Honda Sensing', 'Apple CarPlay', 'Backup Camera']
    }
  ]

  const stats = [
    { label: 'Cars Available', value: '12,500+' },
    { label: 'Happy Customers', value: '25,000+' },
    { label: 'Cities Covered', value: '150+' },
    { label: 'Years Experience', value: '15+' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Find Your Perfect
              <span className="text-primary block">Dream Car</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover thousands of quality vehicles from trusted sellers. 
              Buy with confidence or sell with ease on our secure platform.
            </p>

            {/* Search Bar */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search by make, model, or keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="sf">San Francisco, CA</SelectItem>
                    <SelectItem value="la">Los Angeles, CA</SelectItem>
                    <SelectItem value="ny">New York, NY</SelectItem>
                    <SelectItem value="chicago">Chicago, IL</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="lg" className="h-12">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Vehicles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked premium vehicles from our trusted sellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredCars.map((car) => (
              <Card key={car.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {car.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {car.rating} ({car.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-primary mb-3">
                    ${car.price.toLocaleString()}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{car.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Gauge className="h-3 w-3" />
                      <span>{car.mileage.toLocaleString()} mi</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Fuel className="h-3 w-3" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-3 w-3" />
                    <span>{car.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {car.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {car.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{car.features.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <Link to={`/car/${car.id}`}>
                    <Button className="w-full group">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/browse">
              <Button variant="outline" size="lg">
                View All Cars
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Sell Your Car?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            List your vehicle in minutes and reach thousands of potential buyers. 
            Our platform makes selling fast, safe, and profitable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sell">
              <Button size="lg" variant="secondary">
                List Your Car
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage