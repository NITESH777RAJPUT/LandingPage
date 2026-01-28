const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white">
                <h1 className="text-4xl font-bold"></h1>
            </div>
        </section>
    );
};

export default Hero;
