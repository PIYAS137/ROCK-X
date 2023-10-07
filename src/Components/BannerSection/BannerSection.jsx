
const BannerSection = () => {
    return (
        <div className="hero rounded-xl overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/SndgNYm/texture-treble-clef-dark-background-isolated-generative-ai.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content py-40">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Want to Arrange A Concert ?!</h1>
                    <p className="mb-5">Get ready for an unforgettable night of music and entertainment! We are thrilled to announce our upcoming concert featuring top artists from around the world.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default BannerSection