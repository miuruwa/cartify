import HomePageIcon from "@webx/icons/HeaderLogoIcon"

function onClick() {
    window.location.href = "https://miuruwa.ru/"
}

function HomePageButton() {
    return <div 
      className="header-button second" title="На сайт разработчика"
      onClick={onClick}
    >
        <HomePageIcon />
    </div>
}

export default HomePageButton