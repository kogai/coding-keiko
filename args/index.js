const json = require('./schema.json');

const [,,...args] = process.argv;

/**
 * 
 * @param JSON schema
 * @param Array<string> options 
 * @return Object<{[key: string]: string}>
 */
const parser = (schema, _options) => {
  console.log(schema);
  const options = _options.reduce((acc, elem, i) => {
    return i % 2 === 0 ? {...acc, [elem.replace(/^--/, "")]: _options[i+1] } : acc;
  }, {});

  Object.entries(options).forEach(([key, value]) => {
    const schema = json.schema.find(item => item.name === key);
    if (!schema) {
      throw new Error(`Option ${key} does not exist in schema`);
    }
    

  })
  return options;
}

parser(json, args);

module.exports = {
  parser,
}