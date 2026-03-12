import { Tag, Crown, Wallet, Gift } from 'lucide-react';

const offers = [
  { icon: Tag, title: 'Special Offers', description: 'Get up to 30% off on combo packages', image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=400', badge: '30% OFF' },
  { icon: Crown, title: 'Premium VIP', description: 'Join our exclusive program for discounts', image: 'https://images.pexels.com/photos/3764540/pexels-photo-3764540.jpeg?auto=compress&cs=tinysrgb&w=400', badge: 'VIP Access' },
  { icon: Wallet, title: 'Cashback', description: 'Earn points on every service booking', image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400', badge: 'Save More' },
  { icon: Gift, title: 'Referral', description: 'Refer friends and get huge discounts', image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400', badge: 'Share & Earn' }
];

export default function OffersSection() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-pink-50 to-peach-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Exclusive <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Offers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100">
                <div className="relative h-40">
                  <img src={offer.image} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">{offer.badge}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon className="w-5 h-5 text-pink-500" />
                    <h3 className="font-bold text-gray-800">{offer.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold text-sm">Grab Offer</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}