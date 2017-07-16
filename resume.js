const Handlebars = require('handlebars');
const fs = require('fs');
const Inliner = require('inliner');

module.exports = function(template_uri) {
    let self = this;

    new Inliner(template_uri, function(err, html) {
        self.template = Handlebars.compile(html);
    });

    this.compile = function(resume_json) {
        let result = self.template(resume_json);
        return result;
    };
};
