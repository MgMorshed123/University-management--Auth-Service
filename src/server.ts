import mongoose from "mongoose";
import app from "./app";
import config from "./config";

// Start the server
const port = process.env.PORT || 3000;

async function main() {


    try {
        await mongoose.connect(config.database_url as string);
        console.log("application connected ")

        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
          });
          

    } catch (error) {
        
    }
}

main()