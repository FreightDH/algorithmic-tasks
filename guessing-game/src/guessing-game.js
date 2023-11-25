class GuessingGame {
   constructor() {}

   setRange(min, max) {
		this.min = min;
		this.max = max;
   }

   guess() {
		return this.guessNum = Math.round((this.min + this.max) / 2);
   }

   lower() {
		return this.max = this.guessNum;
   }

   greater() {
		return this.min = this.guessNum;
   }
}

module.exports = GuessingGame;