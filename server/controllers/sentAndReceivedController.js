const { db } = require('../db/db');

const getSentAndReceived = async (req, res) => { 
    let sql = `SELECT 
	COUNT(*) FILTER (WHERE m.is_from_me = 1) as Sent,
	COUNT(*) FILTER (WHERE m.is_from_me = 0) as Received
    FROM message m;`;

    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

const getSentEmojis = async (req, res) => { 
    let sql = `SELECT
	count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π€£" and m.is_from_me=1) as π€£,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "βΊοΈ" and m.is_from_me=1) as βΊοΈ,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π€" and m.is_from_me=1) as π€,
count(1) filter (where text like "π€©" and m.is_from_me=1) as π€©,
count(1) filter (where text like "π₯°" and m.is_from_me=1) as π₯°,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π€" and m.is_from_me=1) as π€,
count(1) filter (where text like "π€¨" and m.is_from_me=1) as π€¨,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "πΆ" and m.is_from_me=1) as πΆ,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π£" and m.is_from_me=1) as π£,
count(1) filter (where text like "π₯" and m.is_from_me=1) as π₯,
count(1) filter (where text like "π?" and m.is_from_me=1) as π?,
count(1) filter (where text like "π€" and m.is_from_me=1) as π€,
count(1) filter (where text like "π―" and m.is_from_me=1) as π―,
count(1) filter (where text like "πͺ" and m.is_from_me=1) as πͺ,
count(1) filter (where text like "π«" and m.is_from_me=1) as π«,
count(1) filter (where text like "π₯±" and m.is_from_me=1) as π₯±,
count(1) filter (where text like "π΄" and m.is_from_me=1) as π΄,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π" and m.is_from_me=1) as π,
count(1) filter (where text like "π€€" and m.is_from_me=1) as π€€
FROM
	message as m;`;

    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

const getReceivedEmojis = async (req, res) => { 
    let sql = `SELECT
	count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π€£" and m.is_from_me=0) as π€£,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "βΊοΈ" and m.is_from_me=0) as βΊοΈ,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π€" and m.is_from_me=0) as π€,
count(1) filter (where text like "π€©" and m.is_from_me=0) as π€©,
count(1) filter (where text like "π₯°" and m.is_from_me=0) as π₯°,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π€" and m.is_from_me=0) as π€,
count(1) filter (where text like "π€¨" and m.is_from_me=0) as π€¨,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "πΆ" and m.is_from_me=0) as πΆ,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π£" and m.is_from_me=0) as π£,
count(1) filter (where text like "π₯" and m.is_from_me=0) as π₯,
count(1) filter (where text like "π?" and m.is_from_me=0) as π?,
count(1) filter (where text like "π€" and m.is_from_me=0) as π€,
count(1) filter (where text like "π―" and m.is_from_me=0) as π―,
count(1) filter (where text like "πͺ" and m.is_from_me=0) as πͺ,
count(1) filter (where text like "π«" and m.is_from_me=0) as π«,
count(1) filter (where text like "π₯±" and m.is_from_me=0) as π₯±,
count(1) filter (where text like "π΄" and m.is_from_me=0) as π΄,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π" and m.is_from_me=0) as π,
count(1) filter (where text like "π€€" and m.is_from_me=0) as π€€
FROM
	message as m;`;

    try {
        db.all(sql,[],(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json(rows);
        })
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {getSentAndReceived: getSentAndReceived, getSentEmojis:getSentEmojis, getReceivedEmojis:getReceivedEmojis};