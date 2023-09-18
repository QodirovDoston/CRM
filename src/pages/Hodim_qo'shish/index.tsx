import { downlode, light, picture, saccses } from '../../assets/NavbarImgs'

export const index = () => {
  return (
   
    <div className="w-[384px] ">
    <h1 className="text-[#F48221] font-medium text-[17px] ml-[16px] py-[24px] ">
      Hodim qo'shish
    </h1>
    <hr className='mb-5  text-gray'/>
    <div className="pl-[25px]">
      <h5 className="mb-[10px] font-normal text-[14px] text-[#444444]">Hodim nomi</h5>
      <input className="outline-none border-solid border-[1px] border-[#444] w-[334px] h-[40px] rounded-[15px] pl-[10px] mb-[20px]"
        type="text" placeholder="Abdujabbor Ibrohimov"/>
    </div>
    <div className="pl-[25px]">
      <h5 className="mb-[10px] font-normal text-[14px] text-[#444444]">
        Telefon raqami</h5>
      <input className="outline-none border-solid border-[1px] border-[#444] w-[334px] h-[40px] rounded-[15px] pl-[10px] mb-[20px]"
        type="number" placeholder="+998"/>
    </div>
    <div className="pl-[25px]">
      <h5 className="mb-[10px] font-normal text-[14px] text-[#444444]">
        Tug'ilgan sanasi</h5>
      <input className="outline-none border-solid border-[1px] border-[#444] w-[334px] h-[40px] rounded-[15px] pl-[10px] mb-[20px]"
        type="month" placeholder="Sanani tanlang"/>
    </div>
    <div className="pl-[25px]">
      <h5 className="mb-[10px] font-normal text-[14px] text-[#444444]">
        Qo'shilgan sanasi</h5>
      <input className="outline-none border-solid border-[1px] border-[#444] w-[334px] h-[40px] rounded-[15px] pl-[10px] mb-[20px]"
        type="month" placeholder="Sanani tanlang"/>
    </div>

    <div className="pl-[25px]">
      <h5 className="mb-[10px] font-normal text-[14px] text-[#444444]">
        Rol bering
      </h5>
      <input
        className="outline-none border-solid border-[1px] border-[#444] w-[334px] h-[40px] rounded-[15px] pl-[10px] mb-[20px]"
        type="text"
        placeholder="Adminisrator"
      />
    </div>

    <div className="pl-[25px] relative">
      <h5 className="mb-[10px] font-normal text-[14px] text-[#444444]">
        Parol beringg
      </h5>
      <input
        className="outline-none border-solid border-[1px] border-[#444] w-[334px] h-[40px] rounded-[15px] pl-[30px] mb-[20px]"
        type="password"
        placeholder="Parol kiritish"
      />
      <img className="absolute top-10 left-7" src={light} alt="" />
    </div>
    <div className="pl-[25px] ">
      <h1 className="mb-[10px] font-normal text-[14px] text-[#444444]">
        Suratni yuklash
      </h1>
      <div className="w-[334px] flex justify-between">
        <button className="w-[44px] h-[44px] bg-[#F8F8F8] rounded-[5px] flex justify-center items-center">
          <img src={picture} alt="" />
        </button>
        <button className="w-[44px] h-[44px] bg-[#F48221] rounded-[15px] flex justify-center items-center">
          <img src={downlode} alt="" />
        </button>
      </div>
      <p className="font-normal mt-[10px] leading-[15px] text-[11px] text-[#8C8C8C]">
        <span className="text-[#F48221] font-medium">Eslatma:</span> Suratni
        asosiy qilish uchun uni tanlang. <br />
        Yangi surat yuklaganingizda, surat bo'yi va eni 86 pixel <br />
        bo'lishi lozim. Yangi surat yuklasangiz eski surat avtomatik
        o'chiriladi.
      </p>
    </div>
    <div className='flex justify-end mr-6 mt-5'>
        <button className="flex justify-center items-center w-[145px] h-[50px] bg-[#F48221] rounded-[15px] gap-4">
            <img src={saccses} alt="" />
            <h1 className="text-[#FFFFFF] font-medium text-[17px]">Saqlash</h1>
        </button>
    </div>
</div>
  )
}

