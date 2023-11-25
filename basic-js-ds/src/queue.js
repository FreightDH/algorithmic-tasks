const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

	constructor() {
		this.head = null;
		this.tail = null;
	}

	getUnderlyingList() {
		return this.head;
	}

	enqueue(value) {
		let node = new ListNode(value);

		if (!this.head) {
			this.head = node; // если очередь пустая 
		} else {
			this.tail.next = node; // если есть элементы, добавляем в конец
		}
		this.tail = node; // указатель на конец очереди перемещаем на добавленный узел
	}

	dequeue() {
		let node = this.head;
		this.head = node.next; // указатель на начало очереди перемещаем на второй узел

		return node.value;
	}
}

module.exports = {
  Queue
};
