// lista baz
show dbs

// utworzy bazę i przełącza na nią
use nazwaBazy

//umieść nowy dokument w kolekcji

db.entries.insertOne({
    name:"Junior Front End",
    category:"Programming",
    price:4500,
    city:"Warszawa",
    hours:70
})

db.entries.insertOne({
    name:"Senior Front End",
    category:"Programming",
    price:8000,
    city:"Warszawa",
    hours:150
})

db.entries.insertOne({
    name:"C++ Developer",
    category:"Programming",
    price:10000,
    city:"Warszawa",
    hours:180
})

// pokaż wszyskie dokumenty w kolekcji
db.entries.find({})

// pokaż pierwszy spotkany dokument w kolekcji
db.entries.findOne({})

// pokaż wszystkie kursy w KAtowicach
db.entries.find({city:"Warszawa"})

//dokument zupełnie inny od reszty dokumentów z kolekcji courses
db.entries.insertOne({
    irstName:"Jan",
    age:20
})

// usuń dokument o id...
db.entries.deleteOne({_id:ObjectId("64b95c265376728cbdeb8ac5")})

// zmiana nazwy
db.etires.renameCollection("nowaNazwa")

// kopiowanie danych z jednej kolekcji do drugiej 
db.new.aggregate( [
    { $project: { _id: 0 } },
    { $merge : { into : "entries" } }
 ] )