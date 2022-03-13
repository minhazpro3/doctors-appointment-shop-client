import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

const AllProducts = () => {

        const [productInfo, setProductInfo]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/getProducts")
        .then(res=>res.json())
        .then(data=>{
            setProductInfo(data)
        })
    },[])
    return (
        <div>
        <div className="container mx-auto ">
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-gray-800">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                SL
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Price
              </th>
             
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Update
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Delete
              </th>
            </tr>
          </thead  >
          <tbody>
         {
             productInfo.map((productIn, index)=>(
                <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{(index+1)}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {productIn?.name}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {productIn.discountPrice}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @mdo
                </td>
               
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @mdo
                </td>
              </tr  >
             ))
         }
         
           
             
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
      <Footer />
    </div>
    );
};

export default AllProducts;