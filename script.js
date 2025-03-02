//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector("input[type='button']");

removeButton.addEventListener("click",()=>{
	const selectedIndex = colorSelect.selectedIndex;
	if(selectedIndex!==-1){
		colorSelect.remove(selectedIndex)
	}
})