import firebase from 'firebase';

class Backend {

    uid = '';
    messageRef = null;

    constructor() {
        var config = {
            apiKey: "AIzaSyAdSnkkyZWsbCvc_ofiAH5e_ob5-apXJ_E",
            authDomain: "assignmentsaylani.firebaseapp.com",
            databaseURL: "https://assignmentsaylani.firebaseio.com",
            projectId: "assignmentsaylani",
            storageBucket: "assignmentsaylani.appspot.com",
            messagingSenderId: "947908445479"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            console.log("user======>", user);

            if (user) {
                this.setUid(user.uid);
            } else {
                firebase.auth().signInAnonymously().catch((error) => {
                    alert(error.message);
                });
            }
        })
    }
    createUser(user){
        firebase.auth().createUserWithEmailAndPassword({
            email: user.email,
            password: user.password
        }).then((user)=>{

        })
    }
    setUid(value) {
        this.uid = value
    }
    getUid() {
        return this.uid;
    }
    loadMessages(callback) {
        this.messageRef = firebase.database().ref('messages');
        this.messageRef.off();
        const onReceive = (data) => {
            console.log("Receive Data =====>",data);
            const message = data.val();
            console.log("MEssage Data =======>",message);
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user: {
                    _id: message.user._id,
                    name: message.user.name
                },
            });
        }
        this.messageRef.limitToLast(20).on('child_added', onReceive);
    }
    sendMessage(message) {
        console.log("send Message =====>", message);
        for (let i = 0; i < message.length; i++) {
            this.messageRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            });
        }
    }
    closeChat() {
        if (this.messageRef) {
            this.messageRef.off();
        }
    }
}
export default new Backend;