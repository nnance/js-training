var monica = {
  name: 'Monica Geller',
  total: 400,
  deductMontlyFee: function(fee){
     this.total = this.total - fee;
     return this.name + ' remaining balance is '+ this.total;
  }
}

var rachel = {name: "Rachel Green", total: 1500}
var rachelDeductor = monica.deductMontlyFee.bind(rachel, 200)
console.log(rachelDeductor()); //"Rachel Green remaining balance is 1300"
