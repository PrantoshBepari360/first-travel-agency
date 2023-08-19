import React, { useState } from "react";

const city = [
  {
    cityLanguage: "Bangla",
  },
  {
    cityLanguage: "Hindi",
  },
  {
    cityLanguage: "Urdu",
  },
  {
    cityLanguage: "Srilanka-tamil",
  },
  {
    cityLanguage: "English",
  },
];

const LangDrop = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => SetIsOpen((prev) => !prev)}
        className="text-white hover:text-black"
      >
        English
      </button>
      {isOpen && (
        <div className="mt-2 absolute z-100">
          {city?.map((item, i) => (
            <div key={i} className=" bg-black text-white p-2 w-40 z-30">
              <h3 className="mt-1">{item?.cityLanguage}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangDrop;
