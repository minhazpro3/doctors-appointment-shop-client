import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AllProduct from "../AllProduct/AllProduct";
import Footer from "../Footer/Footer";

const AllProducts = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);

  const size = 5;

  useEffect(() => {
    setLoading(true);
    fetch(`https://aqueous-stream-06459.herokuapp.com/getProducts?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProductInfo(data.product);
        const count = data.counts;
        setTotalProduct(parseInt(data.counts));
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        if (data) {
          setLoading(false);
        }
      });
  }, [page]);

  function handlePrevious() {
    setPage((p) => {
      if (p === 0) {
        return p;
      }
      return p - 1;
    });
  }

  function handleNext() {
    setPage((p) => {
      if (p === pageCount) {
        return p;
      }
      return p + 1;
    });
  }

  const handleDelete = (id) => {
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

        fetch(`https://aqueous-stream-06459.herokuapp.com/deleteProduct/${id}`, {
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
            <h5 className="text-center text-4xl my text-shadow-md text-blue-800">
              Total Products: {totalProduct}
            </h5>
            <h4 className="text-2xl text-center text-blue-800">
              Surgical && Medicine Products!!!
            </h4>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead className="border-b bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          SL
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Products
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {productInfo.map((productIn, index) => (
                        <AllProduct
                        key={index}
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

      <div className="flex justify-center mt-12 gap-7">
        <button
          className="page-link text-xl py-2 px-4 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none "
          onClick={handlePrevious}
        >
          Previous
        </button>
        {[...Array(pageCount).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={
              number === page
                ? "bg-blue-700 px-3 py-0 duration-300 border-2 text-white cursor-pointer "
                : "   px-3  border-2 duration-300 hover:text-gray-800 hover:bg-gray-200 cursor-pointer focus:shadow-none"
            }
          >
            {number + 1}
          </button>
        ))}
        {page + 1 !== pageCount ? (
          <button
            className="page-link text-xl py-2 px-4 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button className="page-link text-xl py-2 px-4 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800  focus:shadow-none">
            Next
          </button>
        )}
      </div>
      <div className="flex justify-center">
        <h4 className=" text-xl font-medium mt-4 mb-16 bg-indigo-500 inline-block text-white px-14 py-0">
          {page + 1} of {pageCount}
        </h4>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
