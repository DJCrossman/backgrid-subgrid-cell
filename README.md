# Backgrid-Subgrid-Cell.js

Yo' dawg, I heard you like grids. This extension of Backgrid.js allows the user to attach a collection to each individual model. For larger projects that handle complex sets of components. It follows the same structure of Backgrid.js to provide offers a simple programming solution.

Backgrid-subgrid-cell.js offers the user a choice of organizing their data so that fits best. Keeping the data structure formed by Backbone.js, this tool

## Advantages

- Like Backgrid.js, Solid foundation. Based on Backbone.js.
- Like Backgrid.js, Semantic and easily stylable. 
- Like Backgrid.js, Easy things are easy, hards things possible.
- Like Backgrid.js, Components are just simple Backbone View classes, customization is easy.
- Like Backgrid.js, Goodish documentation.

## Getting Started

Before you jump into this extension
- [Backbone.js](http://documentcloud.github.com/backbone/)
- [Backgrid.js](http://wyuenho.github.com/backgrid/)

## Example
```
// define the child columns
var subcolumns = [ 
    { name: "id", label: "", cell: "integer"},
    { name: "name", label: "Name", cell: "string"}, 
    { name: "pending", label: "Pending Invoices Status", cell: integer"},
    { name: "billtype", label: "Billing Type", cell: "string"},
    { name: "totcost", label: "Total Cost", cell: "number"}, 
    { name: "totprice", label: "Total Price", cell: "number"}];
// define the parent columns
var columns = [
    { name: "subgrid", label: "", cell: "subgrid", optionValues : subcolumns},
    { name: "id", label: "ID", cell: "integer"},
    { name: "name", label: "Customer Name", cell: "string"},
    { name: "pop", label: "Population", cell: "integer"},
    { name: "percentage", label: "% of World Population", cell: "number"},
    { name: "date", label: "Date", cell: "date"},
    { name: "url", label: "URL", cell: "uri"},
    { name: "select", label: "", cell: "boolean"}];
```

The subgrid is called with the cell type: _subgrid_. A subgrid cell requires the user to supply both a subcolumn and a subcollection (similiar to how a grid requires a column and collection). 
```
// intialize model
var Territory = Backbone.Model.extend({});
// intialize collection
var Territories = Backbone.Collection.extend({
  model: Territory,
  url: "examples/territories.json"
 });
// masterview
var WorldView = Backbone.View.extend({
  el: $("#territories-content"),
  initialize: function () {
    this.collection = new Directory(invoiceList);
    // sets the subcollection for each model
    for(var i = 0; i < this.collection.length; i++){
    // where masterSubList is an array of collections
      this.collection.models[i].set('subcollection', masterSubList[i]);
    }
    this.columns = columns;
    this.render( columns );
  },
  render: function () {
    // creates a grid
    this.grid = new Backgrid.Grid({
        columns: this.columns,
        collection: this.collection
    });
    // appends grid to view
    this.$el.append(this.grid.render().el);
  }
});
var world = new WorldView();
```
Boom! This initializes a grid with subgrid. 

## Result
Check it out [here](http://DJCrossman.github.com/backgrid-subgrid-cell//).
