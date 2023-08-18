import {
    Button,
    CardBlock
} from "@web-cross-ui/forms";

function Content () {
    return <CardBlock>
        <form>
            <input type="text" placeholder="Найти список"/>
        </form>
    </CardBlock>
}

function ShowContent () {

    return <Button title="Показать сохранённые" />
}

function Catalog ({hide}) {
    return <div className="catalogue">
        <h6>
            Каталог
        </h6>
        {
            hide ? <ShowContent /> : <Content />    
        }
    </div>
}

export default Catalog;