import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Share2, Calendar, Gauge, Fuel, Users, MapPin, Star, Phone, Mail, MessageCircle, Shield, CheckCircle, Camera } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

const CarDetailsPage = () => {
  const { id } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock car data - in real app, fetch based on id
  const car = {
    id: 1,
    title: '2022 Tesla Model 3',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
    ],
    year: 2022,
    make: 'Tesla',
    model: 'Model 3',
    mileage: 15000,
    fuel: 'Electric',
    transmission: 'Automatic',
    drivetrain: 'RWD',
    exterior: 'Pearl White Multi-Coat',
    interior: 'Black Premium Interior',
    location: 'San Francisco, CA',
    rating: 4.8,
    reviews: 24,
    vin: '5YJ3E1EA4NF123456',
    features: [
      'Autopilot',
      'Premium Interior',
      'Supercharging',
      'Glass Roof',
      'Premium Audio',
      'Mobile Connector',
      'Heated Seats',
      'Navigation',
      'Bluetooth',
      'Backup Camera',
      'Keyless Entry',
      'Climate Control'
    ],
    description: 'This stunning 2022 Tesla Model 3 is in excellent condition with low mileage. Features the latest Autopilot technology, premium interior, and access to Tesla\'s Supercharger network. Perfect for eco-conscious drivers who don\'t want to compromise on performance or luxury.',
    seller: {
      name: 'Tesla Certified',
      type: 'Dealer',
      rating: 4.9,
      reviews: 156,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      verified: true,
      responseTime: '< 1 hour',
      location: 'San Francisco, CA'
    },
    specifications: {
      engine: 'Electric Motor',
      power: '283 hp',
      torque: '317 lb-ft',
      acceleration: '5.3 seconds (0-60 mph)',
      topSpeed: '140 mph',
      range: '272 miles',
      chargingTime: '8.5 hours (240V)',
      seating: '5 passengers',
      cargo: '15 cu ft',
      warranty: '4 years / 50,000 miles'
    },
    history: {
      accidents: 0,
      owners: 1,
      serviceRecords: 3,
      lastService: '2024-01-15'
    }
  }

  const relatedCars = [
    {
      id: 2,
      title: '2021 Tesla Model Y',
      price: 52000,
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=300&h=200&fit=crop',
      year: 2021,
      mileage: 22000
    },
    {
      id: 3,
      title: '2023 Tesla Model S',
      price: 89000,
      image: 'https://images.unsplash.com/photo-1617886322207-c6d8ac6eeef3?w=300&h=200&fit=crop',
      year: 2023,
      mileage: 8000
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/browse">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Browse
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={car.images[currentImageIndex]}
                    alt={car.title}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button variant="secondary" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-background/80">
                      <Camera className="h-3 w-3 mr-1" />
                      {currentImageIndex + 1} / {car.images.length}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex space-x-2 overflow-x-auto">
                    {car.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                          currentImageIndex === index ? 'border-primary' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${car.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Car Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      {car.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{car.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{car.rating} ({car.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      ${car.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Fair market value
                    </div>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <Calendar className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="font-semibold">{car.year}</div>
                    <div className="text-sm text-muted-foreground">Year</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <Gauge className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="font-semibold">{car.mileage.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Miles</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <Fuel className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="font-semibold">{car.fuel}</div>
                    <div className="text-sm text-muted-foreground">Fuel</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/30 rounded-lg">
                    <Users className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                    <div className="font-semibold">{car.transmission}</div>
                    <div className="text-sm text-muted-foreground">Trans</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {car.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information Tabs */}
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="specifications" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="specifications">Specifications</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="financing">Financing</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="specifications" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(car.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history" className="mt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-green-600" />
                          <span className="font-medium text-green-800">Clean History Report</span>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Verified
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-foreground">{car.history.accidents}</div>
                          <div className="text-sm text-muted-foreground">Accidents</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/30 rounded-lg">
                          <div className="text-2xl font-bold text-foreground">{car.history.owners}</div>
                          <div className="text-sm text-muted-foreground">Previous Owners</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Service Records</h4>
                        <p className="text-muted-foreground">
                          {car.history.serviceRecords} service records available. 
                          Last serviced on {new Date(car.history.lastService).toLocaleDateString()}.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="financing" className="mt-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2">Estimated Monthly Payment</h4>
                        <div className="text-3xl font-bold text-primary">$689/mo</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Based on 20% down, 60 months, 4.5% APR
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-secondary/30 rounded-lg">
                          <div className="font-semibold">Down Payment</div>
                          <div className="text-lg text-primary">$9,000</div>
                        </div>
                        <div className="p-3 bg-secondary/30 rounded-lg">
                          <div className="font-semibold">Loan Amount</div>
                          <div className="text-lg text-primary">$36,000</div>
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        Get Pre-Approved
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage src={car.seller.avatar} />
                    <AvatarFallback>{car.seller.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{car.seller.name}</span>
                      {car.seller.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {car.seller.type} • {car.seller.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{car.seller.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({car.seller.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mb-6">
                  Typically responds in {car.seller.responseTime}
                </div>

                <div className="space-y-2">
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Seller
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Seller
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Test Drive
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Get Vehicle Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Save to Favorites
                </Button>
              </CardContent>
            </Card>

            {/* Related Cars */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Cars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedCars.map((relatedCar) => (
                  <Link key={relatedCar.id} to={`/car/${relatedCar.id}`}>
                    <div className="flex space-x-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                      <img
                        src={relatedCar.image}
                        alt={relatedCar.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{relatedCar.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {relatedCar.year} • {relatedCar.mileage.toLocaleString()} mi
                        </div>
                        <div className="text-sm font-semibold text-primary">
                          ${relatedCar.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetailsPage