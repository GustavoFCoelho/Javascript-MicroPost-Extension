class Storage{
    getLoggedUser(){
        return JSON.parse(localStorage.getItem("loggedUser"));
    }

    setUser(data){
        localStorage.setItem("loggedUser", JSON.stringify(data))
    }
}

export const lclStorage = new Storage();