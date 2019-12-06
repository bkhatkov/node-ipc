'use-strict';

function clientError(err,socket){
    this.log('server error',err);

    this.emit(
        'error',
        {err,socket}
    );
}

module.exports=clientError;