import express from 'express'
import {restaurantController} from '../controllers/index.js'

const router = express.Router()

router
    .route('/api/restaurants')
    .get(restaurantController.getAllRestaurants)
 
router.get('/api/restaurants/first5', restaurantController.getFirst5) 
router.get('/api/restaurants/getEspecific', restaurantController.getEspecificRestaurant)     
router.get('/api/restaurants/get90Score', restaurantController.getScore90) 
router.get('/api/restaurants/get80Score', restaurantController.getScore80100) 
router.get('/api/restaurants/getCusineAmerican', restaurantController.getCusineAmerican)
router.get('/api/restaurants/getFirst', restaurantController.getFirst)
router.get('/api/restaurants/getRestaurantNames', restaurantController.getRestaurantNames)
export default router