# Game of Life

A little side project I've been playing with because Conway's [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is pretty cool. Hopefully this won't be a one time thing I worked on because I had a lazy weekend.

### Prerequisites

Runs off Node, so make sure you have at least the following versions installed.

```
Teepole@thinkpadX220:~$ node -v
v10.16.0
Teepole@thinkpadX220:~$ npm -v
6.10.1
```

I can't guarantee it'll work on earlier versions, but as long as they support Webpack it should be fine.

### Installing

Clone the project and then run `npm install`. Once the dependencies are installed you'll have to transpile the source code to CommonJS by running `npm run build`. To run the code then do `node dist/app.js`.


## References for Later

* [Game of Life Wiki](http://www.conwaylife.com/wiki/Main_Page)
* [A Guided Tour of Asynchronous Cellular Automata](https://arxiv.org/abs/1406.0792)
* [Cellular automaton models for time-correlated random walks](https://www.nature.com/articles/s41598-017-17317-x)

