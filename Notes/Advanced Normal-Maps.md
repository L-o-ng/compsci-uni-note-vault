#notes 

Unlike [[Normal Mapping]], **PBR** models the interaction between light and materials using plausible concepts rather than abstract shininess.
We use three maps:
+ Albedo;
+ Metallic, from 0.0 to 1.0, insulator to conductor;
+ Roughness, from 0.0 to 1.0, mirror to chalk.

We also implement energy conservation:
$$
\text{Diffuse}+\text{Specular}\leq 1.0
$$
If a metal reflects 90% of light, it has only 10% left for diffuse colour.
## Microfacets
We treat every surface as a collection of millions of tiny mirrors.
**Roughness** determines the chaos of these mirrors, creating blurred reflections.
## FBO
We need an FBO as we are changing the pipeline structure. Our calculations often produce light values greater than 1.
Our first pass renders the PBR scene into a floating point texture, which can store our values without clamping.
Our second pass applies tone-mapping, squashing down the bright values to our desired 0-1 range, mimicking how our eyes would react to bright light.
