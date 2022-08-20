class Page {
    goto() {
        console.log("going to a page");
    }

    setCookie(){
        console.log("Setting a page cookie");
    }
}

class CustomPage {
    // static functions can be called without actually creating a class instance 
    static buildPage(){
        const page = new Page();
        const customPage = new CustomPage(page);
        
        //creating a new proxy here
        const superPage = new Proxy(customPage, {
            get: function(target, property){
                return target[property] || target.page[property];
            }
        });
        return superPage;
    }

    constructor(page){
        this.page = page;
    }

    login(){
        this.page.goto();
        this.page.setCookie();
    }
}

const superPage = CustomPage.buildPage();
superPage.login();
superPage.goto();