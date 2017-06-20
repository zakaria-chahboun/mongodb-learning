// :: MongoDB :: zakarai chahboun | 2017
use market

db.mytable.find({price:{$lt:90}}).pretty()