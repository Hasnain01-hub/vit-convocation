import React, { useEffect, useState } from 'react'
import './retrive.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { db } from '../Firebase';
import './retrive.css';
AOS.init();
const RetriveContact = () => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    loadAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const loadAllServices = async () => {
    setLoading(true);
    // getServices("price", "desc", page)
    const items = await db.collection('Contact')
      // .where('uid', '==', user.email)
      // .doc()
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(element => {
          var data = element.data();
          setData(arr => [...arr, data]);
        });
        setLoading(false);
      });
  };
  return (
    <>
    
    <div className='contact'>
      {Data.map((item) => (
        <div class="boxcard red" data-aos="zoom-in" key={item.id}>
      <div className='detail' >
      <p>Name: {item.Name}</p>
      <p>Mail: {item.email}</p>
      <p>Contact-No: {item.Contact}</p>
      <p>Message: {item.message}</p>
      </div>
      {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/> */}
    </div>
    ))}
    </div>
    </>
  )
}
export default RetriveContact