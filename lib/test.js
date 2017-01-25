/*

 ----------------------------------------------------------------------------
 | qewd-template: Simple template substitution processor                    |
 |                                                                          |
 | Copyright (c) 2016-17 M/Gateway Developments Ltd,                        |
 | Redhill, Surrey UK.                                                      |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://www.mgateway.com                                                  |
 | Email: rtweed@mgateway.com                                               |
 |                                                                          |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  25 January 2017

*/


function test() {

  var template = require('qewd-template');

  console.log('Running qewd-template tests');
  var subs = {
    patientId: 123456,
    aaaa: 'replacement for aaaa',
    bbb: 'replacement for bbb'
  };

  console.log('Substitutions: ' + JSON.stringify(subs, null, 2));

  var string = 'This is a test string';
  var output = template.replace(string, subs);
  console.log('-----');
  console.log(string);
  console.log(output);

  string = '{{aaa}}This is a test string';
  output = template.replace(string, subs);
  console.log('-----');
  console.log(string);
  console.log(output);

  string = '{{aaaa}}This is a test string';
  output = template.replace(string, subs);
  console.log('-----');
  console.log(string);
  console.log(output);

  string = 'This is a test string {{aaaa}}';
  output = template.replace(string, subs);
  console.log('-----');
  console.log(string);
  console.log(output);

  string = '{{aaaa}} This {{bbb}} is a test string';
  output = template.replace(string, subs);
  console.log('-----');
  console.log(string);
  console.log(output);

  string = '{{aaaa}} This {{bbb}} is a test string {{patientId}}';
  output = template.replace(string, subs);
  console.log('-----');
  console.log(string);
  console.log(output);

  string = '{{aaaa}} This is a test string {{patientId}}';
  output = template.replace(string, subs);
  console.log('-----');
  console.log(string);
  console.log(output);

}

module.exports = test;


