import TSeries from '../../assets/T-Series.png'

const SponserSection = () => {
    const sponsers=[
        {
          id:1,
          image:TSeries,
        },
        {
          id:2,
          image:TSeries,
        },
        {
          id:3,
          image:TSeries,
        },
        {
          id:4,
          image:TSeries,
        }
      ]
  return (
    <div className=" text-5xl">
        <h1 className="text-center font-bold pt-20">Our Sponsers</h1>
        <div className="flex">
        {
            sponsers.map((one)=>{
              return(
                <div className="flex justify-center w-full items-center my-20" key={one.id}>
                  <img className="w-20 mx-auto" src={one.image} alt="" />
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default SponserSection