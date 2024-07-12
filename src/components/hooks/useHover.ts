import { useEffect, useState } from "react";

interface IRef {
    current: HTMLDivElement | null
}

export default function useHover(ref: IRef) {
    const [isHover, setHovering] = useState(false);
    useEffect(() => {
        if (ref === undefined || ref.current == null) { 
            return;
        }
        const node = ref.current;

        node.addEventListener('mousemove', () => setHovering(true));
        node.addEventListener('mouseenter', () => setHovering(true));
        node.addEventListener('mouseleave', () => setHovering(false));

        return () => {
            node.removeEventListener('mousemove', () => setHovering(true));
            node.removeEventListener('mouseenter', () => setHovering(true));
            node.removeEventListener('mouseleave', () => setHovering(false));
        }

    }, [])
    
    return isHover;
}