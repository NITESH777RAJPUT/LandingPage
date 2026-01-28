const Hero = () => {
    return (
        <section
            id="home"
            className="relative w-full h-[85vh] sm:h-screen overflow-hidden"
        >
            {/* BACKGROUND VIDEO */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* DARK OVERLAY (readability) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
            </div>
        </section>
    );
};

export default Hero;
