---
title: Particle Masks
tools: Python, Pygame
timeframe: May 2022
source: https://github.com/lixitrixi/particle-masks
---
This was a small project I made using Pygame, a game-making library for Python. A math course I was working on at the time covered vector fields and gave [this page](https://anvaka.github.io/fieldplay/) as a demonstration. I was surprised my knowledge of programming had so easily surfaced in the course, and decided to make my own version of the program.

After writing the base program, I played around with sampling the colors for each particle from a image:

<img src="/assets/img/starry-mask.png" width="600px" style="filter: brightness(1.8);">

<cap>The particles in this image sample their color from Van Gogh's "Starry Night"</cap>

While neither large nor complex, this project still taught me how computer graphics aren't always as straightforward as they seem. The pixels shown on screen don't have to be part of a cohesive picture. Rather, colors and textures can be sampled from seperate sources and put together for the final effect.

I've recently been experimenting more with building video game texture systems from scratch, and so this knowledge is very helpful.