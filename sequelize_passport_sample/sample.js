var models = require("./models/index");

async function main() {
    // insert
    // await models.books.create({
    //     bookid: 4,
    //     name: "orange",
    //     price: 400,
    // });

    // delete
    // await models.books.destroy({ where: { bookid: 4 } });

    // select
    // let grape = await models.books.find( { where: { bookid: 2 } });
    // console.log(JSON.stringify(grape));
    // let melon = await models.books.findOne({ where: { bookid: 3 } });
    // console.log(JSON.stringify(melon));

    // update
    // await models.books.update({ price: 2000 }, { where: { bookid: 2 } });

    // 一度に大量にinsert
    // await models.books.bulkCreate([
    //     { bookid: 4, name: "orange", price: 400 },
    //     { bookid: 5, name: "banana", price: 500 },
    // ]);

    let test = await models.books.findAll();
    console.log(JSON.stringify(test));
}

main();
