#notes 

See first: [[Lighting and Shading]], [[Blinn-Phong Lighting Model]]
## Simulating The Sun - Directional Lighting
![[Directional Lighting.png]]
We want to represent a light source that is **infinitely** far away. Because the distance is this large, the light rays arrive **parallel** to each other. Thus, the light vector $\vec{L}$ is **constant**.
### Vertex Shader
We transform positions to clip space and normals to world space, so they match the light direction.
```
in vec3 a_position;
in vec3 a_normal;
uniform mat4 u_mvpMatrix;
uniform mat4 u_normalMatrix; // (M^-1)^T
out vec3 v_normal;

void main() {
	gl_Position = u_mvpMatrix * vec4(a_position, 1.0)
	v_normal = mat3(u_normalMatrix) * a_normal
}
```
### Fragment Shader
Because the light is infinitely far away, all rays are parallel. We can thus skip calculating a vector from the fragment to the light source.
```
in vec3 v_normal;  
uniform vec3 u_lightDirection; // Fixed !  
uniform vec3 u_lightColor;  
void main() {  
	vec3 N = normalize (v_normal);
	vec3 L = normalize (-u_lightDirection);  
	float diff = max (dot(N, L), 0.0);  
	vec3 result = diff * u_lightColor;  
	gl_FragColor = vec4 (result, 1.0);  
}
```
## Simulating a Bulb - Point Lighting
![[Point Lighting.png]]
We want to represent a light with a specific 3D position in the world. The light rays emit radially in all directions.
+ The light vector $\vec{L}$ changes per-pixel: $\vec{L}=P_{\text{light}}-P_{\text{frag}}$;
+ The light gets weaker as it travels further.
### Vertex Shader
We calculate the world position again.
```
out vec3 v_fragPos;

void main() {
	vec4 worldPos = u_model * vec4(a_pos, 1.0);
	v_fragPos = vec3(worldPos);
	gl_Position = u_mvp * vec4(a_pos, 1.0);
}
```
### Fragment Shader
We now calculate distance and falloff. Here, we use $\frac{1}{d^{2}}$. This is rarely used, however, and artists can control the falloff exactly by tuning the denominator.
```
uniform vec3 u_lightPos;

void main(){
	float d = length(u_lightPos - v_fragPos);
	float att = 1.0 / (1.0 + 0.09*d + 0.032*d*d)
	vec3 finalLight = baseColor * att
}
```
## Dense Lighting Optimisation
Point lights are computationally expensive, as their illumination must be evaluated for every fragment in all directions.
Adding too many lights can crash the shader or slow the scene to a halt.
### Distance-Based Culling
We calculate the squared distance from every light to the camera. We then sort the lights and only enable the closest ones.
### Light Baking
For static objects, we can pre-calculate the lighting and save it into a 2D texture. The shader samples this texture with a second set of $(u,v)$ coordinates instead of running light equations. Real time lights are turned off for static geometry.
