import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Context/Context"
import { galleryDatas } from "../../database/GalleryDatas"
import { useParams } from "react-router-dom"


const ViewOnePhoto = () => {

    const {notiSts,logRegSucc}=useContext(AuthContext)

    const sid = useParams()
    console.log(sid.sid);

    const [datas,setDatas]=useState(galleryDatas)
    const [data,setData]=useState(null)

    useEffect(()=>{
        console.log(sid.sid);
        const temp =  datas.filter(one=>one.id==sid.sid)
        setData(temp[0])
    },[])

    return (
        <div>


            {notiSts &&
                <div className="max-w-xl z-50 top-20 text-white font-bold text-xl absolute bg-green-600 w-full p-5 rounded-xl">
                    <p>{logRegSucc}</p>
                </div>}
        
                <div className="flex justify-center">
                <img className=" w-full" src={data?.img} alt="" />

                </div>
        </div>
    )
}

export default ViewOnePhoto