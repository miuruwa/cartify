import HomePageIcon from "@webx/icons/HomePageIcon";

function onClick() {
    window.location.href = "https://kensoi.github.io/";
}

function HomePageButton() {
    return <div 
      className="header-button second"
      onClick={onClick} title="На главную"
    >
        <HomePageIcon />
    </div>
}

export default HomePageButton;