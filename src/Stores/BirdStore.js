import {observable ,action,computed } from 'mobx';

class birdStore{

    @observable birds=[];

    @action addBird= (bird) =>{
        this.birds.push(bird);
    }
    @computed get birdCount(){
        return this.birds.length;
        
    }
}

const store = new birdStore();
export default store;