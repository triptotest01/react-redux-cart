import {useSelector} from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

 const cartItems = useSelector((state)=> state.cart.items )

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'A Book', quantity: 3, total: 15, price: 5 }}
        />
      </ul>
    </Card>
  );
};