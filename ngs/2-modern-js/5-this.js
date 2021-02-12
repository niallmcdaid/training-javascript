// "this" here is "exports"

this.id = 'exports';

const testerObj = {
  func1: function () {
    console.log('func1', this); // 'this' refers to the 'this' value of the caller (i.e. testerObj)
  },

  func2: () => {
    console.log('func2', this); // 'this' refers to the 'this' that was available when the func was defined (i.e. {id:'exports'})
  },
};

testerObj.func1();
testerObj.func2();
