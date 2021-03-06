var router = require("express").Router();

router.use((req, res, next) => {
    console.log((new Date()).toISOString() + ': Hello API');
    next();
});

router.get("/", (req, res) => {
    res.send("hello");
});

// 「/user/about」にマッチする場合の処理
router.get("/world", (req, res) => {
    res.send("helloworld");
});

module.exports = router;