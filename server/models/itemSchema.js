const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  maker: {type: String, default: ''},
  year: {type: Number, default: 0 },
  price: {type: Number, default: 0 }
});

ItemSchema.statics.editItem = function(args) {
  const {id, title, description, price, maker, year} = args;
  const itemUpdate = {title, description, price, maker, year};

  return new Promise((resolve, reject)=>{
    this.findByIdAndUpdate(
      {_id: id},
      {$set: itemUpdate}, 
      {returnDocument: true}
    ).exec((err,res)=>{
      err ? reject(err) : resolve(res);
    });
  });
}

mongoose.model('item', ItemSchema);
