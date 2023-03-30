// Config




const apiurl = "https://ipinfo.io?token=yourtokenhere"




var whitelist = true
var blacklist = true
var countrybl = true 

const wlip = ["1.1.1.1", "63.225.181.54"];
const blip = ["1.1.1.1", ""];
const blcountry = ["RU", "CH"];












// Actual Code. NO need to edit below this line unless you know what you are doing.



// Fetch the IP and Network INFO
var xhr = new XMLHttpRequest();
xhr.open('GET', apiurl, true);
xhr.send();

xhr.onload = function() {
    if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText)
        document.getElementById('ip').innerHTML =  response.ip;
        document.getElementById('loc').innerHTML =  response.country;
        document.getElementById('org').innerHTML =  response.org;
       

// Whitelist Handler
        if (whitelist == true) {
            if (wlip.includes(response.ip)) {
                console.log("IP is whitelisted")
            }
            else {
                console.log("IP is not whitelisted")
                window.location.href = "https://www.google.com"
            }
        }


// Blacklist Handler

        if (blacklist == true) {
            if (blip.includes(response.ip)) {
                console.log("IP is blacklisted")
                window.location.href = "https://www.google.com"
            }
            else {
                console.log("IP is not blacklisted")
            }
        }
           
// Country Blacklist Handler

        if (countrybl == true) {
            if (response.country == blcountry) {
                console.log("Country is blacklisted")
                window.location.href = "https://www.google.com"
            }
            else {
                console.log("Country is not blacklisted")
            }
        }
 
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};


