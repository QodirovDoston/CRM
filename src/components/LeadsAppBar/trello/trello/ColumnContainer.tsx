import { writingColorYellow, angleup, plusRoundYellow } from '../../../../assets/NavbarImgs/index'
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "../../../../types/index";
// import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    // transform,
    // transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  // const style = {
  //   transition,
  //   transform: CSS.Transform.toString(transform),
  // };

  if (isDragging) {
    return (
      <div ref={setNodeRef} className="bg-gray  opacity-40  border-2  border-pink-500  w-[350px] h-[500px] max-h-[500px] rounded-md flex  flex-col  "></div>
    );
  }

  return (
    <div ref={setNodeRef} className="bg-columnBackgroundColor w-[310px] rounded-m ">
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className=" bg-[#DDDDDD] text-[#555555] text-[18px] h-[60px] items-center cursor-grab rounded-xl  rounded-b-none p-3 font-medium  border-1 flex justify-between">
        <div className="flex justify-between w-[100px] ">
          {!editMode && column.title}
          {editMode && (
            <input
              className="focus:border-rose-500 border rounded font-thin w-[230px]  outline-none px-1"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-center px-2 py-1 text-sm rounded-full bg-columnBackgroundColor ">
          <img src={writingColorYellow} alt="" />
          <button
            onClick={() => {
              deleteColumn(column.id);
            }}
            className="flex justify-end px-1 py-2 rounded stroke-gray-500 hover:bg-columnBackgroundColor">
            <i className="fa-solid fa-trash text-[#F48221] text-[20px]"></i>
          </button>
          <img src={angleup} alt="" />
        </div>
      </div>

      {/* Column task container */}
      <div className=" bg-[#DDDDDD]  overflow-x-hidden overflow-y-auto ">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      <div className="inline bg-[#DDDDDD] text-[#555555] text-sm h-[50px] items-center cursor-grab rounded-xl rounded-t-none p-3  border-1 flex justify-between">
        <div className="flex gap-3 px-1 py-2">
          <div className="flex items-center">
            <img onClick={() => {
              createTask(column.id)
            }} className='' src={plusRoundYellow} alt="" />
          </div>
          <p className="text-[14px] text-[#555555]">Lid qo'shish</p>
        </div>
      </div>
    </div>
  );
}

export default ColumnContainer;
