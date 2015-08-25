'use strict';

module.exports = {
  globals: {
    angular: true
  },
  plugins: [
    'angular'
  ],
  rules: {
    'angular/ng_angularelement': 1,
    'angular/ng_controller_as': 2,
    'angular/ng_controller_as_route': 2,
    'angular/ng_controller_as_vm': [2, 'vm'],
    'angular/ng_controller_name': [2, '/[A-Z].*Controller$/'],
    'angular/ng_deferred': 0,
    'angular/ng_definedundefined': 2,
    'angular/ng_di': [2, 'function'],
    'angular/ng_di_order': [0, true],
    'angular/ng_directive_name': 0,
    'angular/ng_document_service': 2,
    'angular/ng_empty_controller': 0,
    'angular/ng_file_name': 0,
    'angular/ng_filter_name': 0,
    'angular/ng_foreach': 0,
    'angular/ng_function_type': 0,
    'angular/ng_interval_service': 2,
    'angular/ng_json_functions': 2,
    'angular/ng_module_getter': 2,
    'angular/ng_module_name': 0,
    'angular/ng_module_setter': 2,
    'angular/ng_no_angular_mock': 2,
    'angular/ng_no_digest': 2,
    'angular/ng_no_jquery_angularelement': 2,
    'angular/ng_no_private_call': 2,
    'angular/ng_no_services': [2, ['$http', '$resource', 'Restangular']],
    'angular/ng_no_service_method': 2,
    'angular/ng_on_watch': 2,
    'angular/ng_rest_service': 0,
    'angular/ng_service_name': 0,
    'angular/ng_timeout_service': 2,
    'angular/ng_typecheck_array': 2,
    'angular/ng_typecheck_date': 2,
    'angular/ng_typecheck_function': 2,
    'angular/ng_typecheck_number': 2,
    'angular/ng_typecheck_object': 2,
    'angular/ng_typecheck_regexp': 2,
    'angular/ng_typecheck_string': 2,
    'angular/ng_watchers_execution': [0, '$digest'],
    'angular/ng_window_service': 2,
    'no-use-before-define': 0
  }
};
