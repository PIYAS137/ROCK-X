import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ViewOnePage = () => {

  const sid = useParams()
  console.log(sid.sid);

  const [datas,setDatas]=useState([])
  const [data,setData]=useState();

  useEffect(() => {
    fetch('/src/database/ServicesDatas.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        const temp = res.filter((one) => one.id==sid.sid);
        setData(temp[0]);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, [datas]);
  
  console.log(data);




  return (
    <div>
      {data?.title}
    </div>
  )
}

export default ViewOnePage