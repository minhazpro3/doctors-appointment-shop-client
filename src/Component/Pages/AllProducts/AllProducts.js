import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AllProduct from "../AllProduct/AllProduct";
import Footer from "../Footer/Footer";

const AllProducts = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://serene-atoll-01832.herokuapp.com/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setProductInfo(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        fetch(`https://serene-atoll-01832.herokuapp.com/deleteProduct/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setProductInfo(productInfo.filter((data) => data._id !== id));
          });
      }
    });
  };


  return (
    <div>
      {loading ? (
        <h4 className="text-3xl my-32 text-center">Loading...</h4>
      ) : !productInfo.length ? (
        <div className="flex justify-center">
          <div className="border-2 rounded-md my-4 border-blue-900 py-24 px-20 inline-block md:py-40 md:px-56">
            <h4 className="text-center text-4xl font-medium text-blue-900">
              You don't have Products!!
            </h4>
            <h4 className="text-center text-2xl mt-2 text-blue-900">
              Please Product add
            </h4>
          </div>
        </div>
      ) : (
        <div className="container mx-auto ">
          <div className="my-8">
            <h5 className="text-center text-4xl my text-shadow-md text-blue-800">Total Products: {productInfo.length}</h5>
            <h4 className="text-2xl text-center text-blue-800">Surgical && Medicine Products!!!</h4>
          </div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center">
                    <thead class="border-b bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-white px-6 py-4"
                        >
                          SL
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-white px-6 py-4"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-white px-6 py-4"
                        >
                          Price
                        </th>

                        <th
                          scope="col"
                          class="text-sm font-medium text-white px-6 py-4"
                        >
                          Edit
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-white px-6 py-4"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {productInfo.map((productIn, index) => (
                        <AllProduct
                          productIn={productIn}
                          index={index}
                          loading={loading}
                          handleDelete={handleDelete}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AllProducts;
