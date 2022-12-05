import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import AllBooking from "../AllBooking/AllBooking";

const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://doctors-appointment-shop-server-production.up.railway.app/allBookings"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
        setLoading(false);
      });
  }, []);

  // delete patient
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

        fetch(
          `https://doctors-appointment-shop-server-production.up.railway.app/deletePatient/${id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setAllBookings(allBookings.filter((data) => data._id !== id));
          });
      }
    });
  };

  const updateStatus = (id, inputRef) => {
    const data = {
      status: inputRef.current.value,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Update Your Status!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update It!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Updated!", "Your file has been updated.", "success");

        fetch(
          `https://doctors-appointment-shop-server-production.up.railway.app/updatePatient/${id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((res) => res.json())
          .then((data) => {});
      }
    });
  };

  return (
    <div className="font-poppins-font ml-14 ">
      {loading ? (
        <div className="md:w-full h-96 text-center py-36  ">
          <svg
            role="status"
            className="text-center inline mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : !allBookings.length ? (
        <div className="flex justify-center">
          <div className="border-2  my-4 border-blue-900 py-24 px-20 inline-block md:py-40 md:px-56">
            <h4 className="text-center text-4xl font-medium text-blue-900">
              Bookings is not yet !!
            </h4>
          </div>
        </div>
      ) : (
        <div className="container mx-auto mb-24">
          <div className="text-center">
            <h4 className="text-2xl  my-12   border-t-gray-300  px-4 py-3 inline-block text-blue-900 font-bold">
              Bookings Of Our Happy Patients
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
                          Profile
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
                          Doctor
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Book Status
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    {allBookings.map((patient, index) => (
                      <AllBooking
                        key={patient._id}
                        patient={patient}
                        index={index}
                        updateStatus={updateStatus}
                        handleDelete={handleDelete}
                      />
                    ))}
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

export default AllBookings;
