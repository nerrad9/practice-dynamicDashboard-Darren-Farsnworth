import TaskList from "./taskList.jsx"
import Greeting from "./greeting.jsx"
import Subscriber from "./subscriber.jsx"

export default function Dash() {
  return (
    <>
    <Greeting name = {"Dr. Doofenshmirtz"}/>
    <Subscriber isSubscribed = {false}/>
    <TaskList/>
    </>
  )
}
