function newImage(posLeft, posBottom, imageSource) {
	let image = document.createElement('img')
	image.src = imageSource
	image.style.position = 'fixed'
	image.style.left = posLeft
	image.style.bottom = posBottom
	document.body.append(image)

	return image
}

function newItem(posLeft, posBottom, imageSource) {
	let item = newImage(posLeft, posBottom, imageSource)
	item.addEventListener('dblclick', function(){
		item.remove() 
	})
}


// background
let backgroundImage = "assets/grass.png"

for (let y = 0; y < window.innerHeight; y += 100)
{
	if (y > window.innerHeight * 0.5)
	{
		backgroundImage = "assets/sky.png"
	}

	for (let x = 0; x < window.innerWidth; x+= 100)
	{
		newImage(x + "px", y + "px", backgroundImage)
	}
}

// props
newImage('100px', '100px', 'assets/green-character.gif')
newImage('450px', '200px', 'assets/pine-tree.png')
newImage('200px', '300px', 'assets/tree.png')
newImage('350px', '100px', 'assets/pillar.png')
newImage('150px', '200px', 'assets/crate.png')
newImage('500px', '425px', 'assets/well.png')

// items
newItem('500px', '405px', 'assets/sword.png')
newItem('165px', '185px', 'assets/sheild.png')
newItem('600px', '100px', 'assets/staff.png')
