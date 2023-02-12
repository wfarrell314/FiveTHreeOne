import Datastore from 'react-native-local-mongodb';
  
const db = new Datastore({
    filename: 'asyncStorageKey',
    storage: AsyncStorage,
    autoload: true
  });

export function Insert(document) {
    db.insert(document, function (err, newDoc){
        return newDoc;
    })
 }
