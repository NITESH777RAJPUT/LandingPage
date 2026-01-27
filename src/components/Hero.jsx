import heroVideo from "../assets/hero-video.mp4";

const NAVBAR_HEIGHT = 86;

const Hero = () => {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                paddingTop: `${NAVBAR_HEIGHT}px`,
                height: `100vh`,
            }}
        >
            {/* VIDEO */}
            <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-[86px] left-0 w-full h-[calc(100%-86px)] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute top-[86px] left-0 w-full h-[calc(100%-86px)] bg-black/20"></div>
        </section>
    );
};

export default Hero;
