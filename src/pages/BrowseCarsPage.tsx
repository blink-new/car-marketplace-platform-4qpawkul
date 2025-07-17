import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Grid, List, MapPin, Calendar, Gauge, Fuel, Users, Star, Heart, ArrowRight, SlidersHorizontal } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Slider } from '../components/ui/slider'
import { Checkbox } from '../components/ui/checkbox'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet'
import { Separator } from '../components/ui/separator'

const BrowseCarsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [selectedMakes, setSelectedMakes] = useState<string[]>([])
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([])

  // Mock data for cars
  const cars = [
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
      features: ['Autopilot', 'Premium Interior', 'Supercharging'],
      seller: 'Tesla Certified',
      isFeatured: true
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
      features: ['AWD', 'Leather Seats', 'Navigation'],
      seller: 'BMW Dealership',
      isFeatured: false
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
      features: ['Quattro', 'Virtual Cockpit', 'Premium Sound'],
      seller: 'Private Seller',
      isFeatured: true
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
      features: ['Honda Sensing', 'Apple CarPlay', 'Backup Camera'],
      seller: 'Honda Certified',
      isFeatured: false
    },
    {
      id: 5,
      title: '2022 Ford Mustang',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=400&h=300&fit=crop',
      year: 2022,
      mileage: 12000,
      fuel: 'Gasoline',
      transmission: 'Manual',
      location: 'Miami, FL',
      rating: 4.4,
      reviews: 15,
      features: ['Performance Package', 'Premium Audio', 'Sport Seats'],
      seller: 'Ford Dealership',
      isFeatured: false
    },
    {
      id: 6,
      title: '2021 Toyota Prius',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
      year: 2021,
      mileage: 22000,
      fuel: 'Hybrid',
      transmission: 'Automatic',
      location: 'Seattle, WA',
      rating: 4.3,
      reviews: 28,
      features: ['Hybrid System', 'Safety Sense', 'Wireless Charging'],
      seller: 'Toyota Certified',
      isFeatured: false
    }
  ]

  const makes = ['Tesla', 'BMW', 'Audi', 'Honda', 'Ford', 'Toyota']
  const fuelTypes = ['Gasoline', 'Electric', 'Hybrid', 'Diesel']

  const handleMakeChange = (make: string, checked: boolean) => {
    if (checked) {
      setSelectedMakes([...selectedMakes, make])
    } else {
      setSelectedMakes(selectedMakes.filter(m => m !== make))
    }
  }

  const handleFuelTypeChange = (fuelType: string, checked: boolean) => {
    if (checked) {
      setSelectedFuelTypes([...selectedFuelTypes, fuelType])
    } else {
      setSelectedFuelTypes(selectedFuelTypes.filter(f => f !== fuelType))
    }
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={100000}
            step={1000}
            className="mb-3"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0].toLocaleString()}</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Make */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Make</h3>
        <div className="space-y-2">
          {makes.map((make) => (
            <div key={make} className="flex items-center space-x-2">
              <Checkbox
                id={make}
                checked={selectedMakes.includes(make)}
                onCheckedChange={(checked) => handleMakeChange(make, checked as boolean)}
              />
              <label htmlFor={make} className="text-sm text-muted-foreground cursor-pointer">
                {make}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Fuel Type */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Fuel Type</h3>
        <div className="space-y-2">
          {fuelTypes.map((fuelType) => (
            <div key={fuelType} className="flex items-center space-x-2">
              <Checkbox
                id={fuelType}
                checked={selectedFuelTypes.includes(fuelType)}
                onCheckedChange={(checked) => handleFuelTypeChange(fuelType, checked as boolean)}
              />
              <label htmlFor={fuelType} className="text-sm text-muted-foreground cursor-pointer">
                {fuelType}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const CarCard = ({ car }: { car: typeof cars[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          {car.isFeatured && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-background/80 hover:bg-background">
            <Heart className="h-4 w-4" />
          </Button>
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

        <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          <span>{car.location}</span>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          Seller: {car.seller}
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
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse Cars
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover your perfect vehicle from our extensive collection
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by make, model, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="year-old">Year: Oldest First</SelectItem>
                  <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {cars.length} results
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-card rounded-lg border p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <h2 className="font-semibold text-foreground">Filters</h2>
                </div>
                <FilterSidebar />
              </div>
            </div>
          </div>

          {/* Cars Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Cars
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseCarsPage