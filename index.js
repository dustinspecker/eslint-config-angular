'use strict';

module.exports = {
  globals: {
    angular: true
  },
  plugins: [
    'angular'
  ],
  rules: {
    'angular/angularelement': 1,
    'angular/controller_as': 2,
    'angular/controller_as_route': 2,
    'angular/controller_as_vm': [2, 'vm'],
    'angular/controller_name': [2, '/[A-Z].*Controller$/'],
    'angular/deferred': 0,
    'angular/definedundefined': 2,
    'angular/di': [2, 'function'],
    'angular/di_order': [0, true],
    'angular/directive_name': 0,
    'angular/document_service': 2,
    'angular/empty_controller': 0,
    'angular/file_name': 0,
    'angular/filter_name': 0,
    'angular/foreach': 0,
    'angular/function_type': 0,
    'angular/interval_service': 2,
    'angular/json_functions': 2,
    'angular/module_getter': 2,
    'angular/module_name': 0,
    'angular/module_setter': 2,
    'angular/no_angular_mock': 2,
    'angular/no_digest': 2,
    'angular/no_jquery_angularelement': 2,
    'angular/no_private_call': 2,
    'angular/no_services': [2, ['$http', '$resource', 'Restangular']],
    'angular/no_service_method': 2,
    'angular/on_watch': 2,
    'angular/rest_service': 0,
    'angular/service_name': 0,
    'angular/timeout_service': 2,
    'angular/typecheck_array': 2,
    'angular/typecheck_date': 2,
    'angular/typecheck_function': 2,
    'angular/typecheck_number': 2,
    'angular/typecheck_object': 2,
    'angular/typecheck_regexp': 2,
    'angular/typecheck_string': 2,
    'angular/watchers_execution': [0, '$digest'],
    'angular/window_service': 2,
    'no-use-before-define': 0
  }
};
