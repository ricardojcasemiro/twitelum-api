class TweetsService {
    constructor(app) {
        this.app = app
        this.TweetsDAO = this.app.infra.dao.TweetsDAO

        // Bind class methods
        this.pegaTodos = this.pegaTodos.bind(this)
    }

    pegaTodos() {
        return this.TweetsDAO
                   .buscaTodos()
    }
}

module.exports = (app) => new TweetsService(app)