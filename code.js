//Created by Aurange

"use strict";

(function(){
 let conn = new RTCPeerConnection({iceServers: [{urls: "stun:stun.l.google.com:19302?transport=udp"}]});
 conn.onicecandidate = function(ice){
  if(ice.candidate)
   if(ice.candidate.candidate.split(" ")[4].indexOf(".local") === -1) {
    document.body.style.backgroundColor = "rgba(" + ice.candidate.candidate.split(" ")[4].split(".").slice(0, -1).join(",") + "," + Number.parseFloat(ice.candidate.candidate.split(" ")[4].split(".")[3]/255).toFixed(2) + ")";
   }
 };
 conn.createDataChannel("");
 conn.createOffer(function(){
  conn.setLocalDescription();
 }, function(){});
})();
