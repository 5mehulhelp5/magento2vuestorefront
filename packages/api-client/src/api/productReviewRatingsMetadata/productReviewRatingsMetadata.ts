export default `
  query productReviewRatingsMetadata{
    productReviewRatingsMetadata {
      items {
        id
        name
        values {
          value_id
          value
        }
      }
    }
  }
`;
