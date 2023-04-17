import './search.sass'

import searchLogo from "../../../resources/img/search-logo.svg"

export default function Search() {
    return(
        <form className="input" id='search'>
            <input type="search" name="search" placeholder='Поиск...' className='input__field'/>
            <button className='input__btn'><img src={searchLogo} alt="лупа"/></button>
        </form>
    )
}