#notes 

To create motion, we update transformation values inside the render loop. However, there is some nuance with this.
## Frame-Based Updates
`position += speed` will update the position per frame. On a 144hz monitor, the object moves faster than on a 60hz monitor.
## Time-Based Updates
`position += speed * deltaTime` is hardware-independent. **Delta Time** is the time between frames.

```
let lastTime = 0;  
function render(currentTime) {  
	currentTime *= 0.001;
	const deltaTime = currentTime - lastTime;
	lastTime = currentTime;
	rotation += rotationSpeed * deltaTime;
	request AnimationFrame(render);
}
```