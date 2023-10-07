
const ClientSection = () => {
    const clients=[
        {
          id:1,
          name:'Piyas Mahamude Alif',
          text:"the quick brown fox jumps over the lazy dog.",
          image:'https://i.pinimg.com/564x/1e/6f/e3/1e6fe37fe536493733a3a66d5de93ab6.jpg'
        },
        {
          id:2,
          name:'Piyas Mahamude Alif',
          text:"the quick brown fox jumps over the lazy dog.",
          image:'https://i.pinimg.com/564x/1e/6f/e3/1e6fe37fe536493733a3a66d5de93ab6.jpg'
        },
        {
          id:3,
          name:'Piyas Mahamude Alif',
          text:"the quick brown fox jumps over the lazy dog.",
          image:'https://i.pinimg.com/564x/1e/6f/e3/1e6fe37fe536493733a3a66d5de93ab6.jpg'
        },
        {
          id:4,
          name:'Piyas Mahamude Alif',
          text:"the quick brown fox jumps over the lazy dog.",
          image:'https://i.pinimg.com/564x/1e/6f/e3/1e6fe37fe536493733a3a66d5de93ab6.jpg'
        }
      ]
  return (
    <div className="">
        <h1 className="text-center text-4xl font-bold pt-20">Our Clients</h1>
        <div className="grid grid-cols-4 gap-10">
          {
            clients.map((one)=>{
              return(
                <div className="border border-gray-600 p-5 text-center rounded-xl flex flex-col justify-center items-center  my-20" key={one.id}>
                  <img className="w-16 h-16 rounded-full mx-auto" src={one.image} alt="" />
                  <p className="py-2 text-xl font-semibold">{one.name}</p>
                  <p className="text-gray-400">{one.text}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default ClientSection