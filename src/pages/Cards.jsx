import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBold } from 'react-icons/fa';

function Basic_card() {
  return (
    <Card style={{ width: '30rem' }}>
        <div style={{textAlign:"left"}}>Blutooth Headphones</div>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.D40sayhjKVxAF3HPZkVz5QHaE8?w=282&h=188&c=7&r=0&o=7&pid=1.7&rm=3" />
      <Card.Body>
        <Card.Title ></Card.Title> 
        <Card.Text  style={{display:"flex"}}>Noise Airwave Max 6 Wireless Bluetooth Headphones Over-Ear Noise Cancelling Headphones (Carbon Black)
           
      
        </Card.Text>
         <div style={{textAlign:"left"}}>M.R.P: <span style={{ textDecoration: "line-through" ,color:'red'}}>₹999</span>
  
         <b>70% ₹299</b> </div>
         <div style={{display:"flex", gap:"260px"}}>
            <Button variant="outline-primary">Add to cart</Button>
        <Button variant="primary" >Buy Now</Button>
         </div>
        

      </Card.Body>

       <Card style={{ width: '30rem', height:"50rem" }}>
        <div style={{textAlign:"left"}}>Blutooth Headphones</div>
      <Card.Img variant="top" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSn79SHjMvhFWAAIYIGS8QIdzQ3f0xpB_CiuwqgMMyJ7tWMSTR8Uma9Mbc3GrwsX0S5REvW3yQ9FQDws_B8eKABHE2pjRox-CweEGhnRHCT8-QPwwAKnenTa8UK&usqp=CAc" />
      <Card.Body>
        <Card.Title ></Card.Title>
        <Card.Text  style={{display:"flex"}}>Noise Airwave Max 6 Wireless Bluetooth Headphones Over-Ear Noise Cancelling Headphones (Carbon Black)
           
      
        </Card.Text>
         <div style={{textAlign:"left"}}>M.R.P: <span style={{ textDecoration: "line-through" ,color:'red'}}>₹999</span>
  
         <b>70% ₹299</b> </div>
         <div style={{display:"flex", gap:"260px"}}>
            <Button variant="outline-primary">Add to cart</Button>
        <Button variant="primary" >Buy Now</Button>
         </div>
        

      </Card.Body>
    </Card>
    </Card>
    
  );
}

export default Basic_card;