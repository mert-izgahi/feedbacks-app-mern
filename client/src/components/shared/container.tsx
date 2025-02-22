import React from "react"
import { cn } from "../../helpers/utils"


interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

function Container(props: ContainerProps) {
  const { className, ...rest } = props
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className!)} {...rest}>
      {props.children}
    </div>
  )
}

export default Container