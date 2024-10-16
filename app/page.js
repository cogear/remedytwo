import Image from 'next/image'
import Link from 'next/link'
import { Waves, Droplets, Sparkles, Gift, FileText } from 'lucide-react'

export default function LandingPage() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-blue-800">Remedy Pool Services</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="#services" className="text-blue-600 hover:text-blue-800 transition-colors">Services</Link></li>
                <li><Link href="#gallery" className="text-blue-600 hover:text-blue-800 transition-colors">Gallery</Link></li>
                <li><Link href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section className="py-20 text-center relative overflow-hidden">
            <Image
                src="/Crystal Clear.png"
                alt="Beautiful pool"
                width={1600}
                height={600}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-black bg-opacity-40 text-white py-20">
              <h1 className="text-5xl font-bold mb-6">Crystal Clear Pools, Crystal Clear Service</h1>
              <p className="text-xl mb-10 max-w-2xl mx-auto">Experience the difference with Remedy Pool Services. We keep your pool pristine, so you can dive into relaxation.</p>
              <Link
                  href="#contact"
                  className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </section>

          <section className="bg-blue-800 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center">
                <Gift className="h-6 w-6 mr-2" />
                <span className="font-semibold">Refer a friend and get a free month of service!</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                <span className="font-semibold">No Contracts Required</span>
              </div>
            </div>
          </section>

          <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-blue-50 rounded-lg p-8 shadow-lg transition-transform hover:scale-105">
                  <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Pool Cleaning"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <Droplets className="h-12 w-12 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">Pool Cleaning</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Thorough surface skimming to remove debris</li>
                    <li>• Filter cleaning and backwashing</li>
                    <li>• Vacuuming to remove dirt and sediment</li>
                    <li>• Algae treatment and prevention</li>
                    <li>• Water testing and chemical balancing</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-8 shadow-lg transition-transform hover:scale-105">
                  <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Pool Maintenance"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <Sparkles className="h-12 w-12 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">Pool Maintenance</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Routine filter and pump maintenance</li>
                    <li>• Comprehensive chemical balancing</li>
                    <li>• Equipment inspection</li>
                    <li>• Pump and motor replacements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">Why Choose Remedy Pool Services?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Expertise"
                      width={150}
                      height={150}
                      className="mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
                  <p>Our experienced technicians bring years of pool care knowledge to every job.</p>
                </div>
                <div>
                  <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Customization"
                      width={150}
                      height={150}
                      className="mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Customization</h3>
                  <p>We tailor our services to meet the unique needs of your pool and lifestyle.</p>
                </div>
                <div>
                  <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt="Reliability"
                      width={150}
                      height={150}
                      className="mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Reliability</h3>
                  <p>Count on us for consistent, high-quality service that keeps your pool in top condition.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Work</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Image
                        key={i}
                        src={`/placeholder.svg?height=300&width=400&text=Pool+${i}`}
                        alt={`Pool ${i}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-blue-100">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Refer a Friend, Get Rewarded!</h2>
              <p className="text-xl text-blue-600 mb-8">Spread the joy of a clean pool and enjoy a free month of service when your referral signs up!</p>
              <Link
                  href="#contact"
                  className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Learn More About Our Referral Program
              </Link>
            </div>
          </section>

          <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <form className="bg-blue-50 p-8 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-blue-700 mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-blue-700 mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-blue-700 mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
                    Send Message
                  </button>
                </form>
                <div>
                  <Image
                      src="/placeholder.svg?height=400&width=600&text=Map"
                      alt="Location Map"
                      width={600}
                      height={400}
                      className="w-full rounded-lg shadow-lg"
                  />
                  <div className="mt-6 text-center">
                    <p className="text-xl font-semibold text-blue-800 mb-2">No Contracts Required</p>
                    <p className="text-blue-600">Enjoy our services without long-term commitments. Your satisfaction is our priority!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-blue-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Remedy Pool Services. All rights reserved.</p>
          </div>
        </footer>
      </div>
  )
}