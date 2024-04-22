import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'


function Home() {
  const [data1, setData1] = useState({
      price:400,
      img:'logo192.png',
      product:'Samsung'

  })

const initPayment = (data) =>{
  const option = {
    key:'rzp_test_eBKOiF8kmE9EuR',
    amount:data.amount,
    currency:data.currency,
    name:data1.product,
    description:'test transtion',
    image:data1.img,
    orderId:data.id,
    handler:async(responce)=>{
      try{
        const verifyUrl = "http://localhost:5500/api/payment/verify"
        const {data} = await axios.post(verifyUrl,responce)
        console.log(data);
      }catch(error){
        console.log(error);
      }
    },
    theme:{
      color:'#3399cc'
    }
  };
  const rzp1 = new window.Razorpay(option);
  rzp1.open()
}

  const handlePayment = async () =>{
    try{
      const orderUrl = `http://localhost:5500/api/payment/order`
      const {data} = await axios.post(orderUrl,{amount:data1.price})
      initPayment(data.data)
      console.log(data) 
    }catch(error){
      console.log(error);

    }
  }

  return (
    <div style={{marginLeft:'100px', marginTop:'100px'}}>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data1.img} />
      <Card.Body>
        <Card.Title>{data1.product}</Card.Title>
        <Card.Text>
          {data1.price}
        </Card.Text>
        <Button variant="primary" onClick={handlePayment}>Buy Now</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Home