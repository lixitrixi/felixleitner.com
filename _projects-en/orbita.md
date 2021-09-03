---
layout: "project-page"
icon: "orbita.png"
title: "Orbita"
desc: "A simple orbital simulation I created when starting off with Pygame."
tools: "Python / Pygame"
timeframe: "April 2021"
source: "https://github.com/lixitrixi/orbita"
---
Game development has always been an interest of mine. Since I started making simple games on Scratch when I was young, I enjoyed gamifying scientific concepts, and this persisted when I started using Pygame. Orbita is my first original project (I had already made one using a tutorial). While it's a simple proof of concept, I had a lot of fun figuring out different aspects such as giving bodies an initial velocity and finding ways to improve efficiency.
<h1>What I learned</h1>
When I initially created a script for attracting the bodies to one another, I failed many times trying to write it in a roundabout way that would vastly improve efficiency. Not wanting to iterate through every body on the screen multiple times every frame - which would lead to an exponential increase in checks - I had to finally scrap my attempts and simply do just that. When it worked very smoothly even as I created multiple bodies on screen, I was surprised by just how much processing power Pygame had compared to the game engine I had used for Scratch before.

At the time I had recently finished a book discussing the beginnings of game creation, when creators had to blit assets onto the screen and get player input without a powerful game engine to help them. Working on Orbita let me do that for myself, albeit in a more modern setting, and gave me important insight into how far computing has come.