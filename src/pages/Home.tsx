import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedHeroImage from '../components/AnimatedHeroImage';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Data Security
                <span className="block text-cyan-400">Made Simple</span>
              </h1>
              <div className="space-y-4 text-xl text-gray-300 mb-8 leading-relaxed">
                <p>
                  Simple, powerful VPN and proxy protection — built for individuals and small businesses.
                </p>
                <p>
                  OGM Security makes advanced protection simple for small teams and solo professionals.
                </p>
                <p className="text-lg font-medium text-cyan-300">
                  Strong, reliable security — without the enterprise complexity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-medium rounded-full transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Animated Hero Image */}
            <div className="relative flex justify-center items-center">
              <AnimatedHeroImage
                src="/ogmHeroSec copy.png"
                alt="OGM Security - Comprehensive cybersecurity illustration showing interconnected devices, database security, and digital protection systems"
                className="max-w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose OGM Security?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge security solutions provide unmatched protection for your digital assets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Updated with WireGuard content */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-shadow">
                <div className="h-8 w-8 bg-white/20 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">End-to-End WireGuard Encryption</h3>
              <p className="text-gray-300 leading-relaxed">
                Tailscale uses the modern WireGuard® protocol with ChaCha20 encryption, Poly1305 authentication, and Curve25519 key exchange to keep your data private, secure, and fast — no matter where you connect from.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-shadow">
                <div className="h-8 w-8 bg-white/20 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast Speeds</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimized servers worldwide ensure blazing-fast connections without compromising security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-shadow">
                <div className="h-8 w-8 bg-white/20 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
              <p className="text-gray-300 leading-relaxed">
                Access content from anywhere with our extensive network of secure servers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300">
              Professional security solutions tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* VPN Service */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-8 rounded-3xl border border-slate-700/30 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                  <div className="h-10 w-10 bg-white/20 rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Premium VPN</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {['Unlimited bandwidth', 'No-logs policy', '24/7 support', 'Multi-device support'].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Proxy Service */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-8 rounded-3xl border border-slate-700/30 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl">
                  <div className="h-10 w-10 bg-white/20 rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Proxy Services</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {['High-speed proxies', 'Geographic diversity', 'API integration', 'Custom solutions'].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Trusted by teams that value simplicity, speed, and real security.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;