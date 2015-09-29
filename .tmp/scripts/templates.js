this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"button\">Submit</div>\n\n<div class=\"collection-info-container\">\n  <h3 class=\"collection-title\">Collection Stuff</h3>\n  <ul class=\"collection-info\">\n\n  </ul>\n</div>\n";
},"useData":true});
this["JST"]["game"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li>\n  <h3>Game Number: "
    + alias3(((helper = (helper = helpers.game || (depth0 != null ? depth0.game : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"game","hash":{},"data":data}) : helper)))
    + "</h3>\n  <h3>Opponent: "
    + alias3(((helper = (helper = helpers.opponent || (depth0 != null ? depth0.opponent : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"opponent","hash":{},"data":data}) : helper)))
    + "</h3>\n  <h3>Score: "
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</h3>\n</li>\n";
},"useData":true});