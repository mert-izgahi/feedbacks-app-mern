import {LuLoader} from "react-icons/lu";

function LoadingState() {
  return (
    <div className="flex items-center justify-center h-64">
      <LuLoader className="animate-spin" />
    </div>
  )
}

export default LoadingState