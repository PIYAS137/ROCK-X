import Marquee from "react-fast-marquee";

const SponserSection = () => {
  const sponsers = [
    {
      id: 1,
      image: 'https://i.ibb.co/CmcgV4r/zee-music-logo.png',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/CmcgV4r/zee-music-logo.png',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/CmcgV4r/zee-music-logo.png',
    },
    {
      id: 4,
      image: 'https://i.ibb.co/CmcgV4r/zee-music-logo.png',
    },
    {
      id:5,
      image: 'https://i.ibb.co/CmcgV4r/zee-music-logo.png'
    },
    {
      id:6,
      image: 'https://i.ibb.co/CmcgV4r/zee-music-logo.png'
    }
  ]
  return (
      <div className=" text-5xl">
        <h1 className="text-center font-bold pt-20">Our Sponsers</h1>
        <div className="flex my-10">
        <Marquee>
          {
            sponsers.map((one) => {
              return (
                <div className="flex justify-center w-full items-center my-20" key={one.id}>
                  <img className="w-28 mx-auto ml-20" src={one.image} alt="" />
                </div>
              )
            })
          }
        </Marquee>
        </div>
      </div>

  )
}

export default SponserSection