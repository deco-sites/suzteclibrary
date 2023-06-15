import ProductDetails, {
    Props,
  } from "$store/components/ui/ProductAdvancedDetails.tsx";
  
  function ProductDetailsSection(props: Props) {
    return <ProductDetails {...props} />;
  }
  
  export default ProductDetailsSection;
  