'use strict';
/**
 * A Class for the models
 * 
 * @class
 * 
 */
class Model{
  constructor(schema){
    /**@member {object} */
    this.schema = schema;
    // console.log(this.schema);
  }
  /**@member {get model} */
  get(_id){
    const theIdOfObject = _id ? {_id} : {};
    return this.schema.find(theIdOfObject);
  }
  /**@member {create model} */
  create(record){
    const theNewRecord = new this.schema(record);
    // console.log(this.schema);
    return theNewRecord.save();
  }
  /**@member {update model} */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }
  /**@member {delete model} */
  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }
}
module.exports = Model;