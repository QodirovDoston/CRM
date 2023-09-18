import StudentAboutCard from './StudentAboutCard'
import StudentCourse from './StudentCourse'
import StudentPayment from './StudentPayment'
import StudentNotes from './StudentNotes'

const StudentAboutInfo=()=> {
  return (
    <>
      <div className='container'>
        <div className="flex items-start p-[30px] gap-[10px]">
          <div className="grid">
            <StudentAboutCard />
            <StudentCourse />
          </div>
          <div className="grid">
            <StudentPayment />
            <StudentNotes />
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentAboutInfo