export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl"></div>
  
  <div className="container-custom relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="inline-block px-4 py-2 bg-sage/10 text-sage-dark rounded-full text-sm font-medium mb-6 animate-fade-in">
        What We Offer
      </span>
      <h2 className="heading-1 mb-6">
        Experience Dining
        <span className="block text-terracotta mt-2">Reimagined</span>
      </h2>
      <p className="body-large text-charcoal/70">
        From farm to table, from online to your door—we've crafted every detail to make your dining experience exceptional.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      
      {/* Service 1 - Curated Menu */}
      <div className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-sage to-sage-dark rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-3 group-hover:text-sage transition-colors">
              Curated Seasonal Menu
            </h3>
            <p className="body text-charcoal/70 mb-4">
              Our chefs craft rotating seasonal specials using the freshest ingredients, ensuring every visit brings new flavors and culinary adventures to your table.
            </p>
            <div className="flex items-center text-sage font-medium text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Explore Menu</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-sage via-sage-dark to-sage transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* Service 2 - Online Ordering */}
      <div className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-terracotta to-rust rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-3 group-hover:text-terracotta transition-colors">
              Seamless Online Ordering
            </h3>
            <p className="body text-charcoal/70 mb-4">
              Order your favorites with just a few taps. Choose delivery to your doorstep or quick pickup—your meal, your way, on your schedule.
            </p>
            <div className="flex items-center text-terracotta font-medium text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Order Now</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-terracotta via-rust to-terracotta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* Service 3 - Table Reservations */}
      <div className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-amber-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-3 group-hover:text-gold transition-colors">
              Easy Table Reservations
            </h3>
            <p className="body text-charcoal/70 mb-4">
              Book your perfect table in seconds for date nights, family gatherings, or business dinners. Real-time availability ensures you get the spot you want.
            </p>
            <div className="flex items-center text-gold font-medium text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Reserve Table</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-gold via-amber-500 to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* Service 4 - Local Ingredients */}
      <div className="card-elevated group hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-sage-dark to-emerald-700 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-3 group-hover:text-sage-dark transition-colors">
              Fresh Local Ingredients
            </h3>
            <p className="body text-charcoal/70 mb-4">
              We partner with local farms and suppliers to bring you the freshest, highest-quality ingredients. Taste the difference sustainability makes.
            </p>
            <div className="flex items-center text-sage-dark font-medium text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Our Sources</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-sage-dark via-emerald-600 to-sage-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sage to-sage-dark text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <span className="font-semibold">Ready to Experience OG's?</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  </div>
</section>
  );
}