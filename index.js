function portfolio(evt, portfolioName) {
  let i, portfolioLink, portfolioContent;

  portfolioContent = document.getElementsByClassName("portfolio-Content");
  for (i = 0; i < portfolioContent.length; i++) {
    portfolioContent[i].style.display = "none";
  }

  //   Gets all the link with the class of "active" and remove it
  portfolioLink = document.getElementsByClassName("portfolio-Link");
  for (i = 0; i < portfolioLink.length; i++) {
    portfolioLink[i].className = portfolioLink[i].className.replace(
      "active",
      ""
    );
  }

  document.getElementById(portfolioName).style.display = "grid";
  evt.currentTarget.className += "active";
}

document.getElementById("defaultOpen").click();
