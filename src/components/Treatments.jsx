import React from "react";
import manicure from "./spa-images/manicure.png";
import facial from "./spa-images/facial-treatment.png";
import foot from "./spa-images/foot-treatment.png";
import body from "./spa-images/body massage-treatment.png";

function Treatments() {
  return (
    <div className="text-center px-4 py-12">
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-emerald-700 mb-8">
        Our Treatments
       </h1> 
      <h2 className="text-2xl sm:text-xl md:text-xl lg:text-xl font-semibold text-teal-600 mb-6">Discover the Art of Self-Care
        Whether you’re here to unwind, refresh, or indulge, our professional team ensures a personalized experience tailored just for you. Step into a world of tranquility and let us pamper you from head to toe.
      </h2>
     

      <section className="space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
        <div>
          <img
        src={facial}
        alt=" "
        className="w-full h-120 max-w-500 object-cover"
          ></img>
          <h4 className="text-pink-700 text-3xl font-bold mb-2">Facial Treatments</h4>
           <p className="font-semibold text-xl">
            Reawaken your skin with our personalized facial therapy. Our treatments are designed to deeply cleanse, exfoliate, and hydrate, leaving your skin radiant and refreshed. Each facial is tailored to your unique skin type and concerns, helping to restore balance, reduce signs of stress, and promote a healthy, glowing complexion.
          </p>
        </div>

      <div>
        <img
          src={body}
        alt=" "
        className="w-full h-120 max-w-500 object-cover"
          ></img>
          <h4 className="text-pink-700 text-3xl font-bold mb-2">Body Massage</h4>
          <p className="font-semibold text-xl">
            Release tension and reconnect with your body through our full-body massage. Combining expert techniques and soothing pressure, our massage promotes relaxation, improves circulation, and eases muscle stress for a rejuvenated feeling from head to toe.
          </p>
        </div>

        <div>
           <img
          src={foot}
        alt=" "
        className="w-full h-120 max-w-500 object-cover"
          ></img>
          <h4 className="text-pink-700 text-3xl font-bold mb-2">Foot Massage</h4>
          <p className="font-semibold text-xl">
            Give your feet the care they deserve. Our foot massage focuses on relieving fatigue, improving circulation, and melting away stress, leaving your feet light, refreshed, and energized.
          </p>
        </div>

        <div>
           <img
          src={manicure}
        alt=" "
        className="w-full h-120 max-w-500 object-cover"
          ></img>
          <h4 className="text-pink-700 text-3xl font-bold mb-2">Manicure</h4>
          <p className="font-semibold text-xl">
            Treat your hands to a touch of elegance. Our manicure service nourishes and shapes your nails while softening your skin, leaving your hands polished, healthy, and beautifully cared for.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Treatments;
