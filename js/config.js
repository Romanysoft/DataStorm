(function () {
    window.RTYConfig = {
        appName:"DataStorm",
        appID:"com.romanysoft.app.macos.DataStorm",
        documentTitle:"DataStorm By Romanysoft",
        supportPlatforms:["Mac","Windows","Linux"],
        googleUA:"UA-76676167-1",
        gitHome:"//github.com/Romanysoft/DataStorm",
        reportIssueUrl:"//github.com/Romanysoft/DataStorm/issues",
        changeLogUrl:"//github.com/Romanysoft/DataStorm/wiki/Changelog",
        wikiUrl:"//github.com/Romanysoft/DataStorm/wiki",
        jumpLocation:"https://www.romanysoft.net/datastorm/",
        romanysoftHome:"//www.romanysoft.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Romanysoft LAB."
    };
    
    if(window.RTYConfig.jumpLocation){
        window.location = window.RTYConfig.jumpLocation;
    }
})();