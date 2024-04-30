'use strict';
// debugger

const logHead3 = function (head, index) {
  console.log(index + 1, head, '|', this.title);
}

const site = {
  title: 'my site',
  headings: ['About us', 'Contact', 'News'],
  // 1 збереження контекста - милиці
  logHeadings1: function () {
    const self = this;
    this.headings.forEach(function (head) {
      console.log(head, '|', self.title);
    });
  },
  // 2 передати контекст методу перебору масиву
  logHeadings2: function () {
    this.headings.forEach(function (head, index) {
      console.log(index + 1, head, '|', this.title);
    }, this);
  },
  // 3 прив'язувати контекст за допомогою методa функцій bind
  logHeadings3: function () {
    this.headings.forEach(logHead3.bind(this));
  },
  // 4 arrow
  logHeadings4: function () {
    this.headings.forEach((head) => {
      console.log(head, '|', this.title);
    });
  },
};

site.logHeadings1();
site.logHeadings2();
site.logHeadings3();
site.logHeadings4();


