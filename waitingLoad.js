/**
 * Created by kusirus on 22/07/15.
 */

var waitingLoad = function(waitingList, callback){
    this.wl = waitingList;
    this.fn = callback;

    if(this.wl.length <= 0){
        throw "La liste d'attente doit être un tableau";
    }
};

waitingLoad.prototype.loaded = function(load){
    this.wl[load] = 'ok';
    this.lunchCallback();
};

waitingLoad.prototype.lunchCallback = function(){
    var error = 0;

    for(var i = 0; i <= this.wl.length - 1; i++){
        if(this.wl[this.wl[i]] != 'ok'){
            error++;
        }
    }

    if(error == 0){
        this.fn();
    }
};
