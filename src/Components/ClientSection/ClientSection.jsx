
const ClientSection = () => {
  const clients = [
    {
      id: 1,
      name: 'Piyas Mahamude Alif',
      text: "the quick brown fox jumps over the lazy dog.",
      image: 'https://i.pinimg.com/564x/1e/6f/e3/1e6fe37fe536493733a3a66d5de93ab6.jpg'
    },
    {
      id: 2,
      name: 'Piyas Mahamude Alif',
      text: "the quick brown fox jumps over the lazy dog.",
      image: 'https://i.pinimg.com/564x/1e/6f/e3/1e6fe37fe536493733a3a66d5de93ab6.jpg'
    },
    {
      id: 3,
      name: 'Piyas Mahamude Alif',
      text: "the quick brown fox jumps over the lazy dog.",
      image: 'https://i.pinimg.com/564x/1e/6f/e3/1e6fe37fe536493733a3a66d5de93ab6.jpg'
    },
    {
      id: 4,
      name: 'Piyas Mahamude Alif',
      text: "the quick brown fox jumps over the lazy dog.",
      image: 'https://i.pinimg.com/564x/1e/6f/e3/1e6fe37fe536493733a3a66d5de93ab6.jpg'
    }
  ]
  return (
    <div className="">
      <h1 className="text-center text-5xl font-bold pt-40">We Love Our Clients</h1>
      <div className="grid grid-cols-4 gap-10 my-10">
        {
          clients.map((one) => {
            return (
              <div className="shadow-lg shadow-zinc-300 bg-gray-200 p-5 text-center rounded-b-xl flex flex-col justify-center items-center  my-20" key={one.id}>
                <div className="-mt-12">
                  <div className=" bg-white w-20 h-20 p-1 rounded-full mx-auto" >
                    <img className="w-full h-full rounded-full mx-auto" src={one.image} alt="" />
                  </div>
                  <p className=" text-md mt-2 font-semibold">{one.name}</p>
                  <p className="text-gray-400 text-sm">{one.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ClientSection