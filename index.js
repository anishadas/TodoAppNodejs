const express=require("express")

const port = 8000;
const app = express();

app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running server: ${err}`);
    }
    console.log(`server is running on port ${port}`);

})
