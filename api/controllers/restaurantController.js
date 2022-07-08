import { Restaurant } from '../models/index.js'

const getAllRestaurants = async (_, res) => {
    try {
        const restaurants = await Restaurant.find();
        return res.json({
            msg: 'Restaurantes obtenidos',
            restaurants,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar todos los restaurantes',
            error,
        });
    }
};

const getFirst5 = async (_, res) => {
    try {
        const restaurants = await Restaurant.find().limit(5);
        return res.json({
            msg: 'Primeros 5 restaurantes obtenidos',
            data: restaurants,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar todos los restaurantes',
            error,
        });
    }
};
const getEspecificRestaurant = async (_, res) => {
    try {
        const restaurants = await Restaurant.find().skip(6).limit(4);
        return res.json({
            msg: 'restaurantes del 6 al 10 obtenidos',
            data: restaurants,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar todos los restaurantes',
            error,
        });
    }
};
const getScore90 = async (_, res) => {
    try {
        const restaurants = await Restaurant.find({
            grades: {
                $elemMatch: {
                    score: {
                        $gt: 90,
                    }
                }
            }
        });
        return res.json({
            msg: 'restaurantes con score de 90 obtenidos',
            data: restaurants,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar todos los restaurantes',
            error,
        });
    }
};
const getScore80100 = async (_, res) => {
    try {
        const restaurants = await Restaurant.find({
            grades: {
                $elemMatch: {
                    score: {
                        $gt: 80,
                        $lt: 100
                    }
                }
            }
        });
        return res.json({
            msg: 'restaurantes con score de 80 menor 100 obtenidos',
            data: restaurants,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar todos los restaurantes',
            error,
        });
    }
};
const getCusineAmerican = async (_, res) => {
    try {
        const restaurants = await Restaurant.find({
            cuisine: "American ",
            grades: {
                $elemMatch: {
                    score: {
                        $gt: 70,
                    }
                }
            }
        });
        return res.json({
            msg: 'restaurantes con score de 90 obtenidos',
            data: restaurants,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar todos los restaurantes',
            error,
        });
    }
};
const getFirst = async (_, res) => {
    try {
        const restaurants = await Restaurant.find({}, { _id: 0 }).limit(1);
        return res.json({
            msg: 'Restaurantes obtenidos',
            data: restaurants,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar restaurantes',
            error: error.message,
        });
    }
};
const getRestaurantNames = async (_, res) => {
    try {
        const restaurants = await Restaurant.find({}, { name: 1, _id: 0 });

        return res.json({
            msg: 'Restaurantes obtenidos',
            data: restaurants.map((restaurant) => {
                return restaurant.name;
            }),
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar restaurantes',
            error: error.message,
        });
    }
};


export {
    getAllRestaurants,
    getFirst5,
    getEspecificRestaurant,
    getScore90,
    getScore80100,
    getCusineAmerican,
    getFirst,
    getRestaurantNames
}
