import { observable, computed, action } from "mobx";
import { db } from '../config/config';

class Store {


    @observable usersInfo: any = db.collection('users');
    @observable taskInfo: any = db.collection('task');
    @observable ListTask: any = [];

    @action coleccionUser(nombre: string) {
        // Add a new document with a generated id.
        db.collection("users").add({
            nombre: nombre
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    @action coleccionTask(desc: string, status: string) {
        // Add a new document with a generated id.
        db.collection("task").add({
            desc: desc,
            status: status
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    @action listTask() {
        db.collection("task").get().then((querySnapshot) => {
            this.ListTask = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                console.log(this.ListTask);
                this.ListTask.push(doc.data());
            });
        });
    }
}

export const store = new Store();