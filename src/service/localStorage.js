class Storage{
    getLoggedUser(){
        return localStorage.getItem("loggedUser");
    }
}

export const lclStorage = new Storage();