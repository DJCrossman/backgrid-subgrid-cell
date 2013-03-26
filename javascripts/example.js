(function ($) {
//-------------------DEMO DATA---------------------------------DEMO DATA-------------------------------DEMO DATA-------------------------------------------------------------//
//JSON Info
var clientsIN = [[{"id":0,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":1,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":2,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":3,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":4,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":1,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":2,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":3,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":4,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":5,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":2,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":3,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":4,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":5,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":6,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":3,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":4,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":5,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":6,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":7,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":4,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":5,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":6,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":7,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":8,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":5,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":6,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":7,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":8,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":9,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":6,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":7,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":8,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":9,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":10,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":7,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":8,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":9,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":10,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":11,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":8,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":9,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":10,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":11,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":12,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":9,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":10,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":11,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":12,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":13,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":10,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":11,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":12,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":13,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":14,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":11,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":12,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":13,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":14,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":15,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":12,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":13,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":14,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":15,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":16,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}],[{"id":13,"name":"IQ.Ops Customer #0","avgcost":0,"totcost":50,"avgprice":1,"totprice":4321.04,"quantity":0},{"id":14,"name":"IQ.Ops Customer #1","avgcost":4,"totcost":49,"avgprice":2,"totprice":2160.52,"quantity":0},{"id":15,"name":"IQ.Ops Customer #2","avgcost":8,"totcost":48,"avgprice":3,"totprice":1440.3466666666666,"quantity":0},{"id":16,"name":"IQ.Ops Customer #3","avgcost":12,"totcost":47,"avgprice":4,"totprice":1080.26,"quantity":0},{"id":17,"name":"IQ.Ops Customer #4","avgcost":16,"totcost":46,"avgprice":5,"totprice":864.208,"quantity":0}]];
var territoriesIN = [{"name": "Afghanistan", "url": "http://en.wikipedia.org/wiki/Afghanistan", "pop": 25500100, "date": "2013-01-01", "percentage": 0.36, "id": 1}, {"name": "Albania", "url": "http://en.wikipedia.org/wiki/Albania", "pop": 2831741, "date": "2011-10-01", "percentage": 0.04, "id": 2}, {"name": "Algeria", "url": "http://en.wikipedia.org/wiki/Algeria", "pop": 37100000, "date": "2012-01-01", "percentage": 0.53, "id": 3}, {"name": "American Samoa (USA)", "url": "http://en.wikipedia.org/wiki/American_Samoa", "pop": 55519, "date": "2010-04-01", "percentage": 0.00079, "id": 4}, {"name": "Andorra", "url": "http://en.wikipedia.org/wiki/Andorra", "pop": 78115, "date": "2011-07-01", "percentage": 0.0011, "id": 5}, {"name": "Angola", "url": "http://en.wikipedia.org/wiki/Angola", "pop": 20609294, "date": "2012-07-01", "percentage": 0.29, "id": 6}, {"name": "Anguilla (UK)", "url": "http://en.wikipedia.org/wiki/Anguilla", "pop": 13452, "date": "2011-05-11", "percentage": 0.00019, "id": 7}, {"name": "Antigua and Barbuda", "url": "http://en.wikipedia.org/wiki/Antigua_and_Barbuda", "pop": 86295, "date": "2011-05-27", "percentage": 0.0012, "id": 8}, {"name": "Argentina", "url": "http://en.wikipedia.org/wiki/Argentina", "pop": 40117096, "date": "2010-10-27", "percentage": 0.57, "id": 9}, {"name": "Armenia", "url": "http://en.wikipedia.org/wiki/Armenia", "pop": 3275700, "date": "2012-06-01", "percentage": 0.046, "id": 10}, {"name": "Aruba (Netherlands)", "url": "http://en.wikipedia.org/wiki/Aruba", "pop": 101484, "date": "2010-09-29", "percentage": 0.0014, "id": 11}, {"name": "Australia", "url": "http://en.wikipedia.org/wiki/Australia", "pop": 22808690, "date": "2012-11-11", "percentage": 0.32, "id": 12}, {"name": "Austria", "url": "http://en.wikipedia.org/wiki/Austria", "pop": 8452835, "date": "2012-07-01", "percentage": 0.12, "id": 13}, {"name": "Azerbaijan", "url": "http://en.wikipedia.org/wiki/Azerbaijan", "pop": 9235100, "date": "2012-01-01", "percentage": 0.13, "id": 14}];
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
	model: Client
});

// intialize model
var Territory = Backbone.Model.extend();
// intialize collection
var Territories = Backbone.Collection.extend({ 
	model: Territory
});
// masterview
var WorldView = Backbone.View.extend({
  el: $("#territories-content"),
  initialize: function () {
    this.collection = new Territories(territoriesIN);
    this.setSubcollection();
    this.columns = columns;
    this.render();
  },
  setSubcollection: function (){
    // sets the subcollection for each model
  	this.subcollection = new Clients(clientsIN);
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