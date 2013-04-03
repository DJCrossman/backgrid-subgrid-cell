/*
  backgrid-subgrid-cell
  David Crossman - March 27, 2013
*/

(function (window, $, _, Backbone, Backgrid)  {

function requireOptions(options, requireOptionKeys) {
  for (var i = 0; i < requireOptionKeys.length; i++) {
    var key = requireOptionKeys[i];
    if (_.isUndefined(options[key])) {
      throw new TypeError("'" + key  + "' is required");
    }
  }
}

function resolveNameToClass(name, suffix) {
  if (_.isString(name)) {
    var key = capitalize(name) + suffix;
    var klass = Backgrid[key] || Backgrid.Extension[key];
    if (_.isUndefined(klass)) {
      throw new ReferenceError("Class '" + key + "' not found");
    }
    return klass;
  }

  return name;
}
/*
   SubgridRow is a simple container view that takes a grid instance and renders a
   grid within the specific column.

   @class Backgrid.SubgridRow
   @extends Backbone.View
 */
var SubgridRow = Backgrid.SubgridRow = Backbone.View.extend({

  tagName: "tr",

  className: "backgrid-subgrid-row",
  
  submodel: Backbone.Model.extend({}),

  /**
     Initializes a row view instance.

     @param {Object} options
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns Column metadata.
     @param {Backbone.Model} options.model The model instance to render.

     @throws {TypeError} If options.columns or options.model is undefined.
   */
  initialize: function (options) {
    var thisView = this;
    var GridColumnView = Backbone.View.extend({ tagName: "td" });
    var SubCollection  = Backbone.Collection.extend({ model: this.submodel });
    this.gridColumnView = new GridColumnView({}); 
    this.sideColumnView = new GridColumnView({});
    this.el.id = this.model.get('id');
    requireOptions(options, ["columns", "model"]);
    this.columns = options.columns;
    this.bind("remove", this.remove, this);

    var subcolumns = this.subcolumns = options.model.get("subcolumns");
    if (!(subcolumns instanceof Backgrid.Columns)) {
      subcolumns = this.subcolumns = this.model.subcolumns = new Backgrid.Columns(subcolumns);
    }
    var subcollection = this.subcollection = options.model.get('subcollection');
    if (!(subcollection instanceof Backbone.Collection)) {
      subcollection = this.subcollection = this.model.subcollection = new SubCollection(subcollection);
    }
    this.initializeSubGrid();
  },

  initializeSubGrid: function (){
    this.subgrid = new Backgrid.Grid({
                  columns: this.subcolumns,
                  collection: this.subcollection
                });
  },
  /**
     Renders a row containing a subgrid for this row's model.
   */
  render: function () {
    this.$el.empty();
    this.gridColumnView.el.colSpan = (this.columns.length - 1);
    // Appends the first  empty column
    $(this.el).append(this.sideColumnView.render().$el);
    // Appends the subgrid column that spans the rest of the table 
    $(this.el).append(this.gridColumnView.render().$el);
    // Appends the Subgrid
    this.gridColumnView.$el.append(this.subgrid.render().$el);
    return this;
  }
});

/*
  SubgridCell is a cell class to expand and collaspe another grid within
  the grid specific to each row.

  @class Backgrid.Subgrid
  @extends Backgrid.Cell
*/

var SubgridCell = Backgrid.SubgridCell = Backgrid.Cell.extend({

  className: "subgrid-cell",
  // define the icon withing the cell
  icon: function () {
    var iconOptions = "+";
    if(this.state == 'expanded')
      iconOptions = "-";
    
    return (iconOptions);
  },
  optionValues: undefined,

  /**
     Initializer.

     @param {Object} options
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column
     @param {Backgrid.Columns} options.column.attributes

     @throws {ReferenceError} If formatter is a string but a formatter class of
     said name cannot be found in the Backgrid module.
  */
  initialize: function (options) {
    this.state = 'collasped';
    requireOptions(options, ["model", "column"]);
    requireOptions(options.column.attributes, ["optionValues"]);
    this.model.set('subcolumns', options.column.get('optionValues'));

    this.column = options.column;
    if (!(this.column instanceof Backgrid.Column)) {
      this.column = new Backgrid.Column(this.column);
    }

    this.formatter = resolveNameToClass(this.formatter, "Formatter");
    this.editor = resolveNameToClass(this.editor, "CellEditor");
  },
  /**
    Renders a collasped view.
  */
  render: function () {
    this.$el.empty().text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));  
    $(this.el).append(this.icon());
    return this;
  },

  events: {
    "click": "stateSwitch"
  },
/**
  Checks the current state of the cell, and calls either a expand
  or collaspe function
*/
  stateSwitch: function () {
    $(this.el).html("");
    if (this.state == 'collasped'){
      this.expandSubgrid();
    }else{
      this.collaspeSubgrid();
    }
    $(this.el).append(this.icon());
  },
/**
  Binds the remove function with the row when a model is removed.
*/  
  removeRow: function () {
    var thisView = this;
    $('.backgrid-subgrid-row').filter(function() { 
      return ($(this).attr("id") == thisView.model.get('id')); 
    }).remove()
  },
/**
  Intializes and renders the subrow when the state is expanded.
*/  
  initializeSubRow: function () {
    this.subrow = new SubgridRow({columns: this.column.collection, model: this.model});
    $(this.el).parent("tr").after(this.subrow.render().$el);
    // binds the parent
    this.model.bind('remove', this.removeRow, this); 
  },
/**
 Simple appends another row for the subgrid and appends the grid to the row.
 Saves the current data the model.
*/
  expandSubgrid: function () {
    this.state = 'expanded';
    this.initializeSubRow();
    this.save();
  },
/**
 Removes the row from the parent grid. Saves the current data the model.
*/
  collaspeSubgrid: function () {
    this.state = 'collasped';
    this.subrow.remove();
    this.save();
  },
/**
  Takes altered information from the subgrid and updates the parent model.
*/
  save: function () {
    this.model.set('subgrid', this.subrow.subgrid);
    this.model.set('subcollection', this.subrow.subcollection);
  }
});

}(window, jQuery, _, Backbone, Backgrid));