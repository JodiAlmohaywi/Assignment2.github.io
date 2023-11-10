(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
    toBuy.everythingBought = function () {
    return ShoppingListCheckOffService.isEverythingBought();
  };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "apples", quantity: 5 },
      { name: "milk", quantity: 2 },
      { name: "bread", quantity: 3 },
      { name: "eggs", quantity: 6 }
    ];
    var alreadyBoughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    };

    service.buyItem = function (index) {
      var item = toBuyItems.splice(index, 1)[0];
      alreadyBoughtItems.push(item);
    };

    service.isEverythingBought = function () {
      return toBuyItems.length === 0;
    };
  }
})();
