(function ($) {
//-------------------DEMO DATA---------------------------------DEMO DATA-------------------------------DEMO DATA-------------------------------------------------------------//
// define the child columns
var subcolumns = [ {name: "id", label: "", cell: "integer"},
				   { name: "name", label: "Name", cell: "string"}, 
                   { name: "pending", label: "Pending Invoices Status", cell: "integer"},
                   { name: "billtype", label: "Billing Type", cell: "string"},
                   { name: "totcost", label: "Total Cost", cell: "number"}, 
                   { name: "totprice", label: "Total Price", cell: "number"}];
// define the parent columns
var columns = [ {name: "subgrid", label: "", cell: "subgrid", optionValues : subcolumns},
                {name: "name", label: "Customer Name", cell: "string"},
                {name: "pop", label: "Population", cell: "integer"},
                {name: "percentage", label: "% of World Population", cell: "number"},
                {name: "date", label: "Date", cell: "date"},
                {name: "url", label: "URL", cell: "uri"},
                {name: "select", label: "", cell: "boolean"}];
//-------------------DEMO DATA---------------------------------DEMO DATA-------------------------------DEMO DATA-------------------------------------------------------------//
// intialize model
var Client = Backbone.Model.extend({});
// intialize collection
var Clients = Backbone.Collection.extend({ 
	model: Client,
	url: "examples/client.json"
});

// intialize model
var Territory = Backbone.Model.extend();
// intialize collection
var Territories = Backbone.Collection.extend({ 
	model: Territory,
	url: "examples/territories.json"
});
// masterview
var WorldView = Backbone.View.extend({
  el: $("#territories-content"),
  initialize: function () {
    this.collection = new Territories();
    this.setSubcollection();
    this.columns = columns;
    this.render();
  },
  setSubcollection: function (){
    // sets the subcollection for each model
  	this.subcollection = new Clients();
    for(var i = 0; i < this.collection.length; i++){
      this.collection.models[i].set('subcollection', this.subcollection[i]);
    }
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
} (jQuery));