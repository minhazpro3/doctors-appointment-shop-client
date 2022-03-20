import React from "react";
import { useForm } from "react-hook-form";

const AllProduct = ({ productIn, index, handleDelete }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {};
  return (
    <tr class="bg-white border-b">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {productIn?.name}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {productIn.discountPrice}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center ">
        
        <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto duration-100"
          id="exampleModalScrollable"
          tabindex="-1"
          aria-labelledby="exampleModalScrollableLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                  Update Product Info
                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body relative p-4">
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className="border-2 mt-2 border-black rounded-lg w-80 py-2 px-2 focus:outline-blue-900	"
                      {...register("name")}
                      type="text"
                      placeholder="Product Name"
                      required
                    />
                    <br />
                    <input
                      className="border-2 mt-2 border-black rounded-lg w-80 py-2 px-2 focus:outline-blue-900	"
                      {...register("description")}
                      type="text"
                      placeholder="Description"
                      required
                    />

                    <br />
                    <input
                      className="border-2 mt-2 border-black rounded-lg w-80 py-2 px-2 focus:outline-blue-900	"
                      {...register("price")}
                      type="number"
                      placeholder="Regular Price"
                    />
                    <br />
                    <input
                      className="border-2 mt-2 border-black rounded-lg w-80 py-2 px-2 focus:outline-blue-900	"
                      {...register("discount")}
                      type="number"
                      placeholder="Discount %"
                    />
                    <br />
                    <input
                      className="border-2 mt-2 border-black rounded-lg w-80 py-2 px-2 focus:outline-blue-900	"
                      {...register("discountPrice")}
                      type="number"
                      placeholder="Discount Price"
                      required
                    />
                    <br />
                    <select
                      className="border-2 mt-2 border-black rounded-lg w-80 py-2 px-2 focus:outline-blue-900	"
                      {...register("rating")}
                      placeholder=""
                      required
                    >
                      <option selected disabled className="opacity-25 ">
                        Set Rating
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <br />
                    

                    <input
                      className="border-2 mt-2 cursor-pointer text-white bg-sky-900 hover:bg-orange-500 border-black rounded-lg w-80 py-2 px-2"
                      placeholder=""
                      type="submit"
                    />
                  </form>
                </div>
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                {/* <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button> */}
              </div>
            </div>
          </div>
        </div>
        <svg
          className="cursor-pointer"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalScrollable"
        >
          {" "}
          <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" />
        </svg>
      </td>

      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div>
          <svg
            onClick={() => handleDelete(productIn._id)}
            className="  inline cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="50px"
            height="40px"
          >
            <path
              fill="#f37e98"
              d="M25,30l3.645,47.383C28.845,79.988,31.017,82,33.63,82h32.74c2.613,0,4.785-2.012,4.985-4.617L75,30"
            />
            <path
              fill="#f15b6c"
              d="M65 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S65 36.35 65 38zM53 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S53 36.35 53 38zM41 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S41 36.35 41 38zM77 24h-4l-1.835-3.058C70.442 19.737 69.14 19 67.735 19h-35.47c-1.405 0-2.707.737-3.43 1.942L27 24h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h54c1.657 0 3-1.343 3-3S78.657 24 77 24z"
            />
            <path
              fill="#1f212b"
              d="M66.37 83H33.63c-3.116 0-5.744-2.434-5.982-5.54l-3.645-47.383 1.994-.154 3.645 47.384C29.801 79.378 31.553 81 33.63 81H66.37c2.077 0 3.829-1.622 3.988-3.692l3.645-47.385 1.994.154-3.645 47.384C72.113 80.566 69.485 83 66.37 83zM56 20c-.552 0-1-.447-1-1v-3c0-.552-.449-1-1-1h-8c-.551 0-1 .448-1 1v3c0 .553-.448 1-1 1s-1-.447-1-1v-3c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v3C57 19.553 56.552 20 56 20z"
            />
            <path
              fill="#1f212b"
              d="M77,31H23c-2.206,0-4-1.794-4-4s1.794-4,4-4h3.434l1.543-2.572C28.875,18.931,30.518,18,32.265,18h35.471c1.747,0,3.389,0.931,4.287,2.428L73.566,23H77c2.206,0,4,1.794,4,4S79.206,31,77,31z M23,25c-1.103,0-2,0.897-2,2s0.897,2,2,2h54c1.103,0,2-0.897,2-2s-0.897-2-2-2h-4c-0.351,0-0.677-0.185-0.857-0.485l-1.835-3.058C69.769,20.559,68.783,20,67.735,20H32.265c-1.048,0-2.033,0.559-2.572,1.457l-1.835,3.058C27.677,24.815,27.351,25,27,25H23z"
            />
            <path
              fill="#ffffff"
              d="M61.5 25h-36c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h36c.276 0 .5.224.5.5S61.776 25 61.5 25zM73.5 25h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S73.776 25 73.5 25zM66.5 25h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S66.776 25 66.5 25zM50 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v25.5c0 .276-.224.5-.5.5S52 63.776 52 63.5V38c0-1.103-.897-2-2-2s-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2v-3.5c0-.276.224-.5.5-.5s.5.224.5.5V73C53 74.654 51.654 76 50 76zM62 76c-1.654 0-3-1.346-3-3V47.5c0-.276.224-.5.5-.5s.5.224.5.5V73c0 1.103.897 2 2 2s2-.897 2-2V38c0-1.103-.897-2-2-2s-2 .897-2 2v1.5c0 .276-.224.5-.5.5S59 39.776 59 39.5V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C65 74.654 63.654 76 62 76z"
            />
            <path
              fill="#ffffff"
              d="M59.5 45c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C60 44.776 59.776 45 59.5 45zM38 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C41 74.654 39.654 76 38 76zM38 36c-1.103 0-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2V38C40 36.897 39.103 36 38 36z"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
};

export default AllProduct;
