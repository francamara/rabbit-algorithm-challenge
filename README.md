
# Rabbit finding algorithm challenge

This is a repository inspired by [Ben Awad's](https://youtu.be/XEt09iK8IXs?t=1268) doing a coding interview to [Dan Abramov](https://github.com/gaearon) creator of React Redux and collaborator on the React project.

  

## Disclaimer

Feel completely free to fork this and come up with your own solution. In case you think its a good one, create a Pull Request and I will add it only if its a different one of the ones already in the repo. Although, I encourage you to solve it yourself any way you can find it, maybe following any of the algorithms already in here.

  

## Problem

There is set of holes in a straight line going from _0_ and _n_ number of holes. There is also a rabbit that can appear on any hole index _i_. The rabbit can go right ( _i + 1_ ) or one hole left ( _i - 0_ ).

  
## Ratings

x-x-x

Finds the rabbit in less than 100 attemps (in most cases)

x-x

Finds the rabbit in less than 1000 attempts

x

Takes more than 1000 attempts (this means is not efficient at all)
## My Solutions

  

### Every other number check

- Rating: x-x-x

This algorithm checks every other number. Currently starting from zero (The plan is to make the inital number random, as the position of the rabbit is random too) check every other number, in case odd is first then check the even ones.

#### Observations

- Check the TODO's and improve it even more

### Starting from the middle to the edges

- Rating: x

This algorithm starts checking from the middle ( _n / 2_ ) and then goes both sides like a radar (kinda) but it just doesnt works at all. Not even close to it. Definitely needs a refactor.

## Objectives

My objective with this is once I have multiple algorithms is to develop a system where it tests the different algorithms running it 1000 times and see which one is faster, and then research more about it, what makes it the best and why the others are slower to see if the most efficient can be created based on this data.

## TODO list

- Separate the rabbit's moving algorithm from the initial file so then its easier to use it in another algorithms.

- Add a random initial position to the rabbit

- Do more algorithms

- Reach people to find this repository and come up with their own solutions