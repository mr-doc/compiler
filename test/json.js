/* eslint-env mocha */
const assert = require('chai').assert;
const Compiler = require('../');
const Option = require('mr-doc-utils').Option;

const options = Option.defaults;
options.compiler.file.format = 'json';
const compiler = new Compiler(options).factory();

describe('compiler', () => {
  /* eslint-disable quotes, quote-props, max-len, comma-dangle */
  const source = [{
    "description": "",
    "tags": [
      {
        "title": "description",
        "description": "Greet the user.",
        "lineNumber": 1
      }
    ],
    "loc": {
      "start": {
        "line": 2,
        "column": 4
      },
      "end": {
        "line": 4,
        "column": 7
      }
    },
    "context": {
      "code": "function greet() {\n      return 'Hello';\n    }",
      "file": {
        "source": "\n    /**\n     * @desc - Greet the user. \n     */\n    function greet() {\n      return 'Hello';\n    }\n  "
      },
      "loc": {
        "start": {
          "line": 5,
          "column": 4
        },
        "end": {
          "line": 7,
          "column": 5
        }
      },
      "range": {
        "column": [
          4,
          5
        ],
        "line": [
          5,
          7
        ]
      }
    },
    "errors": []
  }];
  /* eslint-enable quotes, quote-props, max-len, comma-dangle */
  it('should return a string containing the parsed comments', () => {
    const result = compiler.compile(source);
    assert.isString(result);
    assert.isTrue(result.indexOf('errors') === -1);
  });
});
