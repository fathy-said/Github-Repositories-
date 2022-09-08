let theInput = document.querySelector(".repos .row input");
let getButton = document.querySelector(".repos .row .get-button");
let reposData = document.querySelector(".repos .show-data");

getButton.onclick = function () {
    gatRepos();
};
//
function gatRepos() {
    if (theInput.value == "") {
        reposData.innerHTML = `
        <span>please write github username</span>
        `;
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((result) => {
                let data = result.json();
                return data;
            })
            .then((data) => {
                reposData.innerHTML = "";

                data.forEach((na) => {
                    // create-the-data-name
                    let mainDiv = document.createElement("div");
                    let dataName = document.createTextNode(na.name);

                    mainDiv.appendChild(dataName);
                    //
                    // create-the-data-name-link
                    let mainLink = document.createElement("a");
                    let mainLinkText = document.createTextNode("visit");
                    mainLink.appendChild(mainLinkText);
                    //
                    // set-mainLink-href
                    mainLink.href = `https://github.com/${theInput.value}/${na.name}`;
                    mainDiv.appendChild(mainLink);
                    //
                    // set-target-blank
                    mainLink.setAttribute("target", "blank");
                    //
                    // append-the-All-data-in-the-reposData
                    reposData.appendChild(mainDiv);
                });
            });
    }
}
