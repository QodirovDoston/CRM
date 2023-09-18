// import { plusRound, userMentor, writingColorYellow, angleup, search, trash, watch } from '../../assets/NavbarImgs/index'
// import { buttons, section, boards } from "../../utils/Constants";
// import { useState } from "react";
// import CustomInput from "../Common/Custominput";
// import { ReusableBtn } from '../Common';
// import { Istate } from '../../types';

// const lidCardImg = [userMentor, writingColorYellow]
// const imgArr = [watch, trash]

// const LeadsAppBarTop = () => {

//     const [block, setBlock] = useState<Istate>({ isValue: false, index: 0 })
//     console.log(block);

//     const [boardList, setBoards] = useState<any>(boards)
//     const [currentBoard, setCurrentBoard] = useState<any>(null)
//     const [currentItem, setCurrentItem] = useState<any>(null)
//     const handleNav = (board: any) => {
//         setBoards(boardList.map((el: any) => {
//             if (board.id === el.id) {
//                 const itemBoard = el;
//                 itemBoard.sub.isOpen = !itemBoard.sub.isOpen;
//                 return el;
//             } else {
//                 return el;
//             }
//         }))
//     }
//     const [searchs, setSearchs] = useState('')
//     const dranOverHandler = (_e: any, _board: boolean, _item: any) => {
//         _e.preventDefault()
//     }
//     const dranLeaveHandler = (_e: any, _board: any, _item: any) => {
//         console.log("s");
//         setBlock(_item)
//     }
//     const dranStartHandler = (_e: any, _board: any, _item: any) => {
//         setCurrentBoard(_board)
//         setCurrentItem(_item)
//     }
//     const dranEndHandler = (_e: any, _board: any, _item: any) => {
//         console.log("s");
//     }
//     const dranHandler = (e: any, board: { id: number; sub: { items: any[]; }; }, _item: any) => {
//         e.preventDefault()
//         if (currentBoard.id === board.id) return
//         const currentIndex = currentBoard.sub.items.indexOf(currentItem)
//         const removeItem = currentBoard.sub.items.splice(currentIndex, 1)
//         const dropIndex = board.sub.items.indexOf(_item)
//         const itemdrop = board.sub.items.splice(dropIndex + 1, 1, currentItem)
//         console.log(removeItem,itemdrop,block);
        
