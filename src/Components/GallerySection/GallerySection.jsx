
const GallerySection = () => {


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
        }
    ]


    return (
        <div>
            <h1 className="text-center text-5xl py-20 font-bold">Discover Our Works</h1>
            <div className='grid grid-cols-3 gap-3'>
                {
                    gallery.map(one => {
                        return (
                            <div key={one.id}>
                                <div style={{ backgroundImage: `url(${one.img})` }}
                                    className="h-[300px] bgx rounded-lg cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                </div>


                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1 bg-red-600 text-white">✕</button>
                                        </form>
                                        <img src={one.img} />
                                    </div>
                                </dialog>


                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GallerySection