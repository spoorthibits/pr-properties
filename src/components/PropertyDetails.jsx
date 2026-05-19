import React from 'react';
import { 
  Bed, 
  Bath, 
  Ruler, 
  Car, 
  Waves, 
  Tv, 
  Wifi, 
  Wind, 
  ChefHat, 
  Lock, 
  Leaf, 
  Warehouse, 
  WashingMachine, 
  Dumbbell, 
  Sun, 
  Flame,
  Phone,
  Mail,
  Clock,
  School,
  ShoppingCart,
  Train,
  TreePine,
  MapPin
} from 'lucide-react';

export default function PropertyDetails() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0  shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center py-6">
            {/* <a href="#" className="flex items-center gap-2 text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.5L18 11v7h-3v-5h-6v5H6v-7l6-5.5z"/>
              </svg>
              DREAM PROPERTIES
            </a> */}
           
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=80" 
          alt="Elegant studio flat exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-12">
          <div className="container-custom text-white">
            <div className="flex gap-2 mb-4">
              <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ backgroundColor: 'var(--color-primary)' }}>Featured</span>
              <span className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide" style={{ backgroundColor: 'var(--color-gold)' }}>For Sale</span>
            </div>
            <h1 className="text-white mb-4">Elegant studio flat</h1>
            <div className="flex items-center gap-2 text-lg mb-4">
              <MapPin className="w-5 h-5" />
              <span>102 Ingraham St, Brooklyn, NY 11237</span>
            </div>
            <div className="text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              $8,600 <span className="text-base font-normal opacity-90">/ month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12 rounded-xl my-12" style={{ backgroundColor: 'var(--color-offwhite)' }}>
          <div className="text-center">
            <Bed className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--color-gold)' }} />
            <div className="text-4xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>3</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>Bedrooms</div>
          </div>
          <div className="text-center">
            <Bath className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--color-gold)' }} />
            <div className="text-4xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>3</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>Bathrooms</div>
          </div>
          <div className="text-center">
            <Ruler className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--color-gold)' }} />
            <div className="text-4xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>4,043</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>Square Feet</div>
          </div>
          <div className="text-center">
            <Car className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--color-gold)' }} />
            <div className="text-4xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--color-primary)' }}>2</div>
            <div className="text-sm uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>Parking</div>
          </div>
        </div>
      </div>

      {/* Split Section 1 */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="mb-6">Welcome to your dream home</h2>
              <p className="mb-4">
                This stunning modern studio flat features contemporary architecture and luxurious amenities that redefine urban living. The exceptional property offers an open-concept living space with floor-to-ceiling windows that flood the interior with natural light, creating an atmosphere of elegance and comfort.
              </p>
              <p>
                Every detail has been carefully considered to provide a living experience that combines style, functionality, and modern convenience. From the premium finishes to the thoughtful layout, this property represents the pinnacle of contemporary residential design.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80" 
                alt="Modern living room interior" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Split Section 2 - Reversed */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative overflow-hidden rounded-xl h-[500px] md:order-first">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop&q=80" 
                alt="Swimming pool and outdoor area" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:order-last">
              <h2 className="mb-6">Luxury outdoor living</h2>
              <p className="mb-4">
                The property boasts a beautifully designed outdoor area complete with a pristine swimming pool, perfect for entertaining guests or enjoying quiet relaxation. The outdoor space seamlessly extends your living area, creating an ideal environment for both social gatherings and peaceful retreats.
              </p>
              <p>
                Surrounded by thoughtfully landscaped gardens and modern outdoor furnishings, the pool area serves as a private oasis where you can escape the hustle and bustle of city life while remaining in the heart of Brooklyn's most desirable neighborhood.
              </p>
            </div>
          </div>

          {/* Split Section 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Gourmet kitchen excellence</h2>
              <p className="mb-4">
                The modern kitchen features high-end stainless steel appliances, quartz countertops, and custom cabinetry that combine form and function. Whether you're preparing a casual breakfast or hosting an elegant dinner party, this kitchen provides everything you need for culinary excellence.
              </p>
              <p>
                With ample storage, premium appliances, and a thoughtful layout, this kitchen is designed for those who appreciate both cooking and entertaining. The spacious island serves as both a preparation area and a gathering spot for family and friends.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop&q=80" 
                alt="Modern kitchen with island" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Specifications */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-4">Property specifications</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Detailed information about this exceptional property and its premium features.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Property ID', value: 'DP-2024-001' },
              { label: 'Property type', value: 'Studio flat' },
              { label: 'Year built', value: '2022' },
              { label: 'Lot size', value: '5,500 Sqft' },
              { label: 'Flooring', value: 'Hardwood' },
              { label: 'Cooling', value: 'Central A/C' },
              { label: 'Heating', value: 'Central heating' },
              { label: 'HOA fees', value: '$250/month' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-5 rounded-lg border-l-4" style={{ backgroundColor: 'var(--color-offwhite)', borderColor: 'var(--color-gold)' }}>
                <span className="font-medium" style={{ color: 'var(--color-muted)' }}>{item.label}</span>
                <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section" style={{ backgroundColor: 'var(--color-offwhite)' }}>
        <div className="container-custom">
          <h2 className="text-center mb-4">Premium amenities</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Experience luxury living with world-class amenities designed for your comfort and convenience.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Waves, label: 'Swimming pool' },
              { icon: Tv, label: 'Smart TV' },
              { icon: Wifi, label: 'High-speed Wi-Fi' },
              { icon: Wind, label: 'Air conditioning' },
              { icon: ChefHat, label: 'Modern kitchen' },
              { icon: Lock, label: 'Security system' },
              { icon: Leaf, label: 'Garden' },
              { icon: Warehouse, label: 'Garage' },
              { icon: WashingMachine, label: 'Laundry room' },
              { icon: Dumbbell, label: 'Home gym' },
              { icon: Sun, label: 'Solar panels' },
              { icon: Flame, label: 'Fireplace' }
            ].map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-8 bg-white rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <Icon className="w-8 h-8 mb-4" style={{ color: 'var(--color-gold)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{amenity.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-4">Property gallery</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            Explore every corner of this magnificent property through our curated gallery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
              'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80',
              'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80',
              'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80',
              'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop&q=80',
              'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&q=80'
            ].map((src, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl h-[300px] cursor-pointer">
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container-custom">
          <h2 className="text-center text-white mb-12">Schedule your viewing</h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-xl">
              <h3 className="mb-8">Get in touch</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    Full name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    Email address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    Phone number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block mb-2 text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    Preferred date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gold transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    Message (optional)
                  </label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="Tell us about your requirements..." 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-lg font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-gold)', color: 'white' }}
                >
                  Schedule viewing
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-white mb-8">Property information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white/10 rounded-lg">
                  <Phone className="w-6 h-6 mt-1" style={{ color: 'var(--color-gold)' }} />
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Call us</h4>
                    <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/10 rounded-lg">
                  <Mail className="w-6 h-6 mt-1" style={{ color: 'var(--color-gold)' }} />
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Email us</h4>
                    <p className="text-white/80 text-sm">info@dreamproperties.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/10 rounded-lg">
                  <Clock className="w-6 h-6 mt-1" style={{ color: 'var(--color-gold)' }} />
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Office hours</h4>
                    <p className="text-white/80 text-sm">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <h3 className="text-white mt-12 mb-6">Nearby locations</h3>
              <div className="space-y-3">
                {[
                  { icon: School, name: 'Brooklyn Heights Elementary', distance: '0.5 mi' },
                  { icon: ShoppingCart, name: 'Whole Foods Market', distance: '0.3 mi' },
                  { icon: Train, name: 'Graham Ave Station', distance: '0.2 mi' },
                  { icon: TreePine, name: 'McCarren Park', distance: '0.7 mi' }
                ].map((place, index) => {
                  const Icon = place.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Icon className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
                        <span className="text-sm">{place.name}</span>
                      </div>
                      <span className="text-white/70 text-sm">{place.distance}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
