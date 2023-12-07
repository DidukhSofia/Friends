const getFriends = "SELECT * FROM hiredfriends";
const getFriendsById = "SELECT * FROM hiredfriends WHERE friend_id = $1";
const getFreeFriends = `WITH FreeFriends AS (  SELECT
    hf.name AS friend_name,    hf.phone AS friend_phone
  FROM    HiredFriends hf
  WHERE    NOT EXISTS (
      SELECT 1      FROM
        WorkSchedule ws      WHERE
        ws.friend_id = hf.friend_id        AND ws.data = $1
    ))
SELECT  ff.friend_name,
  ff.friend_phone FROM
  FreeFriends ff;`;
const checkFriendExist = "SELECT * FROM hiredfriends WHERE name = $1 AND phone = $2";
const addFriend = "INSERT INTO hiredfriends (name, phone) VALUES ($1, $2)";

module.exports = {
    getFriends,
    getFriendsById,
    checkFriendExist,
    addFriend,
    getFreeFriends
};