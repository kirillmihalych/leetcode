var FoodRatings = function (inputFoods, inputCuisines, inputRatings) {
  const n = inputFoods.length

  const food2CuisineMap = new Map()
  const cuisine2FoodRatingPQ = new Map()
  const foodRatingMap = new Map()

  for (let i = 0; i < n; i++) {
    const food = inputFoods[i]
    const cuisine = inputCuisines[i]
    const rating = inputRatings[i]
    if (!food2CuisineMap.has(food)) food2CuisineMap.set(food, cuisine)
    if (!cuisine2FoodRatingPQ.has(cuisine)) {
      const foodRatingPQ = new PriorityQueue({ compare: (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]) })
      cuisine2FoodRatingPQ.set(cuisine, foodRatingPQ)
    }
    const foodRatingPQ = cuisine2FoodRatingPQ.get(cuisine)
    foodRatingPQ.enqueue([food, rating])
    foodRatingMap.set(food, rating)
  }

  FoodRatings.prototype.changeRating = function (targetFood, updatedRating) {
    const cuisine = food2CuisineMap.get(targetFood)
    const foodRatingPQ = cuisine2FoodRatingPQ.get(cuisine)
    const [food, rating_unused] = foodRatingPQ.front()
    if (food === targetFood) foodRatingPQ.dequeue()
    foodRatingPQ.enqueue([targetFood, updatedRating])
    foodRatingMap.set(targetFood, updatedRating)
  }

  FoodRatings.prototype.highestRated = function (targetCuisine) {
    const foodRatingPQ = cuisine2FoodRatingPQ.get(targetCuisine)
    while (1) {
      const [food, rating] = foodRatingPQ.front()
      const newRating = foodRatingMap.get(food)
      if (rating === newRating) return food
      else {
        foodRatingPQ.dequeue()
        foodRatingPQ.enqueue([food, newRating])
      }
    }
  }

}