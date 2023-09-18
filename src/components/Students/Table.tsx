import { Key, useEffect, useRef, useState, JSXElementConstructor, ReactElement, ReactNode } from "react"
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import { useQuery } from "react-query";
import { ByIdStudents, deleteStudents, getStudents, updateStudents } from '../../api/Students/apiStudents';
import InfoBtn from "./InfoBtn";
import { StudentsItems, courses, icons, inp } from "../../utils/Constants"

let useClickOutside = (handler: { (): void }) => {
  let domNode = useRef<any>();
  useEffect(() => {
    let mabeHandle = (event: { target: any; }) => {
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    };
    document.addEventListener("mousedown", mabeHandle)
    return () => {
      document.removeEventListener("mousedown", mabeHandle)
    }
  })
  return domNode
}
const Table = ({ searchFunction }: any) => {

  // get
  const [studentsList, setStudentList] = useState<any>([]);
  // const FetchingData = async (offset: any, limit: any, role: any) => {
  //   return await getStudents(offset, limit, role).then((res: any) => res)

  // }
  // const { data, isLoading, error } = useQuery("student", () => FetchingData("0", "100", "learner"))
  // if (isLoading) {
  //   return <h2>Loading...</h2>
  // }
  // if (error) {
  //   return <h2>An error has occurred:</h2>
  // }
  // setStudentList(data.data);  
  // console.log(studentsList);
  /////get

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data: any) => console.log(data);
  
  const fetchData = async () => {
    try {
      const offset = "0";
      const limit = "100";
      const role = "learner";
      const response = await getStudents(offset, limit, role);
      setStudentList(response.data.data);
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // get
  ///delete
  const infoItemDelete = async (e: number) => {
    try {
      await deleteStudents(e);
      let newList = studentsList.filter((elem: { id: number }) => elem.id !== e);
      toast.success("talaba muvoffaqiyatli o'Chirildi", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setStudentList(newList);
    } catch (error) {
      toast.error("Ma\'lumotni o\'chirishda xato yuz berdi", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  ///delete
  const handleChange = (e: any) => {
    const { id, checked } = e.target;
    if (id == "0") {
      const checkedvalue = studentsList.map((user: any) => { return { ...user, isChecked: checked } });
      setStudentList(checkedvalue);
    } else {
      const checkedvalue = studentsList.map((user: { id: any; }) => user.id == id ? { ...user, isChecked: checked } : user)
      setStudentList(checkedvalue);
    }
  }
  const [updateStudentModal, setUpdateStudentModal] = useState(false)
  let domNode = useClickOutside(() => {
    setUpdateStudentModal(false)
  })
  ////delete

  // getById
  const [value, setValue] = useState<any>({})
  const getIdStudents = async (id: any) => {
    const res: any = await ByIdStudents(id)
    setValue(res?.data?.data)
  }
  console.log(value);
  // getById

  // Updata
  const updateStudent = async (updatedData: any) => {
    try {
      await updateStudents(updatedData.id);
      const updatedList = value.map((student: any) => {
        if (student.id === updatedData.id) {
          getIdStudents(updatedData)
          return { ...student, ...updatedData };
        }
        return student;
      });
      setStudentList(updatedList);
      toast.success("Talaba ma'lumotlari muvaffaqiyatli yangilandi", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUpdateStudentModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Ma'lumotni yangilashda xato yuz berdi", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  // Updata
  const [showInp, setShowInp] = useState<Boolean>(false)
  const handleClik = (id: any) => {
    inp[id - 1].class = "pb-[20px]"
    setShowInp(!showInp)
  }


  return (
    <>
      {/* ///////////Form */}
      <div ref={domNode} className={updateStudentModal ? "w-[385px] h-[100%] fixed z-[200] right-0 bg-white shadow transition-all duration-500 mt-[-172px]" : "right-[-400px] h-[100%] transition-all mt-[-172px] duration-500 fixed top-0"}>
        <div className='flex justify-start  '>
          <div className='w-[385px] '>
            <div className="py-[23px] pl-[16px]">
              <h3 className='text-[#F48221] text-[17px] font-bold'>Talaba tahrirlash</h3>
            </div>
            <hr className="border-t-[2px] border-t-hrcolor" />
            <form onSubmit={handleSubmit(onSubmit)} className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px] 2xl:h-[745px] xl:h-[747px] overflow-y-scroll scrol'>
              <div className="pb-[20px]">
                <h3>Talaba nomi</h3>
                <input type="text" value={value?.fullName} placeholder='Abdujabbor Ibrohimov' className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("fullName")} />
              </div>
              <div className="pb-[20px]">
                <h3>Telefon raqami</h3>
                <input required type="text" value={value?.phoneNumber} placeholder="Telefon raqami" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("phoneNumber")} />
              </div>
              <div className="pb-[20px]">
                <h3>Tug'ilgan sanasi</h3>
                <input type="date" data-date="" data-date-format="DD MMMM YYYY" placeholder="Sanani tanlang" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("birthdayDate")} />
              </div>
              <div className="pb-[20px]">
                <h3>Qo'shilgan sana</h3>
                <input type="date" data-date="" data-date-format="DD MMMM YYYY" placeholder="Qo'shilgan sana" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("addedDate")} />
              </div>
              <div className="pb-[20px]">
                <h3>Role bering</h3>
                <input type="text" value={value?.role} placeholder="Role bering" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("role")} />
              </div>
              <div className="pb-[20px]">
                <h3>Guruhga qo'shish</h3>
                <select placeholder="Sanani tanlang" className="text-left border-[1px] border-[#444] bg-white w-full p-[10px] rounded-[15px] mt-[10px] flex items-center justify-between cursor-pointer">
                  {courses?.map((item: { id: Key | null | undefined; course: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => {
                    return (
                      <option key={item?.id} className="py-[3px] pl-[20px] hover:(bg-[#F48221] text-[#fff]) mx-[1px] cursor-pointer" {...register("group")} > {item?.course}</option>
                    )
                  })}
                </select>
              </div>
              <div className="pb-[20px]">
                <h3>Izoh</h3>
                <textarea placeholder="Comment..." value={value?.fullName} className='border-[1px] border-[#444] rounded-[15px] w-full h-[80px] mt-[10px] p-[10px]' {...register("comment")}></textarea>
              </div>
              <div className="pb-[20px]">
                <h3>Parol bering</h3>
                <input placeholder="Parol kiritish" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" {...register("password")} />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              {inp.map((item: any) => {
                return (
                  <div key={item.id} className={item.class}>
                    <h3>{item.title}</h3>
                    <input
                      {...register(item.reg)}
                      type={item.type}
                      placeholder={item.plaholder}
                      className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                  </div>
                )
              })}
              <div className="pb-[20px]">
                <h3>Qo'shing</h3>
                <div className="flex items-center justify-start mt-[10px]">
                  {icons?.map((item: { id: number; i_class: string; }) => {
                    return (
                      <i onClick={() => { handleClik(item?.id) }}
                        key={item?.id}
                        className={item?.i_class + ' cursor-pointer flex justify-center items-center  w-[30px] h-[30px] border-[2px] border-[#F48221] text-[#F48221] text-[16px] rounded-[50em] mr-[5px]'}></i>
                    )
                  })}
                </div>
              </div>
              <button type='submit' className='py-[13px] mb-5 px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]' onClick={(e) => { updateStudent(e) }}>
                <i className="fa-regular fa-circle-check mr-[5px]"></i>
                <p>Saqlash</p>
              </button>
            </form>
            <hr className="border-t-[2px] border-t-hrcolor" />
          </div>
        </div>
      </div>
      {/* ///////////Form */}
      {/* ///////////table */}
      <table className='2xl:w-[100%] xl:w-[90%] lg:w-[80%] mt-[21px]' onMouseDown={(e) => { e ? setUpdateStudentModal(false) : setUpdateStudentModal(true) }}>
        <thead>
          <tr>
            <th className='flex gap-[30px] text-[#F48221] text-[16px] font-semibold'>
              <input type="checkbox" name="allselect" id="0" onChange={handleChange} />
              <NavLink to="#!">Talaba</NavLink>
            </th>
            {StudentsItems.map((item) => {
              return (
                <th key={item.id} className='text-[#F48221] font-semibold text-left'>
                  <NavLink to="#!"> {item.title} </NavLink>
                </th>
              )
            })}
            <th className="text-[#F48221] font-semibold flex justify-end 2xl:pr-[65px] xl:pr-[-40px]">Amallar</th>
          </tr>
        </thead>
        <tbody>
          {studentsList.filter((item: { name: string; }) => {
            return searchFunction.toLocaleLowerCase() === "" ? item : item.name.toLowerCase().includes(searchFunction)
          }).map((item: { id: Key; name: string; phoneNumber: any; groupName: string; lessonTime: any; status: any, fullName: string }) => {
            return (
              <tr key={item.id} className="border-t-[#EEEEEE] border-b-[#EEEEEE] border-t-[1px]  border-b-[1px] relative">
                <td className='flex items-center mt-3 '>
                  <input type="checkbox" />
                  <h3 className="text-[#444444] text-base inline ml-[30px] "> <NavLink to={`/talabalar/talaba-haqida/${item?.id}`}> {item.fullName}</NavLink></h3>
                </td>
                <td>
                  <span className='text-[#444444]  text-base'>{item.phoneNumber}</span>
                </td>
                <td>
                  <h2 className='underline inline'>Frontend 05 </h2><span className='text-base no-underline text-[#F48221] '>18:00</span>
                </td>
                <td>
                  <h2 className='underline inline '>-899 000</h2>
                </td>
                <td className="flex justify-end 2xl:pr-[40px] xl:pr-[-150px] lg:pr-[-100px] ">
                  <InfoBtn getIdStudents={getIdStudents} infoItemDelete={infoItemDelete} id={item.id} setUpdateStudentModal={setUpdateStudentModal} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* ///////////table */}
    </>
  )
}

export default Table;