import {observable ,action,computed } from 'mobx';
import { create, persist } from 'mobx-persist';
import localForage from "localforage";

class birdStore{

    @persist('list') @observable birds=[];

    @action addBird= (bird) =>{
        this.birds.push(bird);
    }
    @computed get birdCount(){
        return this.birds.length;
        
    }
}
const hydrate = create({
    storage: localForage,   // or AsyncStorage in react-native.
                            // default: localStorage
    jsonify: false  // if you use AsyncStorage, here shoud be true
                    // default: true
})

const store = new birdStore();
export default store;


hydrate('Some', store)
    .then(() => console.log('some hydrated'))