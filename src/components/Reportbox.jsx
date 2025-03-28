import Section from "./Section";
import { BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState } from "react";
import Generating from "./Generating";

const Reportbox = () => {
  const parallaxRef = useRef(null);
  const [reportText, setReportText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="reportbox"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] p-6">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] p-4">
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                {/* Issue Report Text Box */}
                <textarea
                  className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:border-purple-500 focus:outline-none"
                  placeholder="Describe the issue..."
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                />

                {/* Image Upload */}
                <div className="mt-4">
                  <label className="block text-gray-300">Upload Photo:</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-2 text-gray-400"
                    onChange={handleImageUpload}
                  />
                  {selectedImage && (
                    <div className="relative mt-2 w-fit">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-h-40 rounded-md"
                      />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                      >
                        ❌
                      </button>
                    </div>
                  )}
                </div>

                {/* Report Issue Button */}
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition">
                  Report Issue
                </button>
              </div>
            </div>

            <Gradient />
          </div>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Reportbox;
