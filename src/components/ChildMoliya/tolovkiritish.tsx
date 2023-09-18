import { useForm } from 'react-hook-form';

const paymentEntry = () => {
    const { register, handleSubmit } = useForm();
    const submit = (data: any) => {
        console.log(data);
    }
    return (
        <>
            <main className='flex justify-start'>
                <div className='w-[385px]'>
                    <div className="py-[23px] pl-[16px]">
                        <h3 className='text-[#F48221] text-[17px] font-bold'>To'lov kiritish</h3>
                    </div>
                    <hr className='border-t-[1px] border-t-[#eee]' />
                    <form className='px-[25px] pb-[25px] mt-[23px] text-[#444] text-[14px] h-full' onSubmit={handleSubmit(submit)}>
                        <div className="pb-[20px]">
                            <h3>Talaba nomi</h3>
                            <input required {...register("fullName")} type="text" placeholder="Abdujabbor Ibrohimov" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Miqdor</h3>
                            <input required {...register("amount")} type="text" placeholder="899 000" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Sana</h3>
                            <input required {...register("date")} type="date" placeholder="Abdujabbor Ibrohimov" className="pl-[10px] border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <div className="pb-[20px]">
                            <h3>Izoh</h3>
                            <input required {...register("comment")} type="text" className="border-[1px] border-[#444] w-full p-[10px] rounded-[15px] mt-[10px]" />
                        </div>
                        <button type='submit' className='py-[13px] px-[20px] inline-flex items-center justify-center rounded-[15px] bg-[#F48221] text-[#fff]'>
                            <i className="fa-regular fa-circle-check mr-[5px]"></i>
                            <p>Saqlash</p>
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default paymentEntry;
