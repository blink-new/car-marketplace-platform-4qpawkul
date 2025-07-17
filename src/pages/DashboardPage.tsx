import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Eye, Edit, Trash2, Heart, MessageCircle, Calendar, TrendingUp, DollarSign, Car, Users, MoreHorizontal } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('listings')

  // Mock user data
  const user = {
    name: 'John Smith',
    email: 'john.smith@email.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    memberSince: '2023',
    totalListings: 3,
    activeListing: 2,
    soldCars: 1
  }

  // Mock listings data
  const myListings = [
    {
      id: 1,
      title: '2022 Tesla Model 3',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=300&h=200&fit=crop',
      status: 'active',
      views: 234,
      inquiries: 12,
      favorites: 8,
      datePosted: '2024-01-15',
      year: 2022,
      mileage: 15000
    },
    {
      id: 2,
      title: '2021 BMW X5',
      price: 62000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop',
      status: 'active',
      views: 189,
      inquiries: 8,
      favorites: 15,
      datePosted: '2024-01-10',
      year: 2021,
      mileage: 28000
    },
    {
      id: 3,
      title: '2020 Honda Civic',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=300&h=200&fit=crop',
      status: 'sold',
      views: 156,
      inquiries: 6,
      favorites: 4,
      datePosted: '2023-12-20',
      dateSold: '2024-01-05',
      year: 2020,
      mileage: 35000
    }
  ]

  // Mock favorites data
  const favorites = [
    {
      id: 4,
      title: '2023 Audi A4',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop',
      location: 'New York, NY',
      year: 2023,
      mileage: 8000,
      dateAdded: '2024-01-12'
    },
    {
      id: 5,
      title: '2022 Ford Mustang',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=300&h=200&fit=crop',
      location: 'Miami, FL',
      year: 2022,
      mileage: 12000,
      dateAdded: '2024-01-08'
    }
  ]

  // Mock inquiries data
  const inquiries = [
    {
      id: 1,
      listingTitle: '2022 Tesla Model 3',
      buyerName: 'Sarah Johnson',
      buyerAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=50&h=50&fit=crop&crop=face',
      message: 'Hi, I\'m interested in your Tesla. Is it still available? Can we schedule a test drive?',
      date: '2024-01-16',
      status: 'unread'
    },
    {
      id: 2,
      listingTitle: '2021 BMW X5',
      buyerName: 'Mike Chen',
      buyerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      message: 'What\'s the maintenance history on this vehicle? Any accidents?',
      date: '2024-01-15',
      status: 'read'
    },
    {
      id: 3,
      listingTitle: '2022 Tesla Model 3',
      buyerName: 'Emily Davis',
      buyerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      message: 'Would you consider $42,000? I can pay cash.',
      date: '2024-01-14',
      status: 'replied'
    }
  ]

  const stats = [
    {
      title: 'Total Views',
      value: '579',
      change: '+12%',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      title: 'Total Inquiries',
      value: '26',
      change: '+8%',
      icon: MessageCircle,
      color: 'text-green-600'
    },
    {
      title: 'Favorites',
      value: '27',
      change: '+15%',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      title: 'Avg. Response Time',
      value: '2.4h',
      change: '-20%',
      icon: Calendar,
      color: 'text-purple-600'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case 'sold':
        return <Badge className="bg-blue-100 text-blue-800">Sold</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getInquiryStatusBadge = (status: string) => {
    switch (status) {
      case 'unread':
        return <Badge className="bg-red-100 text-red-800">New</Badge>
      case 'read':
        return <Badge className="bg-yellow-100 text-yellow-800">Read</Badge>
      case 'replied':
        return <Badge className="bg-green-100 text-green-800">Replied</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, {user.name.split(' ')[0]}!
              </h1>
              <p className="text-muted-foreground">
                Member since {user.memberSince} • {user.totalListings} total listings
              </p>
            </div>
          </div>
          <Link to="/sell">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              List New Car
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="flex items-center mt-4">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                    <span className="text-sm text-muted-foreground ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          </TabsList>

          {/* My Listings Tab */}
          <TabsContent value="listings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>My Listings ({myListings.length})</span>
                  <div className="flex space-x-2">
                    <Badge variant="outline">{user.activeListing} Active</Badge>
                    <Badge variant="outline">{user.soldCars} Sold</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <div key={listing.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-secondary/30 transition-colors">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{listing.title}</h3>
                          {getStatusBadge(listing.status)}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>${listing.price.toLocaleString()}</span>
                          <span>{listing.year}</span>
                          <span>{listing.mileage.toLocaleString()} mi</span>
                          <span>Posted {new Date(listing.datePosted).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4 text-blue-600" />
                            <span>{listing.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4 text-green-600" />
                            <span>{listing.inquiries} inquiries</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4 text-red-600" />
                            <span>{listing.favorites} favorites</span>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Listing
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Listing
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Listing
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Favorites ({favorites.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favorites.map((car) => (
                    <div key={car.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <img
                        src={car.image}
                        alt={car.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{car.title}</h3>
                          <Button variant="ghost" size="sm">
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-2">
                          ${car.price.toLocaleString()}
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{car.year} • {car.mileage.toLocaleString()} mi</span>
                          <span>{car.location}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Saved {new Date(car.dateAdded).toLocaleDateString()}
                        </div>
                        <Link to={`/car/${car.id}`}>
                          <Button className="w-full mt-4">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Inquiries ({inquiries.length})</span>
                  <Badge variant="outline">
                    {inquiries.filter(i => i.status === 'unread').length} New
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-secondary/30 transition-colors">
                      <Avatar>
                        <AvatarImage src={inquiry.buyerAvatar} />
                        <AvatarFallback>{inquiry.buyerName[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground">{inquiry.buyerName}</h4>
                            <p className="text-sm text-muted-foreground">
                              Interested in: {inquiry.listingTitle}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getInquiryStatusBadge(inquiry.status)}
                            <span className="text-sm text-muted-foreground">
                              {new Date(inquiry.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {inquiry.message}
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm">Reply</Button>
                          <Button variant="outline" size="sm">Mark as Read</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default DashboardPage