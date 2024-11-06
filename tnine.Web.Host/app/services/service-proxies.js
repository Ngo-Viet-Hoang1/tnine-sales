﻿(function (app) {
    app.factory('serviceProxies', serviceProxies);

    serviceProxies.$inject = ['$http', '$q', '$injector', 'baseService'];

    function serviceProxies($http, $q, $injector, baseService) {
        var serviceProxies = {};

        serviceProxies.accountService = {
            login: function (data) {
                return baseService.post('api/account/login', data);
            },
            logout: function () {
                return baseService.post('api/account/logout');
            },
            register: function (data) {
                return baseService.post('api/account/register', data);
            }
        };

        serviceProxies.userService = {
            getAll: function () {
                return baseService.get('api/user');
            },
            getById: function (id) {
                return baseService.get('api/user/' + id);
            },
            createOrEdit: function (data) {
                return baseService.post('api/user', data);
            },
            delete: function (id) {
                return baseService.remove('api/user/' + id);
            }
        };

        serviceProxies.todoService = {
            getTodos: function () {
                return $http.get('api/todo');
            },
            getTodoById: function (id) {
                return $http.get('api/todo/' + id);
            },
            createOrEdit: function (data) {
                return $http.post('api/todo', data);
            },
            deleteTodo: function (id) {
                return $http.delete('api/todo/' + id);
            }
        };

        serviceProxies.roleService = {
            getAll: function () {
                return baseService.get('api/role');
            },
            getById: function (id) {
                return baseService.get('api/role/' + id);
            },
            createOrEdit: function (data) {
                return baseService.post('api/role', data);
            },
            delete: function (id) {
                return baseService.remove('api/role/' + id);
            },
            hasRole: function (roleName) {
                var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
                return userInfo && userInfo.role && userInfo.role.includes(roleName);
            }
        };

        serviceProxies.permissionService = {
            getAll: function () {
                return baseService.get('api/permission');
            },
            getById: function (id) {
                return baseService.get('api/permission/' + id);
            },
            createOrEdit: function (data) {
                return baseService.post('api/permission', data);
            },
            delete: function (id) {
                return baseService.remove('api/permission/' + id);
            },
            isGranted: function (permissionName) {
                return baseService.get('api/permission/isGranted', { permissionName: permissionName });
            }
        };

        serviceProxies.userService = {
            register: function (data) {
                return baseService.post('api/account/register', data);
            },
            getAll: function () {
                return baseService.get('api/user/');
            },
            getById: function (id) {
                return baseService.get('api/user/' + id);
            },
            createOrEdit: function (data) {
                return baseService.post('api/user', data);
            },
            delete: function (id) {
                return baseService.remove('api/user/' + id);
            }
        };

        serviceProxies.customerService = {
            getAll: function () {
                return baseService.get('api/customer');
            },
            getCustomerForEdit: function (id) {
                return baseService.get('api/customer/' + id);
            },
            createOrEdit: function (data) {
                return baseService.post('api/customer', data);
            },
            delete: function (id) {
                return baseService.remove('api/customer/' + id);
            }
        };

        return serviceProxies;
    }

})(angular.module('app.services'));