//         setBoards(boards.map((b) => {
//             if (b.id == board.id) {
//                 return board
//             }
//             if (b.id === currentBoard.id) {
//                 return currentBoard
//             }
//             return b;
//         }))
//     }
//     const itemAdd = (board: any) => {
//         setBoards(boards.map((el) => {
//             if (el.id === board.id) {
//                 const _itemBoard = el;
//                 _itemBoard.sub.items.push({
//                     id: Math.round(Math.random() * 1000),
//                     image: userMentor,
//                     lastName: 'Doston',
//                     fistName: 'Qodirov',
//                     phoneNumber: '998 50 003 39 40',
//                     createAt: new Date()
//                 })
//                 return _itemBoard
//             } else {
//                 return el;
//             }
//         }))
//     }
//     const newBoarAdd = (board: any) => {
//         setBoards((old: any) => [...old, { ...board, id: Math.round(Math.random() * 1000) }])
//     }
//     return (
//         <div className="my-4 mx-3">
//             <div className="flex gap-5 items-center">
//                 <div className="flex">
//                     <CustomInput
//                         inputStyle="border border-gray w-[348px] h-[40px]  border-1 border-red-300 rounded-[20px] text-[15px] p-4 items-center shadow-2xl"
//                         placeholder="Ism yoki Mobil raqam orqali qidirish"
//                         name=""
//                         label=""
//                         value={searchs}
//                         inputType="search"
//                         handleChange={(e) => setSearchs(e.target.value)}
//                     />
//                     <div className="ml-[-40px] mt-[1px] flex items-center">
//                         <img className="w-[20px] " src={search} alt="" />
//                     </div>
//                 </div>
//                 <div className="flex gap-3 ml-2 ">
//                     {section.map((value) => {
//                         return (
//                             <div key={value.id} className="border border-gray flex items-center  rounded-[15px] p-2.5  bg-white text-[16px]  h-[40px]  shadow-2xl">
//                                 <span className="w-max mr-2 text-gray  text-[16px] font-medium">{value.spam}</span>
//                                 <select className="focus:outline-none hover:cursor-pointer focus:text-red-500 bg-white font-medium   text-[#F48221] ">
//                                     <option value="">{value.option1} </option>
//                                     <option value="option1">{value.option2}</option>
//                                     <option value="option2">{value.option3}</option>
//                                     <option value="option3">{value.option4}</option>
//                                 </select>
//                             </div>
//                         )
//                     })}
//                     <div className="flex gap-2">
//                         {buttons.map((value: any, index: any) => {
//                             return (
//                                 <ReusableBtn
//                                     key={value.id}
//                                     className=""
//                                     btnImg2={imgArr[index]}
//                                     btnImgStyle=""
//                                     btnImg2Style=""
//                                     text={value.text}
//                                     // handleClick={()=>{handle}}
//                                     btnStyle={value.btnStyle}
//                                     textStyle=" text-[16px] mt-1.5"
//                                     handleClick={undefined} />
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className="flex flex-wrap gap-7 px-5 mt-4 ">
//                     {boardList.map((board: any, index: number) => {
//                         return (
//                             <div key={index}>
//                                 <ReusableBtn
//                                     className=""
//                                     btnImg=''
//                                     btnImg2={plusRound}
//                                     btnImgStyle="-ml-1.75"
//                                     btnImg2Style="ml-5 "
//                                     text={board.title}
//                                     item={board}
//                                     // iconSee={index + 1 === boardList.length}
//                                     handleClick={index + 1 === boardList.length ? newBoarAdd : (item: any) => {
//                                         console.log(item)
//                                     }}
//                                     btnStyle={board.HeadBtnStyle}
//                                     textStyle=" text-[17px]"
//                                 />
//                                 <div className=" w-70 bg-gray1  rounded-2xl mt-1" >
//                                     <div className="flex justify-between  py-4 px-4">
//                                         <h3 className="text-gray text-[16px]">{board.sub.subtitle}</h3>
//                                         <div className="flex items-center cursor-pointer">
//                                             <button onClick={() => handleNav(board)}>
//                                                 <img className='active:rotate-180  ' src={angleup} alt="" />
//                                             </button>
//                                             <div>
//                                                 <img src={writingColorYellow} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     < div className="scrol  mb-[25px] gap-1 items-center overflow-y-scroll "
//                                     >
//                                         {board.sub.isOpen && board.sub.items.map((item: any, index: string) => {
//                                             return (
//                                                 <div key={index} className="bg-white p-2 w-[280px] mx-auto  rounded-[15px] justify-between my-2 flex"
//                                                     draggable={true}
//                                                     onDragOver={(e) => dranOverHandler(e, board, item)}
//                                                     onDragLeave={(e) => dranLeaveHandler(e, board, item)}
//                                                     onDragStart={(e) => dranStartHandler(e, board, item)}
//                                                     onDragEnd={(e) => dranEndHandler(e, board, item)}
//                                                     onDrop={(e) => dranHandler(e, board, item)}>
//                                                     <div>
//                                                         <h6 className="text-[13px]">{item.lastName}{item.fistName}</h6>
//                                                         <p className="text-orange text-[10px] mt-1">{item.phoneNumber}</p>
//                                                     </div>
//                                                     <div className="">
//                                                         <div className="flex justify-end items-center gap-2">

//                                                             <img src={item.image} alt="" />
//                                                         </div>
//                                                         <p className="text-[#BDBDBD] text-es mt-1">14:47 23.06.2023</p>
//                                                     </div>
//                                                 </div>
//                                             )
//                                         })}
//                                         <button className="flex px-4 gap-3 py-2" onClick={() => itemAdd(board)}>
//                                             <div className="flex items-center">
//                                                 <img src={writingColorYellow} alt="" />
//                                             </div>
//                                             <p className="text-[14px] text-[#555555]">Lid qo'shish</p>
//                                         </button>
//                                     </div>
//                                     {/*}*/}
//                                 </div>
//                                 <div className=" w-[297px] bg-[#DDDDDD]  rounded-[15px] mt-1">
//                                     <div className="flex gap-5  py-4 px-4">
//                                         <div className="flex   gap-3 ">
//                                             <h3 className="text-[#555555] text-[16px]">Ro'yxatga olish</h3>
//                                             <p className="text-orange text-[13px] flex items-center">7 kishi</p>
//                                         </div>
//                                         <div className="flex items-center cursor-pointer">
//                                             {lidCardImg.map((value, ind) => {
//                                                 return (
//                                                     <div key={ind}>
//                                                         <img src={value} alt="" />
//                                                     </div>
//                                                 )
//                                             })}
//                                         </div>
//                                     </div>
//                                     <hr className="border-t-[1px] border-t-gray mt-[5px] w-[260px] mx-auto" />
//                                     <div className="flex px-4 gap-3 py-2">
//                                         <div className="flex items-center">
//                                             <img src={writingColorYellow} alt="" />
//                                         </div>
//                                         <p className="text-[14px] text-[#555555]">Lid qo'shish</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default LeadsAppBarTop;
