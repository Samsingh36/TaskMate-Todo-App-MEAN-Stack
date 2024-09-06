"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskListComponent = void 0;
var core_1 = require("@angular/core");
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
        this.tasks = [];
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.loadTasks();
    };
    TaskListComponent.prototype.loadTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TaskListComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.taskService.deleteTask(id).subscribe(function () {
            _this.loadTasks();
        });
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: ['./task-list.component.css']
        })
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
