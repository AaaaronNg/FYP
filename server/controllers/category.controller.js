const { categoryService } = require("../services");

const categoryController = {
    async addCategory(req, res, next) {
        try {
            const category = await categoryService.addCategory(req.body.categoryName)

            res.json(category)
        } catch (error) {
            next(error)
        }
    },
    async getCategories(req, res, next) {
        try {
            const categories = await categoryService.getCategories(req.body);
            res.json(categories)
        } catch (error) {
            next(error);
        }

    },
    async getCategory(req, res, next) {
        try {
            const id = req.params.id // url
            const category = await categoryService.getCategoryById(id)
            res.json(category)
        } catch (error) {
            next(error)
        }
    },
    async deleteCategory(req, res, next) {
        try {
            const id = req.params.id

            const category = await categoryService.deleteCategoryByID(id)
            res.json(category)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = categoryController