// import React, {useContext} from 'react'
// import { ShopContext} from '../Context/ShopContext'
// import {useParams} from 'react-router-dom';
// import all_product from '../Components/Assets/Assets/Frontend_Assets/all_product'
// import Breadcrum from '../Components/Breadcrums/Breadcrum';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
// import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
// import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
//  const Product = () => {
//   const{productId}=useParams()
//   const {all_product}=useContext(ShopContext)
//   const product=all_product.find((e)=>e.id===Number(productId));
  
// console.log(product)
//   return (
//     <div>
//         <Breadcrum product={product}/>
//         <ProductDisplay product={product}/>
//         <DescriptionBox/>
//         <RelatedProducts/>
//     </div>
//   )
// }
// export default Product


import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);

  const product = all_product.find((e) => e.id === Number(productId));

  
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;