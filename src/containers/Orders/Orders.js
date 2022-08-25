import React,{useState,useEffect} from "react";
import './Orders.css';
import axios from "../../axios-orders";
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import Spinner from "../../components/UI/Spinner/Spinner";
import withError from "../../hoc/withError";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

const Orders=() => {
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async()=> {
            const response = await axios.get('/orders.json');
            const fetchedOrders = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            })
            setOrders(fetchedOrders);
        }
        setLoading(true);
        fetchData().finally(() => setLoading(false));
    },[setLoading])
  

    return(
    <div>
        {loading 
        ? <Spinner/> 
        :
        orders.map(order =>(
           <ErrorBoundary key={order.id}>
             <OrderItem
            key={order.id} 
            ingredients={order.ingredients} 
            price={order.price}/>
           </ErrorBoundary>
        )) 
        }
    </div>
    )
}

export default withError(Orders,axios);