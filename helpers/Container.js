const fs = require('fs');
const fsPromises = fs.promises;


class Container {
    constructor(fileName) {
        this.filePath = `./${fileName}.txt`;
        this.items = [];
        fs.open(this.filePath, 'r', (err, fd) => {
            if(err) {
                // Se crea el archivo si no existe
                fs.writeFileSync(this.filePath, JSON.stringify(this.items, null, 2));
            } else {
                // Se lee el archivo si existe
                this.items = JSON.parse(fs.readFileSync(this.filePath, {encoding: 'utf-8'}));
            }
        });
    }

    // Guarda un nuevo objeto en el array y le asigna un nuevo Id
    async save(obj) {
        try {
            let newId = 0;
            const size = this.items.length;
            if(size) {
                newId = this.items[size - 1].id + 1;
            }
            const newItem = {
                ...obj,
                id: newId,
                timestamp: Date.now()
            };
            this.items.push(newItem);

            await fsPromises.writeFile(this.filePath, JSON.stringify(this.items, null, 2));
            return {success: true, newId};
        } catch(err) {
            return {success: false, error: err.message};
        }
    }

    async updateById(id, product) {
        try{
            const items = await this.getAll();
            const itemIndex = items.findIndex(el => el.id == id);
            const oldProduct = items[itemIndex];
            const newProduct = Object.assign(oldProduct, product, { timestamp: Date.now() });
            items[itemIndex] = newProduct;
            
            await fsPromises.writeFile(this.filePath, JSON.stringify(items, null, 2));
            return { success: true, product: newProduct };
        } catch(err) {
            return { success: false, error: err.message };
        }
    }

    async getById(id) {
        try {
            const items = await this.getAll();
            const foundItem = items.find(el => el.id == id);
            if (!foundItem) return -1;
            return foundItem;
        } catch(err) {
            return {success: false, error: err.message};
        }
    }

    async getAll() {
        try {
            const items = JSON.parse(await fsPromises.readFile(this.filePath));
            return items;
        } catch(err) {
            console.log('No se puedo leer el archivo', err);
        }
    }

    getAllSync() {
        return JSON.parse(fs.readFileSync(this.filePath, {encoding: 'utf-8'}));
    }

    async deleteById(id) {
        try {
            const items = await this.getAll();
            const arrayIndex = items.findIndex(el => el.id == id);
            if(arrayIndex === -1) {
                return {
                    succes: false,
                    err: `El archivo con id=${id} no existe`
                };
            }
            items.splice(arrayIndex, 1);
            await fsPromises.writeFile(this.filePath, JSON.stringify(items, null, 2));
            return { success: true, id };
        } catch(err) {
            return { succes: false, err: err.message };
        }
    }

    async deleteAll() {
        try {
            await fsPromises.writeFile(this.filePath, JSON.stringify([]));
            return { success: true };
        } catch (err) {
            console.log('Hubo un error', err);
        }
    }
}

module.exports = Container;