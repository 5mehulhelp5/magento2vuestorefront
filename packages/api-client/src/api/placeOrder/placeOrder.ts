export default `
  mutation placeOrder($input: PlaceOrderInput) {
    placeOrder(input: $input) {
      order {
        order_number
      }
    }
  }
`;
