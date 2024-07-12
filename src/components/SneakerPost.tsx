import { FC,  useEffect,  useRef, useState } from 'react'
import { ISneaker } from './types/types'
import useHover from './hooks/useHover'
import { boughtSneakers } from '../data'

interface SneakerProps {
    sneaker: ISneaker,
    inBasket: boolean
}



const SneakerProps: FC<SneakerProps> = ({sneaker, inBasket}) => {
    const divRef = useRef<HTMLDivElement>(null)
    const isHover = useHover(divRef)
    const [isBuying, setIsBuying] = useState<boolean>(false)




    useEffect(() => {
        if (isBuying) {
            boughtSneakers.push(sneaker.id)
        }
    }, [isBuying])
    


    return (    
        <div ref={divRef} style={{
            border: '1px solid grey',
            borderRadius: 25,
            height: '270px',
            padding: '0.8rem 2rem',
            width: '270px',
            textAlign: 'center',
            position: 'relative',
            marginBottom: '3%'
        }}>
            <p style={{height: '38px', fontSize: '18px'}}>{sneaker.name.slice(0, 50)}</p>
            <img className='imageInSneakerPost' src={isHover ? sneaker.imageRotateSrc: sneaker.imageSrc} width='190px' height='190px'></img>
            <p className='price'>{sneaker.estimatedMarketValue}</p>
            <button className='button'  
            style={{
                position: 'absolute', 
                right: 1, 
                bottom: 3, 
                width: '70px', 
                height: '25px',
                cursor: isBuying || inBasket ? 'default': 'pointer',
                marginRight: '1rem'
            }} 
            onClick={() => setIsBuying(true)} disabled={isBuying || inBasket}
            >{isBuying || inBasket ? 'В корзине': 'Купить'}</button>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
export default SneakerProps


