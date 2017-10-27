dN=["Akad","Senen","Seloso","Rebo","Kemis","Jemuah","Sebtu"];
mN=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"];
pS=["Legi","Pahing","Pon","Wage","Kliwon"];
sT=["font-size:","<tr>","</tr>"];

BdY="<thead><tr>"
BdY+="<style>.pagination,.previous,.next{cursor:pointer;}#dtl {font-size:20px;}@media (max-width: 420px) {#dtl {font-size:13px;}.copyleft,#ilang{display:none;}}</style>";
//BdY+=sT[1]+""+sT[2];
BdY+=sT[1]+"<th class='danger'>"+dN[0]+"</th><th>"+dN[1]+"</th><th>"+dN[2]+"</th><th>"+dN[3]+"</th><th>"+dN[4]+"</th><th class='success'>"+dN[5]+"</th><th>"+dN[6]+"</th>"+sT[2]+"</tr></thead><tbody><tr>";
for(iC=0;iC<=41;iC++){if(iC==5|iC==12|iC==19|iC==26|iC==33|iC==40){cls="info";ftr="";etr="";}else
if(iC==6|iC==13|iC==20|iC==27|iC==34|iC==41){cls="";ftr="";etr=sT[2];}else
if(iC==0|iC==7|iC==14|iC==21|iC==28|iC==35){cls="warning";ftr=sT[1];etr="";}else{cls="tgl";ftr="";etr="";};
BdY+=ftr+"<td class='"+cls+"' id='iD"+iC+"'></td>"+etr;};
document.write(BdY+"</table>");chgMth(2,0);
//window.resizeTo(448,358);
//window.resizeTo(448+(448-document.body.offsetWidth),358+(358-document.body.offsetHeight));
//window.moveTo((screen.width/2)-(448/2),(screen.height/2)-(358/2));

function chgMth(i,y){if(i==0){yR=(yR-y);};
if(i==1){if(mT>0){mT=(mT-1);}else{if(yR==100){mT=0;}else{mT=11;yR=(yR-1);};};};
if(i==2){t0=new Date();mT=t0.getMonth();yR=t0.getFullYear();};
if(i==3){if(mT<11){mT=(mT+1);}else{if(yR==250000){mT=11;}else{mT=0;yR=(yR+1);};};};
if(i==4){yR=(yR+y);};if(yR>250000){yR=250000;};if(yR<100){yR=100;};
for(CnT=0;CnT<=41;CnT++){document.getElementById("iD"+CnT).style.backgroundColor="#none";};
bD=new Date(yR,mT,1).getDay();mD=new Date(yR,mT,0).getDate()-(bD-1);
for(bR=0;bR<bD;bR++){document.getElementById("iD"+bR).innerHTML="<font style='"+sT[0]+"12pt;color:gray;'>"+mD+"</font>";mD+=1;};
for(aD=1;aD<=new Date(yR,(mT+1),0).getDate();aD++){
t1=new Date(100,0,1);t2=new Date(yR,mT,aD);
sb=(((Date.parse(t2)-Date.parse(t1))/(24*60*60*1000))%(5));
document.getElementById("iD"+bD).innerHTML="<font style='"+sT[0]+"18pt;'>"+aD+"</font><br/>"+pS[sb];
if(aD==t0.getDate()&mT==t0.getMonth()&yR==t0.getFullYear()){document.getElementById("iD"+bD).style.backgroundColor="#ffff66";};
bD=(bD+1);}dtl.innerHTML="<b>"+mN[mT]+" "+yR+"</b>";
for(vD=1;bD<=41;vD++){document.getElementById("iD"+bD).innerHTML="<font style='"+sT[0]+"12pt;color:gray;'>"+vD+"</font>";bD+=1;};};