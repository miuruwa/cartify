import HomePageIcon from "@webx/icons/HomePageIcon"

function onClick() {
    window.location.href = "https://miuruwa.ru/"
}

function HomePageButton() {
    return <div 
      className="header-button second" title="На главную"
      onClick={onClick}
    >
        <HomePageIcon />
    </div>
}

export default HomePageButton