export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          🍽️ PREMIUM DINING EXPERIENCE
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Your Complete Restaurant
        <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Digital Solution
        </span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Everything you need to run a modern restaurant - from online ordering to reservations. 
        One simple price, unlimited possibilities.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="max-w-lg mx-auto">
      <div className="relative group">
        {/* Gradient Border Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Premium Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm shadow-lg">
            BEST VALUE
          </div>

          <div className="p-8 md:p-10">
            {/* Price Section */}
            <div className="text-center mb-8 pt-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-slate-500 text-lg line-through">$99</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  SAVE 70%
                </span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-3">
                <span className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  $29
                </span>
                <span className="text-slate-500 text-lg font-medium">one-time</span>
              </div>
              <p className="text-slate-600 font-medium">
                Complete Restaurant Website • No Monthly Fees
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold">Curated Digital Menu System</p>
                  <p className="text-slate-600 text-sm">Showcase seasonal specials with beautiful imagery</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold">Complete Online Ordering Platform</p>
                  <p className="text-slate-600 text-sm">Delivery & pickup with seamless checkout experience</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold">Smart Table Reservation System</p>
                  <p className="text-slate-600 text-sm">Easy booking for any occasion, any party size</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold">Local Sourcing Showcase</p>
                  <p className="text-slate-600 text-sm">Highlight fresh, locally-sourced ingredients & suppliers</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold">Dietary Preferences Manager</p>
                  <p className="text-slate-600 text-sm">Filter & accommodate all dietary needs effortlessly</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold">Location & Parking Information</p>
                  <p className="text-slate-600 text-sm">Interactive maps with parking details & directions</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00?client_reference_id=871e4d4a-90f5-4058-bc3c-28ec44cc545a'}
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Launch Your Restaurant Website - $29
            </button>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-medium">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-medium">Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Guarantee */}
      <div className="text-center mt-8 text-slate-600">
        <p className="text-sm">
          ✨ <span className="font-semibold">Launch-ready in minutes</span> • No coding required • Mobile-optimized
        </p>
      </div>
    </div>
  </div>
</div>
  );
}