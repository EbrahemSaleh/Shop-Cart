import RemoveIcon from '@material-ui/icons/Remove';


import AddIcon from '@material-ui/icons/Add';


import { CartItemType } from '../App';

import Item from '../items/Item';

import { Wrapper } from './CartIem.styled';
import { Button } from '@material-ui/core';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
} 

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information" >
          <p> price: ${item.price} $ </p>
          <p> total: ${(item.amount * item.price).toFixed(2)} </p>
        </div>

        <div className="buttons">
          <Button color="secondary" >
            <RemoveIcon fontSize="small"  onClick={() => removeFromCart(item.id)}  />
            </Button>
          <p> {item.amount} </p>
          <Button color="primary" >
            <AddIcon  onClick={() => addToCart(item)} fontSize="small" />
            </Button>
        </div>
      </div>
      <img  src={item.image} alt={item.title} />
    </Wrapper>
  )
}


export default CartItem;