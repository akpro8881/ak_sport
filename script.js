import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "ضع Api Key هنا",
    authDomain: "اسم المشروع.firebaseapp.com",
    databaseURL: "https://اسم-المشروع-default-rtdb.firebaseio.com",
    projectId: "اسم المشروع",
    storageBucket: "اسم المشروع.appspot.com",
    messagingSenderId: "xxxxxxxx",
    appId: "xxxxxxxx"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// الاتصال بقاعدة البيانات
const db = getDatabase(app);

// مرجع البيانات
const channelsRef = ref(db, "ak_tv_2");

// قراءة البيانات
onValue(channelsRef, (snapshot) => {

    const data = snapshot.val();

    console.log(data);

});