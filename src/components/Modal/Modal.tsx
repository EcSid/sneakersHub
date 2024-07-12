import { FC, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

interface RegistrationProps {
    open: boolean,
    children: React.ReactNode
}

const Modal: FC<RegistrationProps>= ({open, children}) => {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return
        }

        if (open) {
            ref.current.showModal();
            ref.current.classList.add("activeModal");
        } else {
            ref.current.classList.remove("activeModal");
            ref.current.close();
        }
    }, [open])

    return createPortal(
        <dialog ref={ref} style={{width: window.innerWidth > 700 ? '36%': '83%'}}>{children}</dialog>,
        document.getElementById('modal') as HTMLDivElement
    )
}
export default Modal
