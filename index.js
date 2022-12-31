const express = require("express");
const exhbs = require("express-handlebars");
const body = require("body-parser");
const app = express();
const crypto = require("crypto");
const PORT = process.env.PORT || 5000;
const { initializeApp } = require("firebase/app");
const { updateDoc, doc, collection, getDocs, query, where, getFirestore } = require("firebase/firestore");
app.use(express.static("public"));
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.engine(
    "handlebars",
    exhbs.engine({ layoutsDir: "views/layouts", defaultLayout: "main" })
);
app.set("view engine", "handlebars");
const firebaseConfig = {
    apiKey: "AIzaSyCqpzJPGFQEC4VryuIdkKYrOvhxWkXErwA",
    authDomain: "love-matcher-67908.firebaseapp.com",
    projectId: "love-matcher-67908",
    storageBucket: "love-matcher-67908.appspot.com",
    messagingSenderId: "673306542856",
    appId: "1:673306542856:web:211f646994a84e635162bd",
    measurementId: "G-QXMLRL48WD"
};
const app_db = initializeApp(firebaseConfig);
const db = getFirestore(app_db);

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/privacy', (req, res) => {
    res.render('privacy')
});

app.get('/client/:name/:surname/:userid', (req, res) => {
    app_db;
    var id = req.params.userid;
    (async() => {
        const querySnapshot = await getDocs(collection(db, "currentUser"));
        querySnapshot.forEach((docc) => {
            if (docc.data().user == 'none') {
                var dc = doc(db, 'users', '9Sc2NjijKxn7A5yKRiwP')

                (async() => {
                    await updateDoc(dc, {
                        user: userId,
                        state: 'in progress'
                    })
                })()

            } else {
                setTimeout(() => {
                    var dc = doc(db, 'users', '9Sc2NjijKxn7A5yKRiwP')

                    (async() => {
                        await updateDoc(dc, {
                            user: userId,
                            state: 'in progress'
                        })
                    })()
                }, 3000);
            }
        });
    })();
    var name = req.params.name;
    var surname = req.params.surname;
    var str = 'https://client.tswaraekacsecurity.co.za/status/success/' + id
    res.render('client', { name, surname, id });
})
app.get('/status/:state/:idd', (req, res) => {
    var state = req.params.state;
    var idd = req.params.idd;
    console.log(idd);
    if (state == 'success') {
        var id = req.params.userid;
        (async() => {
            // const q = query(collection(db, "users"), where("userId", "==", id));
            const querySnapshot = await getDocs(collection(db, "users"));
            console.log('query')
            querySnapshot.forEach((docc) => {
                // doc.data() is never undefined for query doc snapshots

                if (docc.data().userId == idd) {
                    var dc = doc(db, 'users', docc.id)
                    console.log(docc.id, " => ", docc.data());
                    (async() => {
                        await updateDoc(dc, {
                            status: 'success'
                        })
                    })()

                }
            });
        })();
        var dc = doc(db, 'users', '9Sc2NjijKxn7A5yKRiwP')

        (async() => {
            await updateDoc(dc, {
                user: 'none',
                state: 'none'
            })
        })()
        res.redirect('tswara://?status=success');
    } else {
        res.redirect('tswara://?status=failed');
    }
})
app.listen(PORT, () => {
    console.log("Server started on " + PORT);
});