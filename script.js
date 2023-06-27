//Variable->
const get = (param) => document.getElementById(`${param}`)
const url = "https://api.github.com/users/"
const input = get("input");
const btnmode = get("btnmode");
const btnSearch = get("btnSearch")
const avatars = get("avatar");
const pName = get("pName");
const profileLink = get("profileLink")
const date = get("date");
const bio = get("bio");
const repo = get("repo");
const followers = get("follower");
const following = get("following");
const locations = get("location");
const portfolio = get("portfolio");
const twitter = get("twitter");
const org = get("org");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Events->
btnSearch.addEventListener("click", function() {
    console.log(url + input.value);
    if(input.value !== ""){
        getUser(url+input.value);
    }
});
input.addEventListener(
    "keydown",
    function (e) {
      if (!e) {
        var e = window.event;
      }
      if (e.key == "Enter") {
        if (input.value !== "") {
          getUser(url + input.value);
        }
      }
    },
    false
  );
btnmode.addEventListener("click", function() {
    document.getElementById("wrapper").classList.toggle("white1")
    document.getElementById("header").classList.toggle("white1")
    document.getElementById("heading").classList.toggle("white2")
    document.getElementById("container1").classList.toggle("white2")
    document.getElementById("container2").classList.toggle("white2")
    document.getElementById("pName").classList.toggle("white3")
    document.getElementById("list").classList.toggle("white3")
    document.getElementById("input").classList.toggle("white3")
    document.getElementById("date").classList.toggle("white1")
    document.getElementById("heading").classList.toggle("white1")
    document.getElementById("heading").classList.toggle("white1")
    document.getElementById("heading").classList.toggle("white1")
    console.log(btnmode.innerText)
    if(btnmode.innerText === "Light"){
        btnmode.innerText = "Dark";
    }else{
        btnmode.innerText = "Light";
    }

});
//Functions->
function getUser(giturl) {
    console.log(giturl)
    fetch(giturl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        updateProfile(data);
    })
    .catch((error) => {
        throw error;
    });
};
function updateProfile(data) {
    if(data.message !=='Not Found') {
        avatars.src = data.avatar_url;
        pName.innerText = data.name === null ? data.login : data.name;
        profileLink.href = data.html_url;
        profileLink.innerText = "@" + data.login;
        bio.innerText = data.bio===null? "Not Available": data.bio;
        repo.innerText = data.public_repos;
        followers.innerText = data.followers;
        following.innerText = data.following;
        locations.innerText = data.location===null? "Not Available": data.location;
        portfolio.innerText = data.email===null? "Not Available": data.email;
        twitter.innerText = data.twitter_username===null? "Not Available": data.twitter_username;
        org.innerText = data.company===null? "Not Available": data.company;
        datesegments = data.created_at.split("T").shift().split("-");
        date.innerText ="Joined on " + datesegments[2] + " " + months[datesegments[1]-1] + " " + datesegments[0];
        document.getElementById("error").style.transform = "scale(0)"
    }else{
        document.getElementById("error").style.transform = "scale(1)"
    }
}
function white() {
    // document.getElementById("heading").style.color = "black";
    // document.getElementById("wrapper").style.backgroundColor = "white"

}
getUser(url+"sarthakroy107");