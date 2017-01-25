# qewd-template: Simple template substitution processor
 
Rob Tweed <rtweed@mgateway.com>  
25 January 2017, M/Gateway Developments Ltd [http://www.mgateway.com](http://www.mgateway.com)  

Twitter: @rtweed

Google Group for discussions, support, advice etc: [http://groups.google.co.uk/group/enterprise-web-developer-community](http://groups.google.co.uk/group/enterprise-web-developer-community)

## Installing

       npm install qewd-template
	   
## Using qewd-template

  *qewd-template* is a simple module for making value substitutions within a text string.

  It assumes that the variables within the string will be denoted using double "handlebar" notation, eg

      var string = 'My name is {{name}}. I live in {{country}}.';

  To substitute values for *name* and *country* into this string, you first define a hash containing the
  variable names and their substitution values, eg:

      var subs = {
        name: 'Rob Tweed',
        country: 'the UK'
      };

  Then apply these using the template processor

     var template = require('qewd-template');
     var newString = template.replace(string, subs);
     
     // newString = 'My name is Rob Tweed. I live in the UK.'
 
  To run a series of test substitutions:

     template.test();

  You can see the source for these tests in */lib/test.js*


## License

 Copyright (c) 2017 M/Gateway Developments Ltd,                           
 Redhill, Surrey UK.                                                      
 All rights reserved.                                                     
                                                                           
  http://www.mgateway.com                                                  
  Email: rtweed@mgateway.com                                               
                                                                           
                                                                           
  Licensed under the Apache License, Version 2.0 (the "License");          
  you may not use this file except in compliance with the License.         
  You may obtain a copy of the License at                                  
                                                                           
      http://www.apache.org/licenses/LICENSE-2.0                           
                                                                           
  Unless required by applicable law or agreed to in writing, software      
  distributed under the License is distributed on an "AS IS" BASIS,        
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
  See the License for the specific language governing permissions and      
   limitations under the License.      
