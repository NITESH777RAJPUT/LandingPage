const Hero = () => {
    return (
        <section
            id="home"
            className="
        relative w-full
        h-[52vh]        /* 📱 MOBILE – SAME */
        sm:h-[65vh]    /* 📱 TABLET – SAME */
        lg:h-[92vh]    /* 💻 DESKTOP – FIXED */
        overflow-hidden
      "
        >
            {/* VIDEO */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-end">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-14">

                </div>
            </div>
        </section>
    );
};

export default Hero;
