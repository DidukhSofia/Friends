const express = require("express");
const cors = require("cors");
const friendsRoutes = require('./src/friend/routes');
const clientRoutes = require('./src/client/routes')
const eventRoutes = require('./src/event/routes')
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello");
})

app.use('/api/friends', friendsRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/events', eventRoutes);



app.listen(port, () => console.log(`app listening on port ${port}`))