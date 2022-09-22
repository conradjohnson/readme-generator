const moment = require('moment');

// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(type) {
  // ex: [![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)
  let badgeString = "";
  switch(type){
    case 'MIT': 
        badgeString = `[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)`
        break;
    case 'GAGPL': 
        badgeString = `[![GNU AGPL License](https://img.shields.io/badge/license-GNUAGPL-green.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)`
        break;
    case 'GGPL': 
        badgeString = `[![GNU GPL License](https://img.shields.io/badge/license-GNUGPL-green.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)`
        break;
    case 'MOZ': 
        badgeString = `[![Mozilla License](https://img.shields.io/badge/license-Mozilla-green.svg)](http://mozilla.org/MPL/2.0/)`
        break;
    case 'APA': 
        badgeString = `[![Apache License](https://img.shields.io/badge/license-Apache-green.svg)](http://www.apache.org/licenses/LICENSE-2.0)`
        break;
    case 'ISC': 
        badgeString = `[![ISC License](https://img.shields.io/badge/license-ISC-green.svg)](https://opensource.org/licenses/ISC)`
        break;
    case 'UNL': 
        badgeString = `[![The Unlicense License](https://img.shields.io/badge/license-Unlicense-green.svg)](https://unlicense.org/)`
        break;
    default:
        break;
  }
  return badgeString;
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(type, userName) {

  let year = moment().format('YYYY');
  let licenseContent = '';
  let licenseBadge = renderLicenseBadge(type);
  switch(type){
      case 'MIT':
          licenseContent = `
${licenseBadge}

  MIT License
  [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
  Copyright (c) ${year} ${userName}
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`;
          break;
      case 'GAGPL':
          licenseContent = `
${licenseBadge}

  GNU AFFERO GENERAL PUBLIC LICENSE
  Version 3, 19 November 2007
  [https://www.gnu.org/licenses/agpl-3.0.en.html](https://www.gnu.org/licenses/agpl-3.0.en.html)
  
  Copyright (c) ${year} ${userName}
          `;
          break;
      case 'GGPL':
          licenseContent = `
${licenseBadge}

  GNU GENERAL PUBLIC LICENSE
  Version 3, 29 June 2007
  [https://www.gnu.org/licenses/gpl-3.0.en.html](https://www.gnu.org/licenses/gpl-3.0.en.html)
  
  Copyright (c) ${year} ${userName}
          `;
          break;
      case 'MOZ':
          licenseContent = `
  ${licenseBadge}

  Mozilla Public License Version 2.0
  ==================================
  [http://mozilla.org/MPL/2.0/](http://mozilla.org/MPL/2.0/)
  
  
  Copyright (c) ${year} ${userName}
          `;
          break;
      case 'APA':
          licenseContent = `
${licenseBadge}

  Apache License
  Version 2.0, January 2004
  [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
  
  Copyright (c) ${year} ${userName}
  
  
          `;
          break;
      case 'ISC':
          licenseContent = `
${licenseBadge}

  ISC License
  [https://opensource.org/licenses/ISC](https://opensource.org/licenses/ISC)
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted, provided that the above
  copyright notice and this permission notice appear in all copies.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  
  Copyright (c) ${year} ${userName}
          `;
          break;
      case 'UNL':
          licenseContent = `
${licenseBadge}

  [https://unlicense.org/](https://unlicense.org/)
  This is free and unencumbered software released into the public domain.
  
  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.
  
  In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.
  
  For more information, please refer to [https://unlicense.org](https://unlicense.org)        
  
  Copyright (c) - ${year} - ${userName}
  `;
              break;
          default:
              break;
  }
  
  
  return licenseContent;
  }

// A function to generate markdown for README
const generateMarkdown = function(data) {
  let readMeString = "";
  //flags for optional sections in readme.
  let includeContributors = (toString(data.contributors).trim().length>0);
  let includeInstallInstructions = (toString(data.installInstr).trim().length>0);
  let includeUsageInstructions = (toString(data.usageInst).trim().length>0);
  let includeTestingInstructions = (toString(data.testInst).trim().length>0);

    //==================================================
 //lets build the README.md file string!
 //==================================================

 readMeString = `
# ${data.projTitle}

## Description

${data.projDesc}

## Table of Contents

`;
 // optional sections for table of contents
 if (includeInstallInstructions){
     readMeString += `- [Installation](#installation)
`;
 }
 if (includeUsageInstructions){
     readMeString += `- [Usage](#usage)
`;
 }
 if (includeTestingInstructions){
     readMeString += `- [Testing](#testing)
`;
 }
// continuing to build
readMeString += `- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

`;
 // optional sections
 if (includeInstallInstructions){
     readMeString += `## Installation

${data.installInst}

`;
 }
 if (includeUsageInstructions){
     readMeString += `## Usage

${data.usageInst}

`;
 }
 if (includeTestingInstructions){
     readMeString += `## Testing

${data.testInst}

`;
 }
 readMeString +=`## Credits

[${data.gitUser}](https://github.com/${data.gitUser})
and ${data.contributors};

`; 
 readMeString += `## License

`;  
 readMeString += renderLicenseSection(data.license, data.userFirstLast);
 readMeString +=`
# Questions
`;
 readMeString += `For questions or assistance, please contact through [GitHub Account](https://github.com/${data.gitUser}) or email: [${data.email}](mailto:${data.email})

`
 readMeString += `
[Back to top](#${data.projTitle})`;

return readMeString;  



}

module.exports = {
  generateMarkdown
};
