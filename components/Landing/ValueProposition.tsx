
import { User, Headset, Smile, Zap } from 'lucide-react'; 
import Image from 'next/image';
import HandShake from "@/public/handshake.jpg"

const ValueProposition = () => {
  return (
    <section
      id="valueProposition"
      className=" h-[130vh] w-screen"
    >
      <div className="w-full py-8 h-full">
        <div className="text-center animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-zinc-800 mb-4">
            Exceptional Value Through Personalized Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unwavering Commitment to Our Clients Financial Security
          </p>
        </div>

        {/* Feature Circle Layout */}
        <div className="relative h-[80%]  flex items-center justify-center">
          {/* Central Circle */}
          <div className="absolute h-5/6 w-2/5 bg-white rounded-md shadow-xl flex items-center justify-center z-10 transform hover:scale-105 transition duration-300">
           
              <Image
                src={HandShake}
                alt="Insurance Partnership"
                className="w-full h-full object-cover rounded-md shadow-lg transition-all duration-300 opacity-100 hover:opacity-90 relative z-10"
              />
            {/* </div> */}
          </div>

          {/* Dynamic Features */}
          <div className="absolute top-[10%] left-[3%] -rotate-12">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-64 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-orange-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-800">Personalized Recommendations</h3>
                  <p className="text-gray-600 text-xs mt-1">We use advanced algorithms to match you with the best insurance plans.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[20%] right-[3%] rotate-6">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-64 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-orange-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Headset className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-800">Expert Support 24/7</h3>
                  <p className="text-gray-600 text-xs mt-1">Our team is available around the clock to assist you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[12%] left-[2%] rotate-3">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-64 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-orange-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Smile className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-800">Seamless Application Process</h3>
                  <p className="text-gray-600 text-xs mt-1">Apply for insurance easily in just a few minutes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[10%] right-[3%] -rotate-6">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg w-64 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-orange-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-800">Fast and Accurate Quotes</h3>
                  <p className="text-gray-600 text-xs mt-1">Get instant, accurate insurance quotes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

   
        
      
    </section>
  );
};

export default ValueProposition;
