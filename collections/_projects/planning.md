---
title: Planning
desc: A Rust library for generic action planning
tools: Rust
timeframe: Aug 2024
source: https://github.com/lixitrixi/planning
order: 2
---
`Planning` is an open-source Rust library used to plan efficient sequences of actions to reach user-specified goal states. This seems pretty vague, but the strength of the library is its very general nature!

My research into Action Planning began when an ongoing game development project required me to create video game creature AIs. Creatures had to be smart&mdash;they had to be able to prioritise different tasks based on their difficulty&mdash;and the system had to be highly expandable and modular to stay in line with the rest of my game logic. My ideal system was one where a "grab-bag" of different tasks could be checked dynamically and the best plan could be chosen. [This Reddit post](TODO) provided a great working example and, although the linked academic paper led to a 404 page, it gave me the correct keywords to continue my search.

Although there exist several implementations of Goal-Oriented Action Planning (GOAP) in Rust, none of them achieved my original needs well enough. None of them supported arbitrary state types (only string-boolean hashmaps), and none of them supported dynamic priority and costs based on state. So I created my own toolkit with an emphasis on generality and simplicity.

In my library, users define the pre-conditions of actions and how they affect the state, as well as the conditions for a goal to be met. The algorithm will then find a sequence of actions to achieve the goal state from the current state with the minimum total cost. The library itself is therefore very lightweight, providing only a few interfaces (or `Traits` in Rust), the central method for creating a plan using those interfaces, and a powerful type which combines all the functionality (below).

The `Agent` type contains a grab-bag of actions and goals as well as a current state. Methods of the class can then return an efficient action sequence to the highest-priority achievable goal, calculated dynamically. An alternative method is smarter, balancing the priority of each goal with the total minimum cost to reach it, and returning the plan with the highest *profit* in this regard.

This is my first open-source software library which has seen use outside of a specific project. At the time of writing, `planning` has nearly 600 downloads on [crates.io](https://crates.io) and is continuing to grow! As I use it in my own personal projects I hope to add and improve features and see others contribute as well. It's been highly rewarding!
