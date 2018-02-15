var userData = require('./userData.json')

module.exports = {
    getAllUsers: (req, res) => {
        var { favorites, age, lastname, email } = req.query
        // console.log(req.query)
        if (favorites) {
            let filterData = userData.filter(val => {
                for (i = 0; i < val.favorites.length; i++) {
                    if (val.favorites[i] === favorites) {
                        i = val.favorites.length
                        return val
                    }
                }
            })
            res.send(filterData)
        }

        if (age) {
            let filterData = userData.filter(val => {
                if (val.age < age) {
                    return val
                }
            })
            res.send(filterData)
        }

        if (lastname) {
            let filterData = userData.filter(val => {
                if (val.last_name == lastname) {
                    return val
                }
            })
            res.send(filterData)
        }

        if (email) {
            let filterData = userData.filter(val => {
                if (val.email == email) {
                    return val
                }
            })
            res.send(filterData)
        }

        res.send(userData)
    },
    getUserById: (req, res) => {
        userData.filter(val => {
            if (val.id == req.params.id) {
                res.status(200).send(val)
            }
        })
        res.status(404).json(null)
    },
    getAdmins: (req, res) => {
        let filterData = userData.filter(val => {
            if (val.type == 'admin') {
                return val
            }
        })
        res.send(filterData)
    },
    getNonAdmins: (req, res) => {
        let filterData = userData.filter(val => {
            if (val.type !== 'admin') {
                return val
            }
        })
        res.send(filterData)
    },
    getUserType: (req, res) => {
        let filterData = userData.filter(val => {
            if (val.type == req.params.type) {
                return val
            }
        })
        res.send(filterData)
    },
    updateUser: (req, res) => {
        let newData = userData.map(val => {
            if (val.id == req.params.id) {
                return req.body
            }
            return val
        })
        res.send(newData)
    },
    addNew: (req, res) => {
        let newUser = Object.assign({}, req.body, {id: ++userData.length})
        if (!userData.length-1) {
            userData.pop()
            userData.push(newUser)
        } else {
            userData.push(newUser)
        }
        res.send(userData)
    },
    deleteUser: (req, res) => {
        let filterData = userData.filter(val => {
            if (val.id != req.params.id) {
                return val
            }
        })
        res.send(filterData)
    }
}