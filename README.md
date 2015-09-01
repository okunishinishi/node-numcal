numcal
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-numcal
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-numcal
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-numcal.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-numcal/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-numcal
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-numcal.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-numcal.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-numcal
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-numcal.svg
[bd_npm_url]: http://www.npmjs.org/package/numcal
[bd_npm_shield_url]: http://img.shields.io/npm/v/numcal.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/numcal.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Basic numeric calculation functions.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
-----

```bash
npm install numcal --save
```
<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
-----

```javascript
var numcal = require('numcal');

//------------------------
// min
//------------------------
console.log(numcal.min(3, 2, 4)); //-> 2
console.log(numcal.min([3, 2, 4])); //-> 2

//------------------------
// max
//------------------------
console.log(numcal.max(3, 2, 4)); //-> 4
console.log(numcal.max([3, 2, 4])); //-> 4

//------------------------
// sum
//------------------------
console.log(numcal.sum(3, 2, 4)); //-> 9
console.log(numcal.sum([3, 2, 4])); //-> 9

//------------------------
// ave
//------------------------
console.log(numcal.ave(3, 2, 4)); //-> 3
console.log(numcal.ave([3, 2, 4])); //-> 3


````

<!-- Section from "docs/readme/02.Usage.md.hbs" End -->

<!-- Section from "docs/readme/03.API.md.hbs" Start -->

<a name="section-docs-readme-03-a-p-i-md"></a>
API
---

| Signature | Description |
| --------- | ----------- |
| .min(val1, val2...) | Get minimum value. |
| .min([val1, val2...]) | Get minimum value in array. |
| .max(val1, val2...) | Get maximum value. |
| .max([val1, val2...]) | Get maximum value in array. |
| .sum(val1, val2...) | Get sum value. |
| .sum([val1, val2...]) | Get sum  value for array. |
| .ave(val1, val2...) | Get average value. |
| .ave([val1, val2...]) | Get average  value for array. |

<!-- Section from "docs/readme/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-numcal/blob/master/LICENSE).

<!-- LICENSE End -->


