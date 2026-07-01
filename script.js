import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig={
  apiKey:"AIzaSyBLFF8VDiDr9GqijxtTzM7vS-SZR3qXGg8",
  authDomain:"ak-sport-a985e.firebaseapp.com",
  databaseURL:"https://ak-sport-a985e-default-rtdb.firebaseio.com",
  projectId:"ak-sport-a985e",
  storageBucket:"ak-sport-a985e.appspot.com",
  messagingSenderId:"922662521404",
  appId:"1:922662521404:web:bfe68c03e01271a8ddd139"
};

const app=initializeApp(firebaseConfig);
const db=getDatabase(app);

const list=document.getElementById("list");
const template=document.getElementById("channelTemplate");
const searchBox=document.getElementById("searchBox");

let allChannels=[];

function renderChannels(channels){
  list.innerHTML="";
  channels.forEach(channel=>{
    const clone=template.content.cloneNode(true);
    clone.querySelector(".channel-image").src=channel.img;
    clone.querySelector(".channel-name").textContent=channel.name;
    clone.querySelector(".item").onclick=function(){
      window.open(channel.url,"_blank");
    };
    list.appendChild(clone);
  });
}

function loadChannels(){
  const channelsRef=ref(db,"ak_tv_2");
  onValue(channelsRef,(snapshot)=>{
    const data=snapshot.val();
    if(!data) return;
    allChannels=Object.values(data);
    renderChannels(allChannels);
  });
}

searchBox.addEventListener("input",function(){
  const query=searchBox.value.trim().toLowerCase();
  const filtered=allChannels.filter(channel=>
    channel.name.toLowerCase().includes(query)
  );
  renderChannels(filtered);
});

loadChannels();
