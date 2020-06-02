'use strict';

class Model{
  constructor(schema){
    this.schema = schema;
    // console.log(this.schema);
  }
  get(_id){
    const theIdOfObject = _id ? {_id} : {};
    return this.schema.find(theIdOfObject);
  }
  create(record){
    const theNewRecord = new this.schema(record);
    console.log(this.schema);
    return theNewRecord.save();
  }
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }
  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }
}
module.exports = Model;