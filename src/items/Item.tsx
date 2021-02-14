import Button from "@material-ui/core/Button";

import { Wrapper } from './Item.styled';

import { CartItemType } from '../App';


type Props = {
  item: CartItemType;
  handleAddToCart: (ClickedItem: CartItemType) => void;
}


const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <>
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <section>
      <h3> {item.title} </h3>
      <p>{item.description}</p>
      <h3>{ item.price}$</h3>
    </section>
    <Button  variant="contained" color="primary"  onClick={() => handleAddToCart(item) } > 
  Add To Cart
</Button>
    </Wrapper>
    </>
  
);


export default Item;
