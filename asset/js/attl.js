var normal="abcdefghijklmnopqrstuvwxyz!?0123456789.<>"
   var changed="ᾄвƈḋἔғʛђἷʝќłмᾗὄῥqʀṩҭὗvᾧẋẏẓ!ʔ૦1૨૩456789●«»"
   
   
   function change(_in, _out)
   {
     var s="";
     var n=_in.value.toLowerCase();
   
     ///if (_in.value.length=="0") _arab.value="";
     
     for(i=0; i<n.length; i++)
     {
       var c=n.charAt(i);
       for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
       if (j<normal.length) { 
         s+=changed.charAt(j);} else {
         s+=c;
       }
     }
   
     _out.value=s;
   
   }
   
   function focusFirst() {
   
     if (els = oTD.getElementsByTagName("input")) {
       els[0].focus();
     }
   }
   
   function highlight(field) {
   field.focus();
     field.select();
   }