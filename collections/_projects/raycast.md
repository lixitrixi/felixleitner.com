---
title: Ray Casting
tools: Python, Pygame
timeframe: Jun 2022
order: 5
---
I've always been interested in 3D computer graphics, and this project gave me some hands-on experience with it. I created a camera object that could move around a 3D scene, and placed a sphere in the middle of it. By shooting "rays" from the camera at many different angles and calculating their intersection with the sphere, I was able to render the sphere onto a 2D screen.

<img src="/assets/icons/raycast.png" width="300px">

I implemented a light source as well and calculated the brightness at each visible point on the sphere by finding how much it faced the light source. The end result was a low-res sphere that you could move around and view from different angles.

I hope to use this method when making a 3D game in the future, as it allows for some very cool atmospheric graphics!