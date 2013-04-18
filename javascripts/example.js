(function ($) {
//-------------------DEMO DATA---------------------------------DEMO DATA-------------------------------DEMO DATA-------------------------------------------------------------//
//JSON Info
var clientsIN = [
		[{"id":0,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":1,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":2,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":3,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":4,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":5,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":6,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":7,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":8,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":9,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":10,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":11,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":12,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":13,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":14,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":15,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":16,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":17,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":18,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":19,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":20,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":21,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":22,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":23,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":24,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":25,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":26,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":27,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":28,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":29,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":30,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":31,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":32,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":33,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":34,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":35,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":36,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":37,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":38,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":39,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":40,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":41,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":42,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":43,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":44,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":45,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "new"},
				{"id":46,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "new"},
				{"id":47,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "new"},
				{"id":48,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "new"},
				{"id":49,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "new"}],

		[{"id":50,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "0"},
				{"id":51,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "0"},
				{"id":52,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "0"},
				{"id":53,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "0"},
				{"id":54,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "0"}],

		[{"id":55,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "0"},
				{"id":56,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "0"},
				{"id":57,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "0"},
				{"id":58,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "0"},
				{"id":59,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "0"}],

		[{"id":60,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "0"},
				{"id":61,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "0"},
				{"id":62,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "0"},
				{"id":63,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "0"},
				{"id":64,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "0"}],

		[{"id":65,"name":"IQ.Ops Customer #0","pending":0,"totcost":50,"totprice":4321.04, "billtype": "0"},
				{"id":66,"name":"IQ.Ops Customer #1","pending":4,"totcost":49,"totprice":2160.52, "billtype": "0"},
				{"id":67,"name":"IQ.Ops Customer #2","pending":8,"totcost":48,"totprice":1440.3466666666666, "billtype": "0"},
				{"id":68,"name":"IQ.Ops Customer #3","pending":12,"totcost":47,"totprice":1080.26, "billtype": "0"},
				{"id":69,"name":"IQ.Ops Customer #4","pending":16,"totcost":46,"totprice":864.208, "billtype": "0"}]];

var territoriesIN = [{"name": "Afghanistan", "url": "http://en.wikipedia.org/wiki/Afghanistan", "pop": 25500100, "date": "2013-01-01", "percentage": 0.36, "id": 1}, {"name": "Albania", "url": "http://en.wikipedia.org/wiki/Albania", "pop": 2831741, "date": "2011-10-01", "percentage": 0.04, "id": 2}, {"name": "Algeria", "url": "http://en.wikipedia.org/wiki/Algeria", "pop": 37100000, "date": "2012-01-01", "percentage": 0.53, "id": 3}, {"name": "American Samoa (USA)", "url": "http://en.wikipedia.org/wiki/American_Samoa", "pop": 55519, "date": "2010-04-01", "percentage": 0.00079, "id": 4}, {"name": "Andorra", "url": "http://en.wikipedia.org/wiki/Andorra", "pop": 78115, "date": "2011-07-01", "percentage": 0.0011, "id": 5}, {"name": "Angola", "url": "http://en.wikipedia.org/wiki/Angola", "pop": 20609294, "date": "2012-07-01", "percentage": 0.29, "id": 6}, {"name": "Anguilla (UK)", "url": "http://en.wikipedia.org/wiki/Anguilla", "pop": 13452, "date": "2011-05-11", "percentage": 0.00019, "id": 7}, {"name": "Antigua and Barbuda", "url": "http://en.wikipedia.org/wiki/Antigua_and_Barbuda", "pop": 86295, "date": "2011-05-27", "percentage": 0.0012, "id": 8}, {"name": "Argentina", "url": "http://en.wikipedia.org/wiki/Argentina", "pop": 40117096, "date": "2010-10-27", "percentage": 0.57, "id": 9}, {"name": "Armenia", "url": "http://en.wikipedia.org/wiki/Armenia", "pop": 3275700, "date": "2012-06-01", "percentage": 0.046, "id": 10}, {"name": "Aruba (Netherlands)", "url": "http://en.wikipedia.org/wiki/Aruba", "pop": 101484, "date": "2010-09-29", "percentage": 0.0014, "id": 11}, {"name": "Australia", "url": "http://en.wikipedia.org/wiki/Australia", "pop": 22808690, "date": "2012-11-11", "percentage": 0.32, "id": 12}, {"name": "Austria", "url": "http://en.wikipedia.org/wiki/Austria", "pop": 8452835, "date": "2012-07-01", "percentage": 0.12, "id": 13}, {"name": "Azerbaijan", "url": "http://en.wikipedia.org/wiki/Azerbaijan", "pop": 9235100, "date": "2012-01-01", "percentage": 0.13, "id": 14}];
// define the child columns
var subcolumns = [ {name: "id", label: "ID", cell: "integer"},
				   { name: "name", label: "Name", cell: "string"}, 
                   { name: "billtype", label: "Billing Type", cell: "string"},
                   { name: "pending", label: "Pending Invoices Status", cell: "integer"},
                   { name: "totcost", label: "Total Cost", cell: "number"}, 
                   { name: "totprice", label: "Total Price", cell: "number"}];
// define the parent columns
var columns = [ {name: "subgrid", label: "", cell: "subgrid", optionValues : subcolumns},
                {name: "id", label: "ID", cell: "integer"},
                {name: "name", label: "Customer Name", cell: "string"},
                {name: "pop", label: "Population", cell: "integer"},
                {name: "percentage", label: "% of World Population", cell: "number"},
                {name: "date", label: "Date", cell: "date"},
                {name: "select", label: "", cell: "boolean"}];
//-------------------DEMO DATA---------------------------------DEMO DATA-------------------------------DEMO DATA-------------------------------------------------------------//
// intialize model
var Client = Backbone.Model.extend({});
// intialize collection
var Clients = Backbone.Collection.extend({ 
	model: Client
});

// initialize model
var Territory = Backbone.Model.extend();
// initialize collection
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
    for(var i = 0; i < this.collection.length; i++){
      this.collection.models[i].set('subcollection', clientsIN[i]);
    }
  },
  events: {
      'click button.remove-selected': 'removeSelectedInvoices'
  },
  render: function () {
    // creates a grid
    this.grid = new Backgrid.Grid({
        columns: this.columns,
        collection: this.collection
    });
    // appends grid to view
    this.$el.prepend(this.grid.render().el);
  },
  getSelectedInvoices: function () {
    return this.grid.collection.where({ select: true});
  },
  removeSelectedInvoices: function () {
    this.grid.removeRow(this.getSelectedInvoices());
  }
});

var world = new WorldView();
} (jQuery));