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

function replace(string, substitutions) {
  var pieces = string.split("{{");
  if (pieces.length === 1) return string; // no replacements needed
  var output = '';
  pieces.forEach(function(piece) {
    var pieces2 = piece.split("}}");
    if (pieces2.length === 1) {
      output = piece;
    }
    else {
      var name = pieces2[0];
      if (substitutions[name]) {
        output = output + substitutions[name] + pieces2[1];
      }
      else {
        output = output + pieces2[1]; // no substitution possible
      }
    }
  });
  return output;
}

module.exports = {
  substitute: replace,
  replace: replace,
  test: require('./test')
};