import React from 'react';

const MapBox = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.3119266830236!2d80.04393840672755!3d12.8231960330648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1766166741420!5m2!1sen!2sin";
  const googleMapsUrl = "https://www.google.com/maps/place/SRM+Institute+of+Science+and+Technology/@12.8230382,80.0418411,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f712b82a78d9:0xfdb944a3aee53831!8m2!3d12.823033!4d80.044416!16zL20vMGJwNzl6?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D+Nadu";

  return (
    <div className="w-[95vw] lg:w-[900px] mx-auto p-2 font-poppins">
      <div className="flex flex-row items-center rounded-[35px] border-[1.5px] border-solid border-black-custom shadow-2xl overflow-visible" style={{ backgroundColor: 'rgba(31, 107, 87, 0.15)', boxShadow: '13px 9px 9px rgba(0, 0, 0, 0.25)' }}>
        
        {/* Left Section - Event Details */}
        <div className="w-[400px] flex-shrink-0">
          {/* WHEN Section */}
          <div className="h-[120px] px-5 pt-8 text-center flex flex-col items-center justify-start gap-3">
            <h3 className="text-white text-lg font-semibold tracking-[0.15em] leading-[100%] uppercase">
              WHEN
            </h3>
            <p className="text-yellow pt-2 text-[22px] font-semibold leading-[100%] tracking-normal">
              February 6-8, 2026
            </p>
          </div>
          
          {/* Horizontal divider */}
          <div className="self-stretch bg-black-custom h-[1.5px]"></div>

          {/* WHERE Section */}
          <div className="h-[120px] px-5 text-center flex flex-col items-center justify-center gap-3">
            <h3 className="text-white pt-2 text-lg font-semibold tracking-[0.15em] leading-[100%] uppercase">
              WHERE
            </h3>
            <p className="text-yellow pt-2 text-[22px] font-semibold leading-[100%] tracking-normal">
              Chennai, India
            </p>
          </div>

          {/* Horizontal divider */}
          <div className="self-stretch bg-black-custom h-[1.5px]"></div>

          {/* DIRECTIONS Section */}
          <div className="h-[300px] px-5 pt-8 text-center flex flex-col items-center justify-start gap-3">
            <h3 className="text-white text-lg font-semibold tracking-[0.15em] leading-[100%] uppercase">
              DIRECTIONS
            </h3>
            <p className="text-yellow pt-2 text-[22px] font-semibold leading-[150%] tracking-normal">
              Pick your preferred map app and head our way
            </p>
            
            {/* Google Maps Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e6dfc1] text-black-custom px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow transition-all duration-300 hover:scale-105 shadow-lg mt-12"
            >
              <span>➤</span>
              <span>Google Maps</span>
            </a>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="bg-black-custom w-[1.5px] self-stretch"></div>

        {/* Right Section - Map */}
        <div className="flex flex-col w-[450px] my-[20px] ml-6 mr-[20px] bg-yellow rounded-[15px] border-[1.5px] border-solid border-black-custom shadow-xl">
          <div className="flex flex-col rounded-[6px] overflow-hidden border-[1.5px] border-solid border-black-custom m-[10px]">
            {/* Map Header */}
            <div className="flex items-center justify-between bg-black-custom py-4 px-6">
              <h2 className="text-white text-lg font-medium">
                Ossome Hacks 3.0
              </h2>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => window.open(googleMapsUrl, '_blank')}
                  className="text-white hover:text-yellow transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const iframe = document.querySelector('iframe');
                    if (iframe && iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    }
                  }}
                  className="text-white hover:text-yellow transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" 
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Map Iframe */}
            <div className="w-full h-[420px] bg-white">
              <iframe
                src={mapEmbedUrl}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Event Location Map"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MapBox;
