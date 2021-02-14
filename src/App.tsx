import { useState } from 'react';
import { useQuery } from 'react-query';

import Cart from './cart/Cart';

import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Item from "./items/Item";

import  { Wrapper , StyledButton } from './App.styled';

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
}



const getProducts  = async() : Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {

  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);


  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItem = (items: CartItemType[] ) =>items.reduce( (tol:number , item) => tol + item.amount , 0 );

  const handleAddToCart = (clickedItem: CartItemType) => {

    setCartItems( ( prev ) => {
      const iSItemInCart = prev.find(item => item.id === clickedItem.id);

      if (iSItemInCart) {
        return prev.map(item => item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item);
      }

      return [...prev, { ...clickedItem, amount: 1 }];


    } )
  }

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (

      prev.reduce((total, item) =>
      {
        if (item.id === id) {
          if (item.amount === 1) return total;
          return [...total , { ...item , amount : item.amount -1 }]
        } else {
          return [...total , item]
        }
      },[] as CartItemType[])
    
    ))
  };


  if (isLoading) return <LinearProgress color="primary" /> 
    
  if (error) return <div> Something went wrong... </div>
  

  return (


    <Wrapper>
      <Drawer anchor="right"  open={openCart} onClose={() => setOpenCart(false)} > 
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart ={handleRemoveFromCart}
        />
          </Drawer>
      
      <StyledButton onClick={() => setOpenCart(true) }  >

        <Badge badgeContent={getTotalItem(cartItems)} color='error' >
          <AddShoppingCartIcon/>
        </Badge>

      </StyledButton>
      
      <Grid container spacing={3} >
        {
          data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4} >
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          )
          )
        }
        
    </Grid>
    </Wrapper>
  )
}




export default App;
