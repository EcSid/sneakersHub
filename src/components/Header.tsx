import { FC, useState } from 'react'
import userLogo from '/user-icon.svg'
import basketLogo from '/free-icon-font-shopping-cart-3916598.svg'
import homeLogo from '/free-icon-font-home-3917033.svg'
import searchLogo from '/icon-search.svg'
import Modal from './Modal/Modal'
import Main from './Main'
import Basket from './Basket'
import FormToRegister from './FormToRegister/FormToRegister'


const Header: FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [openBasket, setOpenBasket] = useState<boolean>(false)

    function setNewState(type: string, typeBool: boolean) {
    if (type === 'open') {
      setOpen(typeBool)
    } else if (type === 'openBasket') {
      setOpenBasket(typeBool)
    }
  }
   

    return (
        <>
            <header style={{
                height: '50px',
                backgroundColor: '#fafafa',
                borderBottom: '1px solid grey',
                marginBottom: '0%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                verticalAlign: 'center',
                position: 'fixed',
                width: '100%',
                zIndex: 100,
                top: '0%',
                
            }}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src='/public/image.png' width='38px' height='38px' style={{marginRight: '10px'}}/>
                    <h2 tabIndex={1} style={{ color: 'black'}}>Sneakers Hub</h2>
                </div>
                <div className='icons' style={{display: 'flex'}}>
                {!openBasket && (
                    <>
                        <img src={userLogo} width='25px' height='35px' tabIndex={2} onClick={() => setNewState('open', true)}/>
                        <img src={basketLogo} width='25px' height='35px' tabIndex={3} onClick={() => setNewState('openBasket', true)}/>
                        <img src={searchLogo} width='25px' height='35px' tabIndex={4} onClick={() => {
                            document.querySelectorAll('.imageInSneakerPost')[3]?.scrollIntoView({
                                block: 'end',
                                inline: 'center',
                                behavior: 'smooth'
                            })
                        }}/>
                    </>
                )}

                {openBasket && (
                    <>
                        <img src={userLogo} width='25px' height='35px' tabIndex={2} onClick={() => setNewState('open', true)}/>
                        <img src={homeLogo} width='25px' height='35px' tabIndex={3} onClick={() => setNewState('openBasket', false)}/>
                    </>
                )}

                </div>
            </header>    

            <Modal open={ open }>
                    <h2>Регистрация</h2>
                    <FormToRegister />
                    <button className='button' style={{
                        position: 'absolute',
                        bottom: '10.5%',
                        padding: '0.6rem 2rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => setOpen(false)}>Закрыть</button>
            </Modal>

            {!openBasket && (
                <Main />
            )}

            {openBasket && (
                <Basket/>
            )}
        </>
    )
}
export default Header