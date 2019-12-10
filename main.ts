let Chicken_Leg = sprites.create(img`
. . . . . . . . . . b b b b b b . . . . . . . . . . . . . . . . 
. . . . . . . b b b 4 4 4 4 4 4 b b . . . . . . . . . . . . . . 
. . . . . 2 2 4 4 4 4 4 d d d 4 4 4 b . . . . . . . . . . . . . 
. . . . 2 4 4 4 4 4 4 4 4 d d d d 4 4 e . . . . . . . . . . . . 
. . . 2 4 4 4 4 4 4 4 4 4 4 4 d d d 4 b e . . . . . . . . . . . 
. . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 4 b e . . . . . . . . . . 
. 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 b e . . . . . . . . . . 
. 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b 4 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . 
2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e . . . . . . . . 
2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e . . . . . . . . 
2 b b b 4 4 4 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e . . . . . . . . 
2 2 b b b 4 4 4 b b 4 b b 4 4 4 4 4 4 4 4 4 b e . . . . . . . . 
. 2 b b b b b 4 4 b b b b 4 4 4 4 4 4 4 4 b b e . . . . . . . . 
. 2 2 b b b b b b b b 4 4 b b b 4 4 4 4 4 4 b b e . . . . . . . 
. . e e e b b b b b b b 4 4 b b b 4 4 4 4 4 4 b e . . . . . . . 
. . . e e e e e b b b b b b b b 4 4 b 4 4 4 4 b e . . . . . . . 
. . . . . e e e e e e 2 2 2 b b 4 4 b b b 4 b b e . . . . . . . 
. . . . . . . e e e e e 2 2 2 b b 4 4 b b b b e e . . . . . . . 
. . . . . . . . . . . . e 2 2 2 b b b b b b b e c . . . . . . . 
. . . . . . . . . . . . . . e e 2 b b b b e e b d b . . . . . . 
. . . . . . . . . . . . . . . . . e e e e e c d d d b . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . c d 1 1 b b b b . 
. . . . . . . . . . . . . . . . . . . . . . . . c d 1 1 1 d b b 
. . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c 1 1 d d 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c d 1 d b c . 
. . . . . . . . . . . . . . . . . . . . . . . . . c b 1 1 c . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Chicken_Leg.setPosition(20, 20)
let Snake = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Player)
Snake.setPosition(100, 20)
let Shark = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . c c c 
. . . . f f f f f f c c c c c c f f . . . . . . . . . c c b b c 
. . f f b b b b b b b b b b b b b c f f f . . . . . c d b b c . 
f f b b b b b b b b b c b c b b b b c c c f f . . c d d b b f . 
f b c b b b b b f f b b c b c b b b c c c c c f f f d b b f . . 
f b b b 1 1 1 1 f f 1 b c b c b b b c c c c c c c b b b c f . . 
. f b 1 1 1 1 1 1 1 1 b b b b b b c c c c c c c c c b c c f . . 
. . f c c c 3 3 c c 1 1 b b b b c c c c c c c c f f f b b c f . 
. . . f c 1 3 1 c 1 1 1 b b b c c c c c b d b c . . . f b b f . 
. . . . f 3 3 c 1 1 1 c b b b f d d d d d c c . . . . . f b b f 
. . . . . f f 1 1 1 1 f b d b b f d d c c . . . . . . . . f f f 
. . . . . . . c c c c c f b d b b f c . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Shark.setPosition(61, 20)
let Taco = sprites.create(img`
. . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . 
. . . . . . . . . . . . e e 4 5 5 6 6 2 e 2 e . . . . . . . . . 
. . . . . . . . . . e e 4 5 5 5 6 7 2 3 e 2 6 8 8 . . . . . . . 
. . . . . . . . . e 4 6 7 7 6 6 7 7 2 3 2 e 7 7 7 6 6 8 . . . . 
. . . . . . . . e 4 6 7 4 5 5 5 4 7 7 2 2 2 7 7 7 6 7 7 8 . . . 
. . . . . . . 4 4 4 8 7 4 4 4 4 4 7 7 7 7 6 6 7 7 7 6 7 8 . . . 
. . . . . . 4 5 2 2 e 7 7 7 7 7 7 6 7 7 7 7 6 6 6 7 6 6 6 8 . . 
. . . . . 4 5 2 3 2 2 7 7 6 6 7 2 2 e 6 6 6 e e e e e 8 8 8 . . 
. . . . 4 5 5 2 3 2 e 7 6 6 7 2 3 2 2 e 4 5 5 5 d d d d 4 8 . . 
. . . 4 4 5 6 7 7 7 7 5 5 4 6 2 3 e 4 5 5 d d d d d d d d d 4 . 
. . . e 6 6 7 7 4 5 5 4 4 7 7 e 4 5 5 d d d d 5 5 5 5 4 d d 4 4 
. . e 4 6 7 7 7 4 4 4 6 7 7 e 5 5 d d 5 5 5 5 5 d 5 5 d d d d 4 
. . e 5 6 6 8 6 7 7 6 6 6 e 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 d d e 
. e 4 5 5 4 4 e 8 7 7 6 e 5 d 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 d e 
. e 5 5 4 e e e e 6 6 e 5 d 5 5 5 5 d 5 5 5 5 5 d d d d 5 4 d e 
. e 5 5 e e 4 4 f e e 5 d 5 d 5 5 5 5 5 5 d 5 d 5 d d d d d d e 
e 4 5 4 e e e e f e 4 5 d 5 5 5 5 5 5 5 5 5 5 5 d d 4 d d d e . 
e 5 e 4 e e f f f e 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 d d d d e . . 
e 5 e e 4 e e f f 4 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d d d e . . . 
e 5 e e e e f f e 5 d 5 5 d 5 5 5 d 5 5 5 5 d 5 d d d e . . . . 
e 5 f f e f e e e 5 d 5 5 5 4 5 5 5 5 5 5 5 d d d 4 e . . . . . 
e 5 f f f f f f e 5 4 5 5 5 5 5 5 5 d 5 d 4 d d e e . . . . . . 
e 5 4 e f e f f 4 5 d 5 5 d 5 5 5 5 5 d d d d e . . . . . . . . 
e 5 e e e f f e 5 d d 5 5 5 5 5 4 5 d d d e e . . . . . . . . . 
e 4 e e e f f f 5 d 5 5 5 5 d 5 5 d d d e . . . . . . . . . . . 
e 4 e f e f f f 5 d 5 d 5 5 5 5 5 d 4 e . . . . . . . . . . . . 
. e 4 e f f f e 5 d 5 5 5 5 5 5 d e e . . . . . . . . . . . . . 
. e 5 4 e e e e 5 d 5 4 5 d d 4 e . . . . . . . . . . . . . . . 
. . e 5 5 4 e e 5 d d d d d e e . . . . . . . . . . . . . . . . 
. . . e e 5 5 4 4 d d d e e . . . . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Taco.setPosition(134, 20)
let Ham = sprites.create(img`
. . . . . . . . . . . 2 2 2 2 2 2 e e . . . . . . . . . . . . . 
. . . . . . . . . 2 2 3 3 3 3 3 b b e e e . . . . . . . . . . . 
. . . . . . . 2 2 3 3 d 1 1 1 1 3 3 3 b e e . . . . . . . . . . 
. . . . . . 2 3 d d d 1 1 1 d d 1 d 3 3 e e e . . . . . . . . . 
. . . . . 2 3 d 1 3 3 3 d 1 d 3 3 d 1 3 b e e . . . . . . . . . 
. . . . 2 3 d 1 3 3 3 3 3 d 1 d 3 3 3 1 3 e e e . . . . . . . . 
. . . 2 3 1 1 3 3 3 3 3 3 d d d 3 3 3 3 d b e e e . . . . . . . 
. . 2 3 1 3 3 3 3 3 3 3 3 3 3 d d d 3 3 d 3 e 4 4 e . . . . . . 
. . 2 1 d 3 3 3 3 3 3 3 3 3 3 d d d 3 3 3 d b 4 4 e e . . . . . 
. 2 3 1 3 3 3 3 3 3 3 3 3 3 d d 3 3 3 3 3 d b 4 4 4 e e . . . . 
. 2 d d 3 3 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 3 b 4 4 4 e . . . . 
2 3 1 1 d 3 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d d b b 4 4 4 e . . . 
2 d 1 3 1 d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 1 b 6 6 4 4 e . . . 
2 d 3 3 d d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 1 b 4 4 4 4 4 e . . 
2 1 3 3 3 d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 d 1 6 4 4 6 6 4 e e . 
2 1 3 3 3 d 3 3 3 3 3 3 d 3 3 3 3 3 3 3 3 d 1 6 b 6 4 4 6 4 b e 
2 1 3 3 3 d d d d 3 3 d d 3 3 3 3 3 3 3 3 d 1 6 4 6 4 4 6 b 6 e 
2 1 3 3 3 3 3 d d 1 1 d d 3 3 3 3 3 3 3 3 d 1 6 4 4 b 6 4 4 6 e 
e 1 3 3 3 3 3 d 1 d 3 1 d 3 3 3 3 3 3 3 3 d 1 b 4 4 4 6 4 4 6 e 
e 1 3 3 3 3 3 1 d 3 3 3 1 3 3 3 3 3 3 3 3 1 d 6 b b 4 4 b 6 e . 
e 1 3 3 3 3 3 1 d d 3 3 1 b 3 3 3 3 3 3 3 1 3 6 b b 6 b b 6 e . 
e 1 3 3 3 3 3 3 1 d d 1 d b 3 3 3 3 3 3 3 1 b 6 b 6 6 b b e . . 
e d d 3 3 3 3 3 3 1 1 d b 3 3 3 3 3 3 3 d d 6 b b 6 b b e . . . 
e 3 d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 3 3 1 3 6 b e e b b e . . . 
. e d d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 d d b f e e b b e . . . . 
. e 3 d d 3 3 3 3 3 d d 3 3 3 3 3 3 3 d 3 e f e e e e . . . . . 
. . e 3 d d 3 3 3 d 1 3 3 3 3 3 3 d d 3 b f f f f f . . . . . . 
. . . e 3 1 1 1 1 1 d d d 3 3 3 d d d b f f e e f . . . . . . . 
. . . . e e d 1 d 3 3 d 1 1 1 1 1 3 b e f e f f . . . . . . . . 
. . . . . . e e b 3 3 3 d d 1 3 b e f f f f . . . . . . . . . . 
. . . . . . . . e e e e f f f f f e e . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
Ham.setPosition(20, 50)
let Duck = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 3 b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
Duck.setPosition(61, 50)
