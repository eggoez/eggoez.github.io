<!--
var MM_contentVersion = 6;
var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if ( plugin ) {
		var words = navigator.plugins["Shockwave Flash"].description.split(" ");
	    for (var i = 0; i < words.length; ++i)
	    {
		if (isNaN(parseInt(words[i])))
		continue;
		var MM_PluginVersion = words[i]; 
	    }
	var MM_FlashCanPlay = MM_PluginVersion >= MM_contentVersion;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
   && (navigator.appVersion.indexOf("Win") != -1)) {
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n'); //FS hide this from IE4.5 Mac by splitting the tag
	document.write('on error resume next \n');
	document.write('MM_FlashCanPlay = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');
	document.write('</SCR' + 'IPT\> \n');
}
if ( MM_FlashCanPlay ) {
		document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	document.write('  codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ');
	document.write(' ID="dm08blogparts" WIDTH="160" HEIGHT="180" ALIGN="">');
	document.write(' <PARAM NAME=movie VALUE="//goez.my.id/asset/swf/bp_doraclock.swf"><PARAM NAME=quality VALUE=high><PARAM NAME=wmode VALUE=transparent>'); 
	document.write(' <EMBED src="//goez.my.id/asset/swf/bp_doraclock.swf" quality=high wmode=transparent');
	document.write(' swLiveConnect=FALSE WIDTH="160" HEIGHT="180" NAME="dm08blogparts" ALIGN=""');
	document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="https://www.macromedia.com/go/getflashplayer">');
	document.write(' </EMBED>');
	document.write(' </OBJECT>');
}
//-->
