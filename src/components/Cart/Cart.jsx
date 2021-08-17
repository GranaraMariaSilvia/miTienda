import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items.length;
  const classes = useStyles();

  const EmpyCart = () => {
    <Typography variant="subtitle1">
      {" "}
      No hay productos en el carrito
    </Typography>;
  };
  const FilledCart = () => {
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant="h4">
          Subtotal : {cart.subtotal.formatte_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.empyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>;
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Tu carrito de compras
      </Typography>
      {isEmpty ? <EmpyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;