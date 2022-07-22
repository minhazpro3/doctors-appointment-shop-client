import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import PetaintInfoCart from "./PetaintInfoCart";
import adminPicture from "../../Images/admin.png";
import { Link } from "react-router-dom";

const PatientInfo = () => {
  const { user, admin } = useAuth();
  const [allPatients, setAllPatients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://aqueous-stream-06459.herokuapp.com/yourBookings/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllPatients(data);
        setLoading(false);
      });
  }, []);

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

        fetch(`https://aqueous-stream-06459.herokuapp.com/deleteMySerial/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setAllPatients(allPatients.filter((data) => data._id !== id));
          });
      }
    });
  };

  return (
    <div className="font-poppins-font">
      {loading ? (
        <div>
          <h4 className="text-3xl my-32 text-center">Loading...</h4>
        </div>
      ) : !allPatients.length && !admin ? (
        <div className="flex justify-center">
          <div className="border-2 rounded-md my-4 border-blue-900 py-24 px-20 inline-block md:py-40 md:px-56">
            <h4 className="text-center text-4xl font-medium text-blue-900">
              You don't have Bookings!!
            </h4>
            <h4 className="text-center text-2xl mt-2 text-blue-900">
              Please Booking <Link to="/makAppointment"><span className="text-green-500" >Click now</span></Link>
            </h4>
          </div>
        </div>
      ) : admin ? (
        <div>
          <div className="flex justify-center ">
            <img className="w-full " src={adminPicture} alt="admin" />
          </div>
        </div>
      ) : (
        <div className="container mx-auto mb-24">
          <div className="text-center">
            <h4 className="text-2xl  my-12   border-t-gray-300  px-4 py-3 inline-block text-blue-900 font-bold">
              Happy Care Of Your Bookings
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
                    {allPatients.map((patient, index) => (
                      <PetaintInfoCart
                        key={patient._id}
                        patient={patient}
                        index={index}
                        handleDelete={handleDelete}
                        loading={loading}
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

export default PatientInfo;
