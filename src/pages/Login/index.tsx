import React, { useState } from 'react'
import { Login } from '../../assets/NavbarImgs'
import SignIn from '../../components/Common/SignIn'
// import { createLogin } from '../../api/admin/AdminLogin'
import { toast } from 'react-toastify'
import { getToken } from '../../api/admin/adminAuth'
import { useNavigate } from 'react-router-dom'

const index = React.memo(() => {
  const [password, setPassword] = useState<any>('EduCRM$007Boss');
  const [phoneNumber, setPhoneNumber] = useState<any>('+998901234567');
  const navigate = useNavigate()
  function onSubmit(e: any) {
    e.preventDefault()
    const data = { password: password, phoneNumber: phoneNumber }
    getToken(data).then((res: any) => {
      if (res.status === 200) {
        toast.success("Ma'lumot to'g'ri", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("accessToken", res.data.data.Access)
        setTimeout(() => {
          navigate("/")
          window?.location?.reload();
          setPhoneNumber("")
          setPassword("")
        }, 2000)
      }
    }).catch(function (_err: any) {
      toast.error("Ma'lumot Topilmadi!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }

  return (
    <div className='flex'>
      <div className='flex h-[100vh] w-[50%] ' >
        <img src={Login} alt="" className='flex w-[100%] h-[100%] object-cover' />
      </div>
      <div className='w-[50%] h-[90vh] flex justify-center items-center flex-col'>
        <h2 className='text-[#F48221] font-[700] mb-5  text-[40px]'>Tizimga kirish</h2>
        <form className='flex flex-col justify-center items-center w-[100%]'>
          <SignIn
            label="Ma'mur"
            value={password}
            handleChange={((e: any) => setPassword(e.target.value))} placholder={''} />
          <SignIn
            label="Parol kiriting"
            value={phoneNumber}
            handleChange={(e: any) => setPhoneNumber(e.target.value)} placholder={''} />
        </form>
        <button onClick={onSubmit} className='mx-auto text-[17px] cursor-pointer w-[60%] bg-[#F48221] text-[#FFFFFF] flex gap-2  py-[11px] rounded-[15px] justify-center'>Kirish</button>
      </div>
    </div>
  )
})

export default index