import React, { useState } from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const MyGroup = () => {
  const [students, setStudents] = useState([
    {
    image: "/person.png",
    id: 1,
    fio: "Abdullayev Hayotjon Quvondiq O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 01 01",
    birthDate: "2004-03-15",
    email: "student1@mail.com",
    course: "3-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 2,
    fio: "Abdullayev Shaxriyor Azimjon O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 02 02",
    birthDate: "2003-04-15",
    email: "student2@mail.com",
    course: "2-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 3,
    fio: "Abdusalomov Shohjahon Abdukarim O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 03 03",
    birthDate: "2002-05-15",
    email: "student3@mail.com",
    course: "1-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 4,
    fio: "Akbarov Isfandiyor Yodgorjon O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 04 04",
    birthDate: "2004-06-15",
    email: "student4@mail.com",
    course: "4-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 5,
    fio: "Azatbekov Yerkebulan Rashid O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 05 05",
    birthDate: "2003-07-15",
    email: "student5@mail.com",
    course: "3-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 6,
    fio: "Begmatov Jasurbek Baxtiyor O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 06 06",
    birthDate: "2002-08-15",
    email: "student6@mail.com",
    course: "2-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 7,
    fio: "Esonov Abdulboriy Boxodir O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 07 07",
    birthDate: "2004-09-15",
    email: "student7@mail.com",
    course: "1-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 8,
    fio: "Jahongirov Asilbek Jamoliddin O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 08 08",
    birthDate: "2003-10-15",
    email: "student8@mail.com",
    course: "4-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 9,
    fio: "Jamoliddinov Abdukarim Jasur O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 09 09",
    birthDate: "2002-11-15",
    email: "student9@mail.com",
    course: "3-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 10,
    fio: "Karimov Abdulatif Kaxramon O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 10 10",
    birthDate: "2004-12-15",
    email: "student10@mail.com",
    course: "2-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 11,
    fio: "Komilov Xushnudbek Xurshidbekovich",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 11 11",
    birthDate: "2003-01-15",
    email: "student11@mail.com",
    course: "1-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 12,
    fio: "Nazarov Ravshanbek Qodirjon O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 12 12",
    birthDate: "2002-02-15",
    email: "student12@mail.com",
    course: "4-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 13,
    fio: "Norov Behruz Firuzovich",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 13 13",
    birthDate: "2004-03-15",
    email: "student13@mail.com",
    course: "3-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 14,
    fio: "Orazbaev Merxat Baxítjan Ulí",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 14 14",
    birthDate: "2003-04-15",
    email: "student14@mail.com",
    course: "2-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 15,
    fio: "Shamshiyev Ozod Berdiyor O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 15 15",
    birthDate: "2002-05-15",
    email: "student15@mail.com",
    course: "1-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 16,
    fio: "To‘xtasinov Diyorbek Zafarbek O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 16 16",
    birthDate: "2004-06-15",
    email: "student16@mail.com",
    course: "4-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 17,
    fio: "Turaqulov Sardorbek Sarvar O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 17 17",
    birthDate: "2003-07-15",
    email: "student17@mail.com",
    course: "3-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 18,
    fio: "Xalimov Shoxijaxon Firuzovich",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 18 18",
    birthDate: "2002-08-15",
    email: "student18@mail.com",
    course: "2-kurs",
    stipend: "Yes",
  },
  {
    image: "/person.png",
    id: 19,
    fio: "Xoshimjonov Muzaffar Mirzohid O‘g‘li",
    address: "Toshkent, Chilonzor",
    phone: "+998 90 000 19 19",
    birthDate: "2004-09-15",
    email: "student19@mail.com",
    course: "1-kurs",
    stipend: "Yes",
  },
  ]);

  const [selected, setSelected] = useState(null);
  const [modalStudent, setModalStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleEdit = (student) => {
    setSelected({ ...student });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleSave = () => {
    setStudents(students.map((s) => (s.id === selected.id ? selected : s)));
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };

  const handleInfo = (student) => {
    setModalStudent(student);
    setIsInfoOpen(true);
  };

  return (
    <div className="container mx-auto px-20 pb-8">
      <div className="flex items-center gap-2 pt-4 pb-6">
        <Link href="/students" className="text-blue-800 underline">
          Students
        </Link>
        <ArrowRightAltIcon className="text-blue-800" />
        <Link href="/studentsContingent" className="text-blue-800 underline">
          Student enrollment
        </Link>
        <ArrowRightAltIcon className="text-blue-800" />
        <Link href="/studentsContingent" className="text-blue-800 underline">
          Software Engineering
        </Link>
        <ArrowRightAltIcon className="text-blue-800" />
        <p className="text-blue-950 text-xl">315-22</p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">F.I.O.</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Address</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student, index) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{student.fio}</td>
                <td className="px-4 py-3">{student.address}</td>
                <td className="px-4 py-3">{student.phone}</td>
                <td className="px-4 py-3 space-x-2 flex items-center">
                  <button
                    onClick={() => handleEdit(student)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleInfo(student)}
                    className="text-blue-800 hover:text-blue-600"
                    title="More info"
                  >
                    <InfoOutlinedIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

{isModalOpen && selected && (
  <>
    <style jsx>{`
      .modal-overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 50;
      }

      .modal-content {
        background: white;
        border: 1px solid #3b82f6;
        border-radius: 0.5rem;
        padding: 1.5rem;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        animation: fadeInScale 0.3s ease forwards;
      }

      @keyframes fadeInScale {
        0% {
          opacity: 0;
          transform: scale(0.9);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `}</style>

    <div 
      className="modal-overlay"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-blue-900 text-center">Edit Student</h2>
        <div className="space-y-3">
          <input
            name="fio"
            className="w-full border px-3 py-2 rounded"
            value={selected.fio}
            onChange={handleChange}
            placeholder="F.I.O."
          />
          <input
            name="address"
            className="w-full border px-3 py-2 rounded"
            value={selected.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            name="phone"
            className="w-full border px-3 py-2 rounded"
            value={selected.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <div className="flex justify-end space-x-2 mt-5">
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </>
)}

  {isInfoOpen && modalStudent && (
  <div 
    className="fixed inset-0 flex justify-center items-center bg-opacity-30 z-50"
    onClick={() => setIsInfoOpen(false)}  
  >
    <div
  className="bg-white border-0 rounded-xl shadow-2xl hover:shadow-blue-950 transition duration-500 hover:scale-101 p-6 w-full max-w-[500px] max-h-[90vh] overflow-y-auto fadeIn"
  onClick={(e) => e.stopPropagation()}
>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
        Student Information
      </h2>
      <div className="space-y-2 text-gray-800">
        <img
          src={modalStudent.image}
          alt={modalStudent.fio}
          className="w-40 h-40 mx-auto rounded-full object-cover border mb-3"
        />
        <p><strong>F.I.O.:</strong> {modalStudent.fio}</p>
        <p><strong>Address:</strong> {modalStudent.address}</p>
        <p><strong>Phone:</strong> {modalStudent.phone}</p>
        <p><strong>Email:</strong> {modalStudent.email}</p>
        <p><strong>Birth Date:</strong> {modalStudent.birthDate}</p>
        <p><strong>Course:</strong> {modalStudent.course}</p>
        <p><strong>Stipend:</strong> {modalStudent.stipend}</p>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setIsInfoOpen(false)}
          className="bg-blue-900 cursor-pointer hover:bg-blue-950 text-white px-6 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default MyGroup;
