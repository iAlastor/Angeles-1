let cheatMenuCode = `
<div class="Angeles" id="Angeles_window">

	<style>
        .Angeles {
            left: 1%;
            top: 15%;
            position: fixed;
            z-index: 1000;
            display: flex;
        }

        .Angeles__content {
            padding: 15px;
            background: #140033;
            box-shadow: 0 5px 15px black;
            font-family: 'Roboto', sans-serif;
            color: white;
            font-size: 0.9375rem;
            font-weight: 500;
            border-radius: 15px;
        }
	</style>

	<div class="Angeles__content">
		<center>Angeles</center><hr>

		<div id="gameStates" style="display: none;">
			<p>AirBreak: <font id="airBreakStateColor" color="red"><label id="airBreakState">FALSE</label></font></p>
			<p>AirBreak Speed: <font color="#e699ff"><label id="airBreakSpeed">100</label></font></p>
			<p>Anti-Aim: <font id="antiAimStateColor" color="red"><label id="antiAimState">FALSE</label></font></p>
			<p>Auto Mining: <font id="autoMiningStateColor" color="red"><label id="autoMiningState">FALSE</label></font></p>
		</div>

		<div id="infoWindow">
			<p>Hack by Angeles</p>
			<p>Use only</p>
			<p><a href="https://www.youtube.com/channel/UCmoLkyugdn0LHBJCL8XaANg" target="_blank" rel="noopener noreferrer">Cheat source</a></p>
		</div>

	</div>
	
	<script>
		document.addEventListener('keyup', function (evt)
		{
			if (evt.keyCode === 45)
			{
				if (document.getElementById("shizoval_window").style.display == "none")
				{
					document.getElementById("shizoval_window").style.display = "";
				}
				else
				{
					document.getElementById("shizoval_window").style.display = "none";
				}
			}
		});
	</script>
	
</div>
`;
