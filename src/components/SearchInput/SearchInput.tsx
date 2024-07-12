import { FC } from 'react'
import './SearchInput.css'

interface SearchInputProps {
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    value: string
}

const SearchInput: FC<SearchInputProps> = ({onInput, placeholder, value}) => {
    return (
        <form>
            <input onInput={onInput} tabIndex={5} placeholder={placeholder} value={value} type='text'  className="SearchInput"></input>
        </form>
    )
}

export default SearchInput