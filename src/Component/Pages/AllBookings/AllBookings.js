import React, { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import update from "../../Images/update-svgrepo-com.svg";
import AllBooking from "../AllBooking/AllBooking";



const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [update,setUpdate]=useState({})
  const inputRef = useRef();
  
  useEffect(() => {
    fetch("http://localhost:5000/allBookings")
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
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

        fetch(`http://localhost:5000/deletePatient/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setAllBookings(allBookings.filter((data) => data._id !== id));
          });
      }
    });
  };

 

  // const handleUpdate = (e)=>{
  //   e.preventDefault()
  //   console.log(e.target.value) 
      
    
  // }

 


  
  const updateStatus = (id,inputRef)=>{
    const data = {
      status: inputRef.current.value
    }
    console.log(data)
    const process = window.confirm("Are You Sure For Update Status?")
    if(process){
        fetch(`http://localhost:5000/updatePatient/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            

        })
    }
}

 


  return (
    <div className="font-poppins-font">
      <div className="container mx-auto ">
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
                  {allBookings.map((patient, index) => <AllBooking key={patient._id} 
                 patient={patient} index={index} updateStatus={updateStatus} handleDelete={handleDelete}  /> )} 
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

export default AllBookings;
