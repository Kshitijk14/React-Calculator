import { ReactNode } from "react"
import { Button } from "./"

interface AlertProps {
    children: ReactNode
    onClose: () => void
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <>
        <div className="alert alert-primary alert-dismissible">{children}</div>
        <button type="button" className="btn-close" onClick={onClose} data-ds-dismiss=""></button>
        {/* <Button onClick={() => console.log("Clicked")}> Sign Up </Button> */}
    </>
  )
}

export default Alert