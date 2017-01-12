/*## Maps and tiles
* Create a file called `map.js`, then, do the following.
Commit and push as often as you like so that we can monitor the progress of your code
in the pull request.

In this exercise, we're going to create a constructor for maps in a 2D game.
A `Map` is an array of arrays of `Tile` objects. A `Tile` object represents
one square in the map.
It only has a `type` property which will determine if it's water, grass or sand.
The `Map` object will have `width` and `height` properties, and its constructor
will generate width * height `Tile` objects.

To do this exercise, let's follow these steps:

  * Create a constructor function called `Tile` that can create new tiles for our map.
  This function will take parameter `type` and create an object that has these
  properties:
  * `type`: whatever was passed to the `Tile` constructor function
  * The `Tile` objects should also have a method called `isWalkable`. 
  This method should, using `this.type`, return `true` or `false` depending on
  whether the tile can be walked on. 
  The function should return `true` if the type is "grass" or "sand".
  The function should return `false` if the type is anything else.
  * Create a constructor function called `Map` that will generate a map. 
  This function will take parameters `width` and `height` and create a map 
  object with these properties:
    * `width`: whatever was passed to the `Map` constructor function
    (should be an integer value)
    * `height`: whatever was passed to the `Map` constructor function 
    (should be an integer value)
   * `tiles`: this property should be created as a 2D array 
    of `Tile` objects *inside the constructor*.
    Using two nested `for` loops bound by `width` and `height` respectively,
    create `new Tile` objects and give them a **random** value for the `type`, 
    between "grass", "sand" and "water".
     * The `Map` objects should also have two methods on them:
    * `getWalkableOutput`: this method should iterate over the `this.tiles` 2D array,
    and output in the console a rectangle representing the "walkability" of the map.
    For walkable tiles, use an `O`, and for unwalkable tiles use an `X`.
    For example, your output could look something like this for a 4x4 map:

    ```
    OOOO
    OXXO
    OOXO
    OOOO
    ```
 * `getAsciiOutput`: this method should iterate over the `this.tiles` 2D array
    and output in the console a rectangle representing the disposition of the map.
    For grass tiles, use a `*`, for sand tiles use a `:` and for water
    use a `~` symbol. For example, your output could look something like this 
    for the same 4x4 map as above:

    ```
    ****
    *~~*
    **~*
    ::::
    ```*
    */
  
  function Tile(type) {
    this.type= type;
          
  };
  
  Tile.prototype.isWalkable =function () {
          
          if (this.type == "grass" || this.type == "sand") {
              return true;
          }
          else {
              return false;
          }
      };
  function Map(width, height) {
      this.width= width;
      this.height= height;
      this.tiles=[];
      for (var i= 0; i< height; i++){
          
        var tempArray=[];
        
          for (var j= 0; j< width; j++){
              
              var random = 3 * Math.random();
              var typeOfTerrain;
              
          if (random < 1){
              typeOfTerrain = "grass";
          }
          else if(random > 2) {
              typeOfTerrain= "sand";
          }
          else {
              typeOfTerrain= "water";
          }
              var newTile = new Tile(typeOfTerrain);
              tempArray.push(newTile);
          }
          this.tiles.push(tempArray);
      }
     
  };
  
  Map.prototype.getWalkableOutput= function() {
      
      var test =''
      
      for( var i=0; i< this.tiles.length; i++) {
          
          test+= this.tiles[i].reduce(function(accumulator, currentTile){
             
              if (currentTile.isWalkable()) {
                  accumulator += "0";
              }
              else {
                  accumulator += "X";
              }
               return accumulator;
          }, "" )
          test+="\n";
      }
      return test;
  }
    
    Map.prototype.getAsciiOutput= function() {
        var temp= ""
        for( var i=0; i< this.tiles.length; i++) {
          
          temp+= this.tiles[i].reduce(function(accumulator, currentTile){
       
        if( currentTile.type === "grass") {
            accumulator +="*";
        }
        else if(currentTile.type === "sand") {
            accumulator +=":";
        }
        else {
            accumulator +="~";
        }
        return accumulator;
    }, "");
    temp +="\n";
  }
        return temp;
}

var newMap= new Map(4, 4);
 
console.log(newMap);
console.log(newMap.getWalkableOutput());
console.log(newMap.getAsciiOutput());
   

   