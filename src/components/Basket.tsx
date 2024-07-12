import { FC, useEffect, useState } from "react"
import { sneakerArr } from "../data"
import { boughtSneakers } from "../data"

const Basket: FC = () => {
    const [elemArr, setElemArr] = useState<(string | number)[]>([])
    const isEmpty = Object.keys(boughtSneakers).length === 0

    const countPrice = () => {
        let sum = 0
        elemArr.map(id => {
            return sneakerArr.find(el => el.id === id)?.estimatedMarketValue.slice(0, -1)
        }).forEach(num => {
            sum += Number(num)
        })

        return sum
    }

    useEffect(() => {
        setElemArr([...boughtSneakers])
    }, [])


    return (
    <>
        <div className='allBoughtSneakers' style={{textAlign: 'center'}}>
            <h1 style={{
                marginTop: window.innerWidth < 735 ? '16%' : '8%',
                marginBottom: '-0.5%',
            }}>Корзина</h1>
            {elemArr.map((id, index) => {
                return (
                    <span key={id} style={{position: 'relative', display: 'inline-block', marginRight: '9px', border: '1px solid grey', borderRadius: 8,}}>
                        <img src={sneakerArr.find(elSneak => elSneak.id === id)?.imageRotateSrc} width='190' height='190' style={{marginTop: '9%', marginBottom: '-6%'}}/>
                        <p style={{position: 'absolute', top: '2%', left: '50%', transform: 'translate(-50%)', fontSize: '14.5px',fontWeight: 'bold'}}>
                            {sneakerArr.find(elSneak => elSneak.id === id)?.name} 
                        </p>
                        <p className='price' style={{
                            textAlign: 'center',
                            marginBottom: '3.3%',
                        }}>{sneakerArr.find(elSneak => elSneak.id === id)?.estimatedMarketValue}</p>
                        <button className='button'  
                        style={{
                            position: 'absolute', 
                            right: 2, 
                            bottom: 3, 
                            width: '62px', 
                            height: '25px',
                            cursor: 'pointer',
                            fontSize: '12.5px',
                        }} 
                        onClick={() => {
                            setElemArr(elemArr.filter((e, ind) => {
                                e = String(e)
                                return ind !== index
                            }))
                            boughtSneakers.splice(index, 1)
                        }} >Удалить</button>
                    </span>
                )
            })}
            <h3>Итоговая цена: <span className="price">{countPrice() + '$'}</span></h3>
            <form action='#'>
                <button disabled={isEmpty} style={{cursor: isEmpty ? 'default': 'pointer'}} className="button buttonPay" onClick={() => alert('По тех причинам оплата недоступна')}>{isEmpty ? 'Корзина пуста': 'Перейти к оплате'}</button>
            </form>
        </div>
    </>
    )
}

export default Basket
