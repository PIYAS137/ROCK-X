import { useState } from "react"

const GallerySection = () => {

    const [seeAll,setSeeAll]=useState(6);


    const gallery = [
        {
            id: 1,
            img: 'https://i.ibb.co/nRB3Bbf/maxresdefault.jpg '
        },
        {
            id: 2,
            img: 'https://i.ibb.co/9TqyBFG/grande-a-20170603.jpg'
        }, {
            id: 3,
            img: 'https://i.ibb.co/GQ043KC/75609-425-materiel-concert.jpg'
        },
        {
            id: 4,
            img: 'https://i.ibb.co/HTJBPXt/pasted-image-0.png'
        },
        {
            id: 5,
            img: 'https://i.ibb.co/Yh1w6WH/Screenshot-1.png'
        },
        {
            id: 6,
            img: 'https://i.ibb.co/VYJbQzv/Screenshot-2.png'
        },
        {
            id: 7,
            img: 'https://i.ibb.co/nRB3Bbf/maxresdefault.jpg '
        },
        {
            id: 8,
            img: 'https://i.ibb.co/GQ043KC/75609-425-materiel-concert.jpg'
        },
        {
            id: 9,
            img: 'https://i.ibb.co/HTJBPXt/pasted-image-0.png'
        },
        {
            id: 10,
            img: 'https://i.ibb.co/Yh1w6WH/Screenshot-1.png'
        },
        {
            id:11,
            img: 'https://i.ibb.co/VYJbQzv/Screenshot-2.png'
        },
        {
            id: 12,
            img: 'https://i.ibb.co/nRB3Bbf/maxresdefault.jpg '
        },
        {
            id: 13,
            img: 'https://i.ibb.co/GQ043KC/75609-425-materiel-concert.jpg'
        },
        {
            id: 14,
            img: 'https://i.ibb.co/HTJBPXt/pasted-image-0.png'
        },
        {
            id: 15,
            img: 'https://i.ibb.co/Yh1w6WH/Screenshot-1.png'
        }
    ]

    const handleSeeAll=()=>{
        setSeeAll(gallery.length)
    }

    const handleSeeLess=()=>{
        setSeeAll(6)
    }


    return (
        <div>
            <h1 className="text-center text-5xl py-20 font-bold">Discover Our Works</h1>
            <div className='grid grid-cols-3 gap-3'>
                {
                    gallery.slice(0,seeAll).map(one => {
                        return (
                            <div key={one.id}>
                                <div style={{ backgroundImage: `url(${one.img})` }}
                                    className="h-[300px] bgx rounded-lg">
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center mt-5">
                {seeAll===6?<button onClick={handleSeeAll} className="btn btn-primary">See All</button>:<button onClick={handleSeeLess} className="btn btn-primary">See Less</button>}
            </div>
        </div>
    )
}

export default GallerySection