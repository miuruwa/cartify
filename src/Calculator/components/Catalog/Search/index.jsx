import {
    useState
} from "react"

import {
    useToolKit
} from "@webx/toolkit"

import Items from "./Items"


function Search({card}) {
    const toolkit = useToolKit()

    const [data, setData] = useState({
        query: "",
        list: toolkit.cartCalc.getNames(),
        originList: toolkit.cartCalc.getNames()
    })

    function handleChange(event) {
        setData(prev => ({
            query: event.target.value,
            list: event.target.value === "" ? prev.originList : toolkit.cartCalc.searchLists(event.target.value)
        }))
    }

    function ItemsWrap () {
        return <div className="items-wrap">
            <h6>
                Сохранённые списки
            </h6>
            <Items list={data.list} card={card}/>
        </div>
    }

    function Finder () {
        const inputProps = {
            type: "text", 
            placeholder: "Название списка",
            value: data.query, 
            onChange: handleChange
        }

        return <form>
            <input {...inputProps} />
        </form>
    }

    function PinBlock () {
        return <div className="pin-block">
            <h6>
                Найти список
            </h6>
            <Finder />
        </div>
    }
    
    return <div className="catalogue search">
        <PinBlock />
        <ItemsWrap />
    </div>
}

export default Search