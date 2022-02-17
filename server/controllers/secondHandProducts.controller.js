const { secondHandProductService } = require("../services");




const secondHandProductController = {
    async addSecondHandProduct(req, res, next) {
        try {
            const secondHandProduct = await secondHandProductService.addSecondHandProduct(req.body);
            res.json(secondHandProduct)
        } catch (error) {
            next(error);
        }
    },
    async getSecondHandProduct(req, res, next) {
        try {
            const _id = req.params.id
            const shp = await secondHandProductService.getSHPbyId(_id)
            res.json(shp)
        } catch (error) {
            next(error)
        }
    },
    async updateSecondHandProdcut(req, res, next) {
        try {
            const _id = req.params.id
            const shp = await secondHandProductService.updateSHPbyId(_id, req.body)
            res.json(shp)
        } catch (error) {
            next(error)
        }
    },
    async deleteSecondHandProduct(req, res, next) {
        try {
            const _id = req.params.id;
            const shp = await secondHandProductService.deleteSHPbyId(_id)
            res.json(shp)
        } catch (error) {
            next(error)
        }
    }
    ,
    async allSecondHandProduct(req, res, next) {
        try {
            const shps = await secondHandProductService.allSHPs(req)
            res.json(shps)
        } catch (error) {
            next(error)
        }
    },
    async paginateSecondHandProducts(req, res, next) {
        try {
            const shps = await secondHandProductService.paginateSHPs(req)
            res.json(shps)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = secondHandProductController