import { useState } from 'react'
import { Upload, Camera, X, Plus, DollarSign, Car, FileText, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Checkbox } from '../components/ui/checkbox'

const SellCarPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    condition: '',
    transmission: '',
    fuel: '',
    drivetrain: '',
    exterior: '',
    interior: '',
    vin: '',
    title: '',
    description: '',
    features: [] as string[],
    location: '',
    phone: '',
    email: ''
  })

  const steps = [
    { number: 1, title: 'Vehicle Details', icon: Car },
    { number: 2, title: 'Photos & Description', icon: Camera },
    { number: 3, title: 'Pricing & Contact', icon: DollarSign },
    { number: 4, title: 'Review & Publish', icon: FileText }
  ]

  const makes = ['Tesla', 'BMW', 'Audi', 'Honda', 'Ford', 'Toyota', 'Mercedes-Benz', 'Volkswagen', 'Nissan', 'Hyundai']
  const conditions = ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor']
  const transmissions = ['Automatic', 'Manual', 'CVT']
  const fuelTypes = ['Gasoline', 'Electric', 'Hybrid', 'Diesel']
  const drivetrains = ['FWD', 'RWD', 'AWD', '4WD']

  const availableFeatures = [
    'Air Conditioning', 'Heated Seats', 'Leather Seats', 'Sunroof', 'Navigation System',
    'Backup Camera', 'Blind Spot Monitoring', 'Cruise Control', 'Bluetooth', 'Apple CarPlay',
    'Android Auto', 'Premium Audio', 'Keyless Entry', 'Remote Start', 'Parking Sensors',
    'Lane Departure Warning', 'Automatic Emergency Braking', 'Adaptive Cruise Control'
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            setUploadedImages(prev => [...prev, e.target!.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
  }

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="make">Make *</Label>
                <Select value={formData.make} onValueChange={(value) => setFormData(prev => ({ ...prev, make: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    {makes.map(make => (
                      <SelectItem key={make} value={make}>{make}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="model">Model *</Label>
                <Input
                  id="model"
                  value={formData.model}
                  onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                  placeholder="e.g., Model 3, X5, A4"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="year">Year *</Label>
                <Input
                  id="year"
                  type="number"
                  value={formData.year}
                  onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                  placeholder="2020"
                  min="1990"
                  max="2024"
                />
              </div>
              <div>
                <Label htmlFor="mileage">Mileage *</Label>
                <Input
                  id="mileage"
                  type="number"
                  value={formData.mileage}
                  onChange={(e) => setFormData(prev => ({ ...prev, mileage: e.target.value }))}
                  placeholder="50000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="condition">Condition *</Label>
                <Select value={formData.condition} onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map(condition => (
                      <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="transmission">Transmission *</Label>
                <Select value={formData.transmission} onValueChange={(value) => setFormData(prev => ({ ...prev, transmission: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    {transmissions.map(transmission => (
                      <SelectItem key={transmission} value={transmission}>{transmission}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fuel">Fuel Type *</Label>
                <Select value={formData.fuel} onValueChange={(value) => setFormData(prev => ({ ...prev, fuel: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    {fuelTypes.map(fuel => (
                      <SelectItem key={fuel} value={fuel}>{fuel}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="drivetrain">Drivetrain</Label>
                <Select value={formData.drivetrain} onValueChange={(value) => setFormData(prev => ({ ...prev, drivetrain: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select drivetrain" />
                  </SelectTrigger>
                  <SelectContent>
                    {drivetrains.map(drivetrain => (
                      <SelectItem key={drivetrain} value={drivetrain}>{drivetrain}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="exterior">Exterior Color</Label>
                <Input
                  id="exterior"
                  value={formData.exterior}
                  onChange={(e) => setFormData(prev => ({ ...prev, exterior: e.target.value }))}
                  placeholder="e.g., Pearl White, Black"
                />
              </div>
              <div>
                <Label htmlFor="interior">Interior Color</Label>
                <Input
                  id="interior"
                  value={formData.interior}
                  onChange={(e) => setFormData(prev => ({ ...prev, interior: e.target.value }))}
                  placeholder="e.g., Black, Beige"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="vin">VIN (Vehicle Identification Number)</Label>
              <Input
                id="vin"
                value={formData.vin}
                onChange={(e) => setFormData(prev => ({ ...prev, vin: e.target.value }))}
                placeholder="17-character VIN"
                maxLength={17}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Optional but helps build trust with buyers
              </p>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Photos *</Label>
              <p className="text-sm text-muted-foreground mb-4">
                Add up to 20 photos. The first photo will be your main listing photo.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    {index === 0 && (
                      <Badge className="absolute bottom-2 left-2 bg-primary">
                        Main Photo
                      </Badge>
                    )}
                  </div>
                ))}
                
                {uploadedImages.length < 20 && (
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">Add Photo</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="title">Listing Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., 2022 Tesla Model 3 - Low Mileage, Excellent Condition"
                maxLength={100}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {formData.title.length}/100 characters
              </p>
            </div>

            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your vehicle's condition, maintenance history, and any notable features..."
                rows={6}
                maxLength={2000}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {formData.description.length}/2000 characters
              </p>
            </div>

            <div>
              <Label>Features & Options</Label>
              <p className="text-sm text-muted-foreground mb-4">
                Select all features that apply to your vehicle
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableFeatures.map(feature => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={formData.features.includes(feature)}
                      onCheckedChange={() => handleFeatureToggle(feature)}
                    />
                    <Label htmlFor={feature} className="text-sm cursor-pointer">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="price">Asking Price *</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="45000"
                  className="pl-10"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Research similar vehicles to price competitively
              </p>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Pricing Tips</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Check similar listings in your area</li>
                  <li>• Consider your vehicle's condition and mileage</li>
                  <li>• Price slightly above your minimum to allow negotiation</li>
                  <li>• Update pricing if no interest after 2 weeks</li>
                </ul>
              </CardContent>
            </Card>

            <Separator />

            <div>
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="City, State"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-900 mb-2">Safety Reminders</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Meet buyers in public, well-lit locations</li>
                  <li>• Verify buyer's identity and insurance before test drives</li>
                  <li>• Accept secure payment methods only</li>
                  <li>• Never share personal financial information</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Review Your Listing
              </h2>
              <p className="text-muted-foreground">
                Please review all information before publishing your listing
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Make:</strong> {formData.make}</div>
                  <div><strong>Model:</strong> {formData.model}</div>
                  <div><strong>Year:</strong> {formData.year}</div>
                  <div><strong>Mileage:</strong> {formData.mileage}</div>
                  <div><strong>Condition:</strong> {formData.condition}</div>
                  <div><strong>Transmission:</strong> {formData.transmission}</div>
                  <div><strong>Fuel Type:</strong> {formData.fuel}</div>
                  <div><strong>Price:</strong> ${formData.price}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photos ({uploadedImages.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2">
                  {uploadedImages.slice(0, 8).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-20 object-cover rounded"
                    />
                  ))}
                  {uploadedImages.length > 8 && (
                    <div className="w-full h-20 bg-secondary/50 rounded flex items-center justify-center text-sm text-muted-foreground">
                      +{uploadedImages.length - 8} more
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Listing Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong>Title:</strong>
                  <p className="text-muted-foreground">{formData.title}</p>
                </div>
                <div>
                  <strong>Description:</strong>
                  <p className="text-muted-foreground">{formData.description}</p>
                </div>
                <div>
                  <strong>Features ({formData.features.length}):</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {formData.features.map(feature => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-primary mb-2">Ready to Publish?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your listing will be live immediately and visible to thousands of potential buyers
                </p>
                <Button size="lg" className="w-full md:w-auto">
                  Publish Listing
                </Button>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sell Your Car
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            List your vehicle in minutes and reach thousands of potential buyers
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    isCompleted 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : isActive 
                        ? 'border-primary text-primary' 
                        : 'border-muted-foreground/30 text-muted-foreground'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className={`text-sm font-medium ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      Step {step.number}
                    </div>
                    <div className={`text-xs ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${
                      isCompleted ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep - 1].title}</CardTitle>
            </CardHeader>
            <CardContent>
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            <Button
              onClick={nextStep}
              disabled={currentStep === 4}
            >
              {currentStep === 4 ? 'Publish Listing' : 'Next Step'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellCarPage