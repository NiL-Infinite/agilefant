/**
 * 
 * @base CommonController
 * @constructor
 */
var BacklogController = function() {

};
BacklogController.prototype = new CommonController();

BacklogController.prototype.paintAssigneeList = function() {
  this.assigneeListView = new DynamicTable(this, this.model, this.assigneeListConfiguration,
      this.assigmentListElement);
  this.assigneeListView.render();
};
BacklogController.prototype.paintSpentEffortList = function() {

};

BacklogController.prototype.addAssignees = function() {
  var me = this;
  $(window).autocompleteDialog({
    dataType: 'usersAndTeams', 
    callback: function(ids) { me._saveAssignees(ids); }, /*
    cancel: function() { me.close(); },*/
    title: 'Select assignees'
  }); 
};

BacklogController.prototype._saveAssignees = function(userIds) {
  this.model.addAssignments(userIds);
};

BacklogController.prototype.initAssigneeConfiguration = function() {
  var config = new DynamicTableConfiguration(
      {
        rowControllerFactory : BacklogController.prototype.assigmentControllerFactory,
        dataSource : BacklogModel.prototype.getAssignments,
        saveRowCallback : BacklogController.prototype.saveAssigment,
        caption : "Assignees"
      });

  config.addCaptionItem( {
    name : "addAssignees",
    text : "Add assignees",
    cssClass : "create",
    callback : BacklogController.prototype.addAssignees
  });
  
  config.addColumnConfiguration(0, {
    minWidth : 200,
    autoScale : true,
    title : "User",
    get : AssignmentModel.prototype.getUser,
    decorator: DynamicsDecorators.userNameDecorator
  });
  
  config.addColumnConfiguration(1, {
    minWidth : 200,
    autoScale : true,
    title : "Baseline load",
    get : AssignmentModel.prototype.getBaselineLoad
  });
  config.addColumnConfiguration(2, {
    minWidth : 200,
    autoScale : true,
    title : "Availability",
    get : AssignmentModel.prototype.getAvailability
  });
  this.assigneeListConfiguration = config;
};
BacklogController.prototype.initSpentEffortConfiguration = function() {

};