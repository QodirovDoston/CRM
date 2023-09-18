import { useState } from "react";
import { Id, Task } from "../../../../types/index";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { userImg, writingColorYellow } from "../../../../assets/NavbarImgs";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}
function TaskCard({ task, 
  // updateTask 
}: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center text-left rounded-xl  cursor-grab relative"
      />
    );
  }

  // if (editMode) {
  //   return (
  //     <div className="shadow-xl hover:shadow-2xl rounded-2xl  grid bg-white w-[298px] mx-auto">
  //       <div className='cursor-grab active:cursor-grabbing shadow-xl flex items-center justify-between px-[15px] py-[10px]  mb-[5px] bg-[#fff] '>
  //         <div className=''>
  //           <h2 className='text-[#555] text-[13px] font-normal'>Qodirov Doston</h2>
  //           <h2 className='text-[#F48221] mt-[5px] text-[11px] font-normal'>+998943213214</h2>
  //         </div>
  //         <div className="">
  //           <div className='flex items-center justify-end'>
  //             <div className=" overflow-hidden flex-shrink-0 rounded-[20px] border-[1px] border-[#F48221]">
  //               <img className="w-[30px] h-[30px]" src={foundation} alt="" />
  //             </div>
  //             <button className="fa-regular fa-pen-to-square text-[20px] text-[#F48221] ml-[5px]"></button>
  //           </div>
  //           <h2 className='text-[10px] text-[#BDBDBD] mt-[5px]'>14:47 23.06.2023</h2>
  //         </div>
  //       </div>
  //       <input
  //         className="h-[10%] w-full resize-none border-none rounded-xl bg-transparent text-gray focus:outline-none text-[15px]  p-2"
  //         value={task.content}
  //         autoFocus
  //         placeholder="Task content here...."
  //         onBlur={toggleEditMode}
  //         onKeyDown={(e) => {
  //           if (e.shiftKey) {
  //             toggleEditMode();
  //           }
  //         }}
  //         onChange={(e) => updateTask(task.id, e.target.value)}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-white p-2 h-[70px] w-[298px] mx-auto  rounded-xl justify-between my-2 flex"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <div className="">
        <h6 className="text-[13px]">Qodirov Doston</h6>
        <p className="text-orange text-[11px] mt-2">+998943213214</p>
      </div>
      <div className=" ml-7">
        <div className="flex justify-end items-center gap-2">
          <img className="rounded-2xl h-[30px] w-[30px]" src={userImg} alt="" />
          <img src={writingColorYellow} alt="" />
        </div>
        <p className="text-[#BDBDBD] text-es mt-[5px]">14:47 23.06.2023</p>
      </div>
    </div>
  );
}

export default TaskCard;
