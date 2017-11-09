var csssrc = document.getElementById('csssrc'), cssdst = document.getElementById('cssdst'),
					slength = document.getElementById('slength'), dlength = document.getElementById('dlength'),
					result = document.getElementById('result');
					function updateStat() {
						if (csssrc.value.length && cssdst.value.length) {
							slength.innerHTML = csssrc.value.length;
							dlength.innerHTML = cssdst.value.length;
							result.innerHTML = (100 * cssdst.value.length / csssrc.value.length).toFixed(2);
						} else {
							slength.innerHTML = 0;
							dlength.innerHTML = 0;
							result.innerHTML = 0;
						}
						document.getElementById('stat').style.display = 'block';
					}
					document.getElementById('minimize').onclick = function() {
						var compressor = new CSSOCompressor(), translator = new CSSOTranslator();
						if (false === document.getElementById('o_colors').checked) {
							delete compressor.defCCfg.compressColor;
						} else {
							compressor.defCCfg['compressColor'] = 1;
						}
						if (false === document.getElementById('o_fweight').checked) {
							delete compressor.defCCfg.compressFontWeight;
						} else {
							compressor.defCCfg['compressFontWeight'] = 1;
						}
						cssdst.value = translator.translate(cleanInfo(compressor.compress(srcToCSSP(csssrc.value, 'stylesheet', true))));
						cssdst.style.display = 'block';
						updateStat();
					};