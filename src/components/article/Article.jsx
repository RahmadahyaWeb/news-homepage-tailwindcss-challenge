import React from "react";
import Image1 from "../../images/image-retro-pcs.jpg";

const Article = () => {
  return (
    <div className=" container mx-auto p-6 gap-6 flex flex-col lg:flex-row lg:mt-0">
      <div className="flex flex-row items-center gap-4">
        {/* Img */}

        <img src={Image1} alt="" className="w-36" />

        {/* Content */}
        <div className="gap-y-2 flex flex-col ">
          <h4 className="text-3xl text-Dark-grayish-blue font-bold">01</h4>
          <h5 className="text-lg font-bold">Reviving Retro PCs</h5>
          <p className="text-Very-dark-blue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        {/* Img */}

        <img src={Image1} alt="" className="w-36" />

        {/* Content */}
        <div className="gap-y-2 flex flex-col ">
          <h4 className="text-3xl text-Dark-grayish-blue font-bold">01</h4>
          <h5 className="text-lg font-bold">Reviving Retro PCs</h5>
          <p className="text-Very-dark-blue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        {/* Img */}

        <img src={Image1} alt="" className="w-36" />

        {/* Content */}
        <div className="gap-y-2 flex flex-col ">
          <h4 className="text-3xl text-Dark-grayish-blue font-bold">01</h4>
          <h5 className="text-lg font-bold">Reviving Retro PCs</h5>
          <p className="text-Very-dark-blue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
