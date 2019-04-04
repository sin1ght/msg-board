import PouchDB from 'pouchdb';


//const localDB = new PouchDB('bbs');
const remoteDB = new PouchDB('http://127.0.0.1:5984/bbs',{
    auth:{
        username:'root',
        password:'root'
    }
});



export default {
    remoteDB
}