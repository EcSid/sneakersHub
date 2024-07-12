import { FC, useEffect,  useState } from "react"
import SneakerPost from "./SneakerPost.tsx"
import { ISneaker } from "./types/types.tsx"
import SearchInput from "./SearchInput/SearchInput.tsx"
import fetchSneakers from "../api.ts"
import { boughtSneakers } from "../data.ts"

    
const Main: FC = () => {
    const [sneakers, setSneakers] = useState<ISneaker[]>([])
    const [value, setValue] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    
    useEffect(() => {
        async function fetchSneakersInAsync() {
            setLoading(true)
            try {
                const response: ISneaker[] = await fetchSneakers();
                setSneakers(response)
            } catch (e) {
                alert(e)
            }
            setLoading(false)
        } 

        fetchSneakersInAsync()
        
    }, [])

    
    const arrFiltered = sneakers.filter(el => {
        return el.name.toLowerCase().includes(value.trim().toLowerCase());
    })

    const bannerAndSearch = (
        <>
            <img className='NB_banner' src="https://24segons.wordpress.com/wp-content/uploads/2015/05/banner-jordan1-chicago-20150528.jpg" />
            <SearchInput placeholder="Введите название кроссовок" value={value} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value)
            }}/>
        </>
    )


    if (loading) {
        return (
        <>
            {bannerAndSearch}
            <h3 style={{textAlign: 'center'}}>Loading...</h3>
        </>
        )
    }

    return (
    <>
        {bannerAndSearch}
        <main style={{marginBottom: '10%'}}>
            {arrFiltered.length === 0 ? <h5 className="nothingFound">Ничего не найдено...</h5>: arrFiltered.map(el => {
                if (boughtSneakers.includes(el.id)) {
                    return <SneakerPost key={el.id} sneaker={el} inBasket={true}/>
                }
                return <SneakerPost key={el.id} sneaker={el} inBasket={false}/>
            })}
        </main>
    </>
    )
}
export default Main
