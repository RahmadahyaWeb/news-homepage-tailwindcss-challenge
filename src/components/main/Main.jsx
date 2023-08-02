import React from "react";
import ImageMobile from "../../images/image-web-3-mobile.jpg";
import ImageDesktop from "../../images/image-web-3-desktop.jpg";

const Main = () => {
  return (
    <div>
      <section>
        <div className="container mx-auto p-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-6">
            <div className="grid grid-cols-1 lg:col-span-8 ">
              {/* Image */}
              <div>
                <img src={ImageMobile} alt="" className="lg:hidden" />
                <img src={ImageDesktop} alt="" className="hidden lg:block" />
              </div>
              {/* Content */}
              <div className="lg:grid lg:grid-cols-2 ">
                <h1 className="text-left my-6 lg:my-0 text-5xl font-bold">
                  The Bright Future of Web 3.0?
                </h1>
                <div>
                  <p className="text-Dark-grayish-blue mb-6 lg:mr-16">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back intothe hands of the
                    poeple. But is it really fulfilling its promise?
                  </p>
                  <button
                    type="button"
                    className="uppercase bg-Soft-red text-white px-7 py-3 font-semibold"
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 bg-Very-dark-blue lg:col-span-4 mt-20 lg:mt-0">
              <h3 className="text-3xl text-Soft-orange font-bold">New</h3>
              <div className="py-10 border-b-2">
                <h4 className="text-2xl text-Off-white font-semibold mb-3">
                  Hydrogen VS Electric Cars
                </h4>
                <p className="text-Grayish-blue">
                  Will hydrogen-fueled cars ever catch up to EVs
                </p>
              </div>
              <div className="py-10 border-b-2">
                <h4 className="text-2xl text-Off-white font-semibold mb-3">
                  The Downsides of AI Artistry
                </h4>
                <p className="text-Grayish-blue">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div className="py-10 border-b-2">
                <h4 className="text-2xl text-Off-white font-semibold mb-3">
                  Is VC Funding Drying Up?
                </h4>
                <p className="text-Grayish-blue">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
