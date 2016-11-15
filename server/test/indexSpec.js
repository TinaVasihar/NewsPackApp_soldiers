var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,

supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/news/")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          if (err) {

				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");

        res.body[0].newid.should.be.equal("720161114T053039Z");
  //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle the post request", function(done){
    var mov= {"newid": "220161113T182421Z",
    "author": "Duncan Robinson, Alex Barker, Stefan Wagstyl",
    "title": "Britain and France snub EU’s emergency Trump meeting",
    "description": "Split highlights difficulty EU faces co-ordinating response to US presidential election",
    "url": "http://www.ft.com/cms/s/0/bd74b6de-a9ba-11e6-809d-c9f98a0cf216.html",
    "urlToImage": "http://im.ft-static.com/content/images/fe977270-da24-4e45-9758-88520d73a6aa.img",
    "publishedAt": "2016-11-13T18:24:21Z",
    "category": "economical",
    "comments": "sdfg"};
    url
        .post("/news/add")
        .send(mov)
        .expect(200)

        .end(function(err,res){
          if (err) {

				        throw err;
			    }
          res.text.should.be.equal("News added successfully");
          //expect(res.text).to.be.equal("Hello!");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the third route", function(err){
  it("should handle the delete request", function(done){
    url
        .del("/news/remove/220161113T182421Z")
        .expect(200)
        .end(function(err,res){
          if (err) {

				        throw err;
			    }
          res.text.should.be.equal("News deleted");
          //expect(res.text).to.be.equal("Hello!");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the fourth route", function(err){
  it("should handle the update request", function(done){
    var obj={"newid": "120161114T054912Z","comments":"latest updated comments"};
    url
        .put("/news/update")
        .send(obj)
        .expect(200)
        .end(function(err,res){
          if (err) {

				        throw err;
			    }
          res.text.should.be.equal("Updated news");
          //expect(res.text).to.be.equal("Hello!");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});
