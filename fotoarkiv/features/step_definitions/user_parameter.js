const {defineParameterType} = require('@cucumber/cucumber');

defineParameterType({
    name: "user",
    regexp: /Kent|Ole|Tom/,
    transformer: name => ({name})
})