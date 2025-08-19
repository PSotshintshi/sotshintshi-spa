import React from "react";
import manicure from "./spa-images/manicure.png";
import facial from "./spa-images/facial-treatment.png";
import foot from "./spa-images/foot-treatment.png";
import body from "./spa-images/body massage-treatment.png";

function Treatments() {
  return (
    <div className="text-center px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">Our Treatments</h2>
      <p className="text-red-500 mb-8 text-lg">Discover the Art of Self-Care</p>

      <section className="space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
        <div>
          <img
        src={facial}
        alt=" "
        className="w-full h-auto object-cover"
          ></img>
          <h4 className="text-xl font-semibold mb-2">Facial Treatments</h4>
          <p>
            Reawaken your skin with our personalized facial therapy. Our treatments are designed to deeply cleanse, exfoliate, and hydrate, leaving your skin radiant and refreshed. Each facial is tailored to your unique skin type and concerns, helping to restore balance, reduce signs of stress, and promote a healthy, glowing complexion.
          </p>
        </div>

      <div>
        <img
          src={body}
        alt=" "
        className="w-full h-auto object-cover"
          ></img>
          <h4 className="text-xl font-semibold mb-2">Body Massage</h4>
          <p>
            Release tension and reconnect with your body through our full-body massage. Combining expert techniques and soothing pressure, our massage promotes relaxation, improves circulation, and eases muscle stress for a rejuvenated feeling from head to toe.
          </p>
        </div>

        <div>
           <img
          src={foot}
        alt=" "
        className="w-full h-auto object-cover"
          ></img>
          <h4 className="text-xl font-semibold mb-2">Foot Massage</h4>
          <p>
            Give your feet the care they deserve. Our foot massage focuses on relieving fatigue, improving circulation, and melting away stress, leaving your feet light, refreshed, and energized.
          </p>
        </div>

        <div>
           <img
          src={manicure}
        alt=" "
        className="w-full h-auto object-cover"
          ></img>
          <h4 className="text-xl font-semibold mb-2">Manicure</h4>
          <p>
            Treat your hands to a touch of elegance. Our manicure service nourishes and shapes your nails while softening your skin, leaving your hands polished, healthy, and beautifully cared for.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Treatments;
