var jssrc = document.getElementById('jssrc'), jsdst = document.getElementById('jsdst'),
										slength = document.getElementById('slength'), dlength = document.getElementById('dlength'),
										result = document.getElementById('result');
										function updateStat() {
											if (jssrc.value.length && jsdst.value.length) {
												slength.innerHTML = jssrc.value.length;
												dlength.innerHTML = jsdst.value.length;
												result.innerHTML = (100 * jsdst.value.length / jssrc.value.length).toFixed(2);
											} else {
												slength.innerHTML = 0;
												dlength.innerHTML = 0;
												result.innerHTML = 0;
											}
											document.getElementById('stat').style.display = 'block';
										}
										document.getElementById('minimize').onclick = function() {
											var compressor = new Packer;
											var b62 = (document.getElementById('o_base62').checked);
											var bvars = (document.getElementById('o_svars').checked);
											jsdst.value = compressor.pack(jssrc.value, b62, bvars);
											jsdst.style.display = 'block';
											updateStat();
										};