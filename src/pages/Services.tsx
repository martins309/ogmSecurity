import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Server, Zap, Lock, Eye, CheckCircle, ArrowRight, Network, Users, Key } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Security Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect your digital assets and ensure your privacy online
          </p>
        </div>
      </section>

      {/* Next-Gen Secure Networking Service */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                  <Network className="h-12 w-12 text-white" />
                </div>
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-white">Next-Gen Secure Networking</h2>
                  <p className="text-cyan-400 font-medium">Peer-to-peer connectivity, zero configuration</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Tailscale creates a private, encrypted network using the WireGuard® protocol, seamlessly connecting your devices without the need for complex setup or port forwarding. Security and speed, without the hassle.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Key className="h-6 w-6 text-cyan-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">WireGuard Encryption</h4>
                    <p className="text-gray-400 text-sm">State-of-the-art ChaCha20-Poly1305 encryption with Curve25519 key exchange</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-cyan-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Zero-Trust Architecture</h4>
                    <p className="text-gray-400 text-sm">Each device is authenticated via your identity provider, not just IP addresses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Eye className="h-6 w-6 text-cyan-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">No Logs, No Middlemen</h4>
                    <p className="text-gray-400 text-sm">End-to-end encrypted connections — not even Tailscale can see your data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Network className="h-6 w-6 text-cyan-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Direct Device Connections</h4>
                    <p className="text-gray-400 text-sm">Peer-to-peer links with fallback relays (DERP) only when necessary</p>
                  </div>
                </div>
                <div className="flex items-start col-span-2">
                  <Globe className="h-6 w-6 text-cyan-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Global Access, Local Performance</h4>
                    <p className="text-gray-400 text-sm">Connect across any location as if your devices were on the same network</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Tailscale Features</h3>
              <div className="space-y-4">
                {[
                  'Zero-configuration mesh networking',
                  'WireGuard® protocol encryption',
                  'Identity-based access controls',
                  'Cross-platform device support',
                  'Automatic key rotation',
                  'NAT traversal without port forwarding',
                  'Subnet routing capabilities',
                  'Exit node functionality'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">Starting at</span>
                  <span className="text-3xl font-bold text-cyan-400">$6/user/mo</span>
                </div>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-full transition-all duration-200"
                >
                  Get Tailscale Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proxy Service */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-white">Proxy Services</h2>
                  <p className="text-purple-400 font-medium">High-performance proxies</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Professional-grade proxy solutions for businesses and individuals. Our proxy network 
                offers exceptional speed, reliability, and geographic diversity for all your needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Lightning Fast</h4>
                    <p className="text-gray-400 text-sm">Sub-100ms response times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Global Coverage</h4>
                    <p className="text-gray-400 text-sm">200+ locations worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Server className="h-6 w-6 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">99.9% Uptime</h4>
                    <p className="text-gray-400 text-sm">Enterprise-grade reliability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lock className="h-6 w-6 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Secure & Anonymous</h4>
                    <p className="text-gray-400 text-sm">Complete privacy protection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Proxy Plans</h3>
              
              {/* Residential Proxies */}
              <div className="mb-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <h4 className="text-xl font-bold text-white mb-3">Residential Proxies</h4>
                <p className="text-gray-300 mb-4">Real IP addresses from ISPs worldwide</p>
                <div className="space-y-2 mb-4">
                  {['Rotating IPs', 'City-level targeting', 'High success rates'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">From $15/GB</span>
                </div>
              </div>

              {/* Datacenter Proxies */}
              <div className="mb-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <h4 className="text-xl font-bold text-white mb-3">Datacenter Proxies</h4>
                <p className="text-gray-300 mb-4">High-speed dedicated proxies</p>
                <div className="space-y-2 mb-4">
                  {['Dedicated IPs', 'Ultra-fast speeds', 'Unlimited bandwidth'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">From $5/proxy</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-medium rounded-full transition-all duration-200"
              >
                Get Proxy Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose OGM Security?
            </h2>
            <p className="text-xl text-gray-300">
              Industry-leading security with unmatched performance and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl w-fit mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-300">
                Over 5 years of experience protecting thousands of customers worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl w-fit mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock technical support from our team of security experts
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl w-fit mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Money-Back Guarantee</h3>
              <p className="text-gray-300">
                30-day risk-free trial with full money-back guarantee on all services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your security needs and get a custom solution
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;