import { plusRound } from '../../../../assets/NavbarImgs/index'
import { useMemo, useState } from "react";
import { Column, Id, Task } from "../../../../types/index";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";
import { ReusableBtn } from '../../../Common';
import { defaultCols, defaultTasks } from '../../../../utils/LidPage';
import { plusWhite, userAdd } from '../../../../assets/SideBarImgActive';


function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <>
      <div
        className="m-auto flex mt-2 h-[750px]  h-full overflow-y-auto overflow-x-hidden  px-[40px]" >
        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}>

          <div className="  gap-4 h-[0px]">
            <div className="flex gap-4  mb-4">
              <div className=" gap-2">
                <ReusableBtn
                  className=""
                  ikkiImg="flex gap-3"
                  btnImg2={ userAdd}
                  btnImg={plusWhite}
                  btnImgStyle="-ml-1.75"
                  btnImg2Style="ml-5 bg-red"
                  text="Ro'yxatga olish"
                  btnStyle="w-[310px] bg-red   flex  gap-2 flex-row-reverse  justify-between px-5 text-[#FFFFFF] flex gap-2  flex-row- h-[48px] items-center rounded-[15px] h-[60px]"
                  handleClick={() => (createNewColumn())}
                  textStyle=" text-[17px]"
                />
              </div>
              <div className=" gap-2">
                <ReusableBtn
                  className=""
                  btnImg2={plusWhite}
                  btnImg=""
                  btnImgStyle="-ml-1.75"
                  btnImg2Style="ml-5 "
                  text="Kutish"
                  btnStyle="w-[310px] bg-[#DDD21F] flex  gap-2 flex-row-reverse  justify-between px-5 text-[#FFFFFF] flex gap-2 flex-row- h-[48px] items-center rounded-[15px] h-[60px]"
                  handleClick={() => (createNewColumn())}
                  textStyle=" text-[17px]"
                />
              </div>
              <div className=" gap-2">
                <ReusableBtn
                  className=""
                  btnImg2={plusRound}
                  btnImg=""
                  btnImgStyle="-ml-1.75"
                  btnImg2Style="ml-5"
                  text="Guruh to'plami"
                  btnStyle="w-[310px] bg-[#009F8F] flex  gap-2 flex-row-reverse  justify-between px-5 text-[#FFFFFF] flex gap-2 flex-row- h-[48px] items-center rounded-[15px] h-[60px]"
                  handleClick={() => (createNewColumn())}
                  textStyle=" text-[17px]"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-[1200px] gap-4 h-[3px] absolute z-50">
              <SortableContext items={columnsId}>
                {columns.map((col) => (
                  <ColumnContainer
                    key={col.id}
                    column={col}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                    createTask={createTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    tasks={tasks.filter((task) => task.columnId === col.id)}
                  />
                ))}
              </SortableContext>
            </div>
          </div>

          {createPortal(
            <DragOverlay>
              {activeColumn && (
                <ColumnContainer
                  column={activeColumn}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={tasks.filter(
                    (task) => task.columnId === activeColumn.id
                  )}
                />
              )}
              {activeTask && (
                <TaskCard
                  task={activeTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              )}
            </DragOverlay>,
            document.body
          )}
        </DndContext>
      </div>
    </>

  );
  function createTask(columnId: Id) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: Id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function updateTask(id: Id, content: string) {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });

    setTasks(newTasks);
  }

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
  }

  function updateColumn(id: Id, title: string) {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  }

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === "Column";
    if (!isActiveAColumn) return;

    console.log("DRAG END");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";
    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);
        if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
          // Fix introduced after video recording
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }
        return arrayMove(tasks, activeIndex, overIndex);
      });
    }
    const isOverAColumn = over.data.current?.type === "Column";
    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
}

function generateId() {
  /* Generate a random number between 0 and 10000 */
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